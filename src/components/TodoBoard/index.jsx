import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dropCardHandler } from '../../redux/actions';
import TodoItem from '../TodoItem';
import s from './board.module.scss';

const TodoBoard = () => {
  const boards = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const dragOverHandler = (e) => {
    e.preventDefault()
    if (e.target.className == "sc-gsTCUz bBxwgc") {
      e.target.style.boxShadow = '0 2px 3px gray'
    }
  }
  return (
    <>
      {boards.map(board => 
        <div
          className={s.boardWrapper}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dispatch(dropCardHandler(e, board))} 
          key={Math.random() + Date.now()} 
        >
        <div className={s.boardTitle}>{board.title}</div>
        {board.items.map(item => 
          <TodoItem
            item={item}
            board={board}
            key={Math.random() + Date.now()} 
            title={item.title}
          />  
        )}
        </div>
      )}
    </>
  )
}

export default TodoBoard
