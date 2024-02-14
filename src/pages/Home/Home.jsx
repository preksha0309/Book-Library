import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import BookCards from '../../components/BookDetails/BookCards';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <BookCards/>
    </main>
  )
}

export default Home
