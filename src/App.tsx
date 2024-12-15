import * as React from 'react';
import './App.css'
import AppRoute from './route/AppRoute';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <React.Fragment>
      <Header />
      <section className='py-4'>
        <AppRoute />
        <Toaster />
      </section>
    </React.Fragment>
  )
}

export default App
