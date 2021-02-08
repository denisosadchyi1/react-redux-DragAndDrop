import React from 'react'
import TodoBoard from '../TodoBoard';
import s from './list.module.scss';

const TodoList = () => {
  return (
    <div className={s.listWrapper}>
      <TodoBoard />
    </div>
    
  )
}

export default TodoList
