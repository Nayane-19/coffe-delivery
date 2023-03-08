import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import { CoffeContextData, CoffeData } from '../@types/coffes'
import { addCoffeAtCart, calculateTotalCart } from '../reducers/action'
import { coffeReduce } from '../reducers/reduce'


export const CoffeContext = createContext({} as CoffeContextData)

interface CoffeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({
  children,
}: CoffeContextProviderProps) {
  const [coffeState, dispatch] = useReducer(
    coffeReduce,
    {
      cart: [],
      totalPayment: {
        delivery: 0,
        totalItems: 0,
        totalValue: 0,
    },
      address: {
          cep: "",
          city: "",
          clomplement: "",
          neighborhood: "",
          number: 0,
          state: "",
          street: "",
      }
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffe-delivery:coffe-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )


  useEffect(() => {
    const stateJSON = JSON.stringify(coffeState)

    localStorage.setItem('@coffe-delivery:coffe-state-1.0.0', stateJSON)
  }, [coffeState])

  function createNewCycle(data: CoffeData) {
    console.log("aqui");

    dispatch(addCoffeAtCart(data))
    dispatch(calculateTotalCart(data))
  }

  return (
    <CoffeContext.Provider
      value={{
        createNewCycle,
        cart: [],
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}