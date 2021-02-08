import { ADD_NEW, DRAG_START, DROP, DROP_CARD } from "./actionType"

const initialState = {
  todos: [
    {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в магазин'}, {id: 2, title: 'Пойти погулять'}, {id: 3, title: 'Купить молоко'}]},
    {id: 2, title: 'Проверить', items: [{id: 4, title: 'Проверить код'}, {id: 5, title: 'Проверить почту'}, {id: 6, title: 'Проверить Тз'}]},
    {id: 3, title: 'Сделано', items: [{id: 7, title: 'Сделать таску'}, {id: 8, title: 'Погулять с собакой'}, {id: 9, title: 'Купить продукты'}]},
    {id: 4, title: 'Новые', items: []}
  ],
  currentItem: null,
  currentBoard: null
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case DRAG_START:
      return {
        ...state,
        currentItem: action.payload.item,
        currentBoard: action.payload.board
      }
    case DROP:
      return {
        ...state,
        todos: action.payload
      }
    case DROP_CARD:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_NEW:
      return {
        ...state,
        todos: action.payload
      }

    default: return state
  }
}