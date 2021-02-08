import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dropCardHandler } from '../../redux/actions';
import TodoItem from '../TodoItem';
import s from './board.module.scss';

const TodoBoard = () => {
  const dispatch = useDispatch()
  const boards = useSelector(state => state.todos)
  const currentBoard = useSelector(state => state.current.currentBoard)
  const currentItem = useSelector(state => state.current.currentItem)
  const todos = useSelector(state => state.todos)

  const dragOverHandler = (e) => {
    e.preventDefault()
    if (e.target.className.includes('itemWrapper')) {
      e.target.style.boxShadow = '0 2px 3px gray'
    }
  }

  const onDropCardHandler = (e, board) => {
    e.preventDefault()
    if(e.target.className.includes('itemWrapper')) {
      return
    } else {
      board.items.push(currentItem)
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      let tmpBoard = todos.map(b => {
        if (b.id === board.id) {
            return board
        }
        if (b.id === currentBoard.id) {
          return currentBoard
        }
        return b
      })
      e.target.style.boxShadow = 'none'
      dispatch(dropCardHandler(tmpBoard))
    }
  }

  return (
    <>
      {boards.map(board => 
        <div
          className={s.boardWrapper}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => onDropCardHandler(e, board)} 
        >
        <div className={s.boardTitle}>{board.title}</div>
        {board.items.map(item => 
          <TodoItem
            item={item}
            board={board}
            title={item.title}
          />  
        )}
        </div>
      )}
    </>
  )
}

export default TodoBoard
