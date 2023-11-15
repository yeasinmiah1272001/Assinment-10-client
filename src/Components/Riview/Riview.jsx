import React from 'react';

const Riview = () => {
       return (
         <div className="grid lg:grid-cols-3 gap-14 mt-4">
           <div className="card w-96 bg-base-100 shadow-xl image-full">
             <figure>
               <img src="https://i.ibb.co/pXMZ2GQ/e.jpg" alt="Shoes" />
             </figure>
             <div className="card-body">
               <p className="justify-center items-center lg:my-9">
                 Great experience buying my new car! The dealership staff was
                 friendly and knowledgeable, and the process was quick and
                 hassle-free.
               </p>
             </div>
           </div>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
             <figure>
               <img src="https://i.ibb.co/j3k2nyj/e3.jpg" alt="Shoes" />
             </figure>
             <div className="card-body">
               <p className="justify-center items-center lg:my-9">
                 I love my new car! It's exactly what I was looking for, and the
                 price was competitive. Highly recommend this seller!
               </p>
             </div>
           </div>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
             <figure>
               <img src="https://i.ibb.co/hZzM0K4/e2.jpg" alt="Shoes" />
             </figure>
             <div className="card-body">
               <p className="justify-center items-center lg:my-9">
                 Smooth transaction and excellent service. The car was in
                 fantastic condition, and the seller made the whole buying
                 process a breeze.
               </p>
             </div>
           </div>
         </div>
       );
};

export default Riview;