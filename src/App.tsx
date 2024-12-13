import * as React from 'react';
import './App.css'
import AppRoute from './route/AppRoute';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <section className='py-4'>
        <AppRoute />
      </section>
    </React.Fragment>
  )
}

export default App
