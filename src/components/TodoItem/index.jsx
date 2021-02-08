import React from 'react'
import { useDispatch } from 'react-redux';
import { dragStart, dropHandler } from '../../redux/actions';
import s from './item.module.scss';

const TodoItem = ({title, item, board}) => {
  const dispatch = useDispatch()
   const dragOverHandler = (e) => {
    e.preventDefault()
    if (e.target.className == "sc-gsTCUz bBxwgc") {
      e.target.style.boxShadow = '0 2px 3px gray'
    }
  }

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none'
  }

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none'
  }

  return (
    <div
      className={s.itemWrapper} 
      draggable={true}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dispatch(dragStart(e, board, item))}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dispatch(dropHandler(e, board, item))}
    >
      {title}
    </div>
  )
}

export default TodoItem
