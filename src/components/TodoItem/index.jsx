import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, dragStart, dropHandler } from "../../redux/actions";
import s from "./item.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ title, item, board }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector((state) => state.current.currentBoard);
  const currentItem = useSelector((state) => state.current.currentItem);
  const todos = useSelector((state) => state.todos);

  const onDelete = () => {
    let tmp = todos.map(todo => {
      if (todo.id === board.id) {
        todo.items = todo.items.filter(t => t.id !== item.id)
      }
      return todo
    })
    dispatch(deleteItem(tmp))
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    if(e.target.tagName !== 'svg') {
      if (e.target.className === 'item_itemWrapper__2wCL-') {
        e.target.style.boxShadow = "0 2px 3px gray";
      }
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const onDropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    let tmpBoard = todos.map((b) => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    });
    e.target.style.boxShadow = "none";
    dispatch(dropHandler(tmpBoard));
  };

  return (
    <div
      draggable={true}
      className={s.itemWrapper}
      onDragStart={() => dispatch(dragStart(board, item))}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => onDropHandler(e, board, item)}
    >
      {title}
      <FontAwesomeIcon 
        className={s.deleteButton} 
        icon={faTimes} 
        onClick={() => onDelete()}
        // onClick={() => dispatch(deleteItem(item.id, board.id))}
      />
    </div>
  );
};

export default TodoItem;
