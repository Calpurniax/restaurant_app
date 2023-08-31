//import { useState } from 'react'
import './App.scss';
import Header from './components/Header';
import Reservation from './components/reservation/Reservation';
import List from './components/list/List';
import Form from './components/form/Form';
import Banner from './components/banner_desktop/Banner'
function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <List />
        <div className='main__container'>
          <Reservation />
          <Form/>
        </div>
        <Banner/>
      </main>
    </>
  )
}

export default App
