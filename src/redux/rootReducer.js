import { DRAG_START, DROP, DROP_CARD } from "./actionType"

const initialState = {
  todos: [
    {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в магазин'}, {id: 2, title: 'Пойти погулять'}, {id: 3, title: 'Купить молоко'}]},
    {id: 2, title: 'Проверить', items: [{id: 4, title: 'Проверить код'}, {id: 5, title: 'Проверить почту'}, {id: 6, title: 'Проверить Тз'}]},
    {id: 3, title: 'Сделано', items: [{id: 7, title: 'Сделать таску'}, {id: 8, title: 'Погулять с собакой'}, {id: 9, title: 'Купить продукты'}]}
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
    case DROP: {
      const {board, item, e} = action.payload
      e.preventDefault()
      const currentIndex = state.currentBoard.items.indexOf(state.currentItem)
      state.currentBoard.items.splice(currentIndex, 1)
      const dropIndex = board.items.indexOf(item)
      board.items.splice(dropIndex + 1, 0, state.currentItem)
      let tmpBoard = state.todos.map(b => {
        if (b.id === board.id) {
            return board
        }
        if (b.id === state.currentBoard.id) {
          return state.currentBoard
        }
        return b
      })
      e.target.style.boxShadow = 'none'
      return {
        ...state,
        todos: tmpBoard
      }
    }
    case DROP_CARD: {
      const {e, board} = action.payload
      if(e.target.className.includes('itemWrapper')) {
        return
      } else {
        board.items.push(state.currentItem)
        const currentIndex = state.currentBoard.items.indexOf(state.currentItem)
        state.currentBoard.items.splice(currentIndex, 1)
        let tmpBoard = state.todos.map(b => {
          if (b.id === board.id) {
              return board
          }
          if (b.id === state.currentBoard.id) {
            return state.currentBoard
          }
          return b
        })
        e.target.style.boxShadow = 'none'
        return {
          ...state,
          todos: tmpBoard
        }
      }
      return state
    }
    default: return state
  }
}