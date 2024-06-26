import React from 'react';
import { Route, Routes} from 'react-router-dom'
import {Casting, Movies, MoviesDetails, Navbar, Profile} from './index'

const App = () => (
  <div className='flex h-full'>
  <Navbar />
     <main className=' flex-grow p-[2em]'>
     <div className='h-[70px]'/>
      <Routes>
       <Route path='/' element={<Movies />} />
      </Routes>
     </main>
  </div>
);

export default App;