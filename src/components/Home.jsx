import React from 'react';
import { useEffect } from 'react';
import Img from './Background.JPEG';
import sendNotification  from "./sendNotification";

import { EmbedSDK } from "@pushprotocol/uiembed";




const Home = () => { 

  return (
    <div
      className="h-screen grid grid-rows-3 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="row-span-1" />
      <div className="row-span-1">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold font-poppins text-left text-white mb-4">
              Machine Learning Marketplace Platform
            </h1>
            <p className="text-xl text-left text-gray-400 mb-8">
            Revolutionizing the Data Economy: Seamlessly Connect, Share, and Monetize Your ML Models and on the Blockchain
            </p>
            {/*Button*/}
        <button type="button" class="btn">
                    <strong>Launch</strong>
                    <div id="container-stars">

                    <div id="stars"></div>
                </div>

            <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
            </div>
        </button>
   
      
	
          </div>
        </div>
      </div>
      <div className="row-span-1" />
    </div>
  );
};

export default Home;
