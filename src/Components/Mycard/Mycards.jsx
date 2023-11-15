import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycard from '../../Mycard/Mycard';

const Mycards = () => {
       const cards = useLoaderData()
       return (
              <div className='mt-10 grid lg:grid-cols-1 gap-12 md:grid-cols-2 '>
                     {
                            cards.map(card => <Mycard key={card._id} card={card}></Mycard>)
                     }
                     
              </div>
       );
};

export default Mycards;