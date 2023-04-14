import React from 'react'
import Img from './Background.JPEG';
import { useContext } from 'react';
import { DataItemsContext } from './DataItemsContext';

const Marketplace = () => {
  
  const dataItems = [
    {
      id: 1,
      title: 'Dataset 1',
      description: 'This is a sample machine learning dataset.',
      image: 'https://via.placeholder.com/150',
      price: '0.1 ETH',
    },
    // Add more items as needed
    {
      id:2,
      title:'Smokers dataset',
      description:'dnjhbwq',
      image:'https://via.placeholder.com/150',
      price: '0.13 ETH',

    },
    {
      id:3,
      title:'ETH-USD dataset',
      description:'a dataset of opening and closing of ETH from 2020 in 2 column format opening-closing',
      image:'https://via.placeholder.com/150',
      price:'0.2 ETH',
    },
    {
      id:4,
      title:'quotes dataset',
      description:'a natural dataset for quotes extracted from various books for training a ML model',
      image:'https://via.placeholder.com/150',
      price:'0.002 ETH'
    }
  ];

  return (

          <div className="min-h-screen bg-[#191B20] py-12">
      <h1 className="text-4xl font-bold font-poppins text-center text-[#25EAC2] mb-10" style={{marginTop:'40px'}}>
        Machine Learning Data Marketplace
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dataItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md p-6 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold font-poppins text-blue-600 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <div className="mt-auto">
              <button className="bg-blue-600 text-white font-semibold font-poppins px-6 py-2 rounded shadow-md hover:bg-blue-500 active:bg-blue-700 focus:outline-none">
                Buy for {item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Marketplace
