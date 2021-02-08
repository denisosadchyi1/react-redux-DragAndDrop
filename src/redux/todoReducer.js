import { combineReducers } from "redux";
import { ADD_NEW, DRAG_START, DROP, DROP_CARD } from "./actionType";

const todosState = [
  {
    id: 1,
    title: "Сделать",
    items: [
      { id: 1, title: "Пойти в магазин" },
      { id: 2, title: "Пойти погулять" },
      { id: 3, title: "Купить молоко" },
    ],
  },
  {
    id: 2,
    title: "Проверить",
    items: [
      { id: 4, title: "Проверить код" },
      { id: 5, title: "Проверить почту" },
      { id: 6, title: "Проверить Тз" },
    ],
  },
  {
    id: 3,
    title: "Сделано",
    items: [
      { id: 7, title: "Сделать таску" },
      { id: 8, title: "Погулять с собакой" },
      { id: 9, title: "Купить продукты" },
    ],
  },
  { id: 4, title: "Новые", items: [] },
];

const currentState = {
  currentItem: null,
  currentBoard: null,
};

export const todosReducer = (state = todosState, action) => {
  switch (action.type) {
    case DROP:
      return [...action.payload]
    case DROP_CARD:
      return [...action.payload]
    case ADD_NEW:
      return [...action.payload]
    default:
      return state;
  }
};

const currentReducer = (state = currentState, action) => {
  switch (action.type) {
    case DRAG_START:
      return {
        currentItem: action.payload.item,
        currentBoard: action.payload.board,
      };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
  current: currentReducer
});
