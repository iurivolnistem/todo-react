import { useState } from 'react'
import { Navbar } from './components/Navbar';
import { TodoList } from './components/TodoList';

import styles from './App.module.css';

import './global.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <TodoList />
      </main>
    </>
  )
}

export default App
