import { DRAG_END, DRAG_LEAVE, DRAG_OVER, DRAG_START, DROP, DROP_CARD } from "./actionType"

export const dragStart = (e, board, item) => {
  return {
    type: DRAG_START,
    payload: {
      e, board, item
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