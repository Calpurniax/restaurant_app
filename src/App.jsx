//import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Reservation from './components/reservation/Reservation';
import List from './components/list/List';
import Form from './components/form/Form';
function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <List />
        <div>
          <Reservation />
          <Form/>
        </div>
      </main>
    </>
  )
}

export default App
