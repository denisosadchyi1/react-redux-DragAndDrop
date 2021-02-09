import { ADD_NEW, DRAG_END, DRAG_LEAVE, DRAG_OVER, DRAG_START, DROP, DROP_CARD, DELETE_ITEM } from "./actionType"

export const dragStart = (board, item) => {
  return {
    type: DRAG_START,
    payload: {
        board, item
    }
  }
}

export const dragLeave = (e) => {
  return {
    type: DRAG_LEAVE,
    payload: e
  }
}

export const dragOver = (e) => {
  return {
    type: DRAG_OVER,
    payload: e
  }
}

export const dragEnd = (e) => {
  return {
    type: DRAG_END,
    payload: e
  }
}

export const dropHandler = (tmpBoard) => {
  return {
    type: DROP,
    payload: tmpBoard
  }
}

export const dropCardHandler = (tmpBoard) => {
  return {
    type: DROP_CARD ,
    payload: tmpBoard
  }
}

export const addNew = (newTmp) => {
  return {
    type: ADD_NEW,
    payload: newTmp
  }
}

export const deleteItem = (tmp) => {
  return {
    type: DELETE_ITEM,
    payload: tmp
  }
}