import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import s from './app.module.scss';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
