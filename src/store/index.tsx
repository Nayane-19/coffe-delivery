import { combineReducers, createStore } from 'redux';
import { coffeReduce } from './reduce';

const loadState = () => {
      const serializedState = localStorage.getItem('@coffe-delivery:coffe-state-1.0.0');
      if (serializedState === null)
        return undefined;
      let parsedState = JSON.parse(serializedState);
      return {CoffePersistentState: parsedState};
  };

const store = createStore(combineReducers({CoffePersistentState: coffeReduce }), loadState())
store.subscribe(() => localStorage.setItem('@coffe-delivery:coffe-state-1.0.0',JSON.stringify(store.getState().CoffePersistentState)))

export default store;