import { CoffeData } from "../@types/coffes";
import Expresso from "../assets/coffes/expresso.svg"
import Americano from "../assets/coffes/americano.svg"
import Cremoso from "../assets/coffes/expresso-cremoso.svg"
import Gelado from "../assets/coffes/cafe-gelado.svg"
import CafeComLeite from "../assets/coffes/cafe-com-leite.svg"
import Latte from "../assets/coffes/latte.svg"
import Capuccino from "../assets/coffes/capuccino.svg"
import Macchiato from "../assets/coffes/macchiato.svg"
import Moccacino from "../assets/coffes/mochaccino.svg"
import ChocolateQuente from "../assets/coffes/chocolate-quente.svg"
import Cubano from "../assets/coffes/cubano.svg"
import Havaiano from "../assets/coffes/havaiano.svg"
import Arabe from "../assets/coffes/arabe.svg"
import Irlandes from "../assets/coffes/irlandes.svg"

export const coffes: CoffeData[] = [
  {
    image: Expresso,
    tags: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: 5.9,
    quantity: 1,
    id: 1,
  },
  {
    image: Americano,
    tags: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: 5.9,
    quantity: 1,
    id: 2,
  },
  {
    image: Cremoso,
    tags: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    value: 6.9,
    quantity: 1,
    id: 3,
  },
  {
    image: Gelado,
    tags: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: 7.3,
    quantity: 1,
    id: 4,
  },
  {
    image: CafeComLeite,
    tags: ["Tradicional", "Com Leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: 7.5,
    quantity: 1,
    id: 5,
  },
  {
    image: Latte,
    tags: ["Tradicional", "Com Leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 8.2,
    quantity: 1,
    id: 6,
  },
  {
    image: Capuccino,
    tags: ["Tradicional", "Com Leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 8.5,
    quantity: 1,
    id: 7,
  },
  {
    image: Macchiato,
    tags: ["Tradicional", "Com Leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    value: 8.5,
    quantity: 1,
    id: 8,
  },
  {
    image: Moccacino,
    tags: ["Tradicional", "Com Leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 9.5,
    quantity: 1,
    id: 9,
  },
  {
    image: ChocolateQuente,
    tags: ["Especial", "Com Leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 10,
    quantity: 1,
    id: 10,
  },
  {
    image: Cubano,
    tags: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: 12,
    quantity: 1,
    id: 11,
  },
  {
    image: Havaiano,
    tags: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    value: 10.9,
    quantity: 1,
    id: 12,
  },
  {
    image: Arabe,
    tags: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: 11.3,
    quantity: 1,
    id: 13,
  },
  {
    image: Irlandes,
    tags: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: 12,
    quantity: 1,
    id: 14,
  },
];
