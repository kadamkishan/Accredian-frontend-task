
import React, { useState } from 'react';

const Home = ({isLoggedIn}) => {
  // items center
  return (
    <div className='flex justify-center mt-28  text-white text-3xl h-full'>
      <div className='flex flex-col text-center '>
        Assigment for Login & Register Page,
        <div className='text-2xl mt-6 underline decoration-solid text-blue-200'>
          functionality like: 
        </div>
        <div div className='text-xl mt-9 text-yellow-50'>
          1. user register can logout and see dashboard.
        </div>
        <div div className='text-xl mt-5 text-yellow-50'>
          2. signup form using tailwind and react.js collected data in json format
        </div>
      </div>
    </div>
  );
};

export default Home;
