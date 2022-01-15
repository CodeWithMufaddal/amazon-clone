import React from 'react';
import "./Home.css"
import Product from './Product';
import FlipMove from 'react-flip-move';
function Home() {


   return (
      <div className="home">
         <div className="home__container">
            <img className="home__image" src="https://m.media-amazon.com/images/I/71x4THIwHML._SX3000_.jpg" alt="front image" />

            <div className="home__row">

               <Product
                  id="1"
                  title="Redgear Blaze Semi-Mechanical wired Gaming keyboard with 3 colour backlit, key lock for PC"
                  price={999.00}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61M2CPqMgwL._SL1000_.jpg"
                  />
               <Product
                  id="2"
                  title="Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)"
                  price={3,219.00}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/81aALsqzUlL._SL1500_.jpg"
                  />
            </div>
            <div className="home__row">
               <Product
                  id="3"
                  title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
                  price={117900.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
                  />
               <Product
                  id="4"
                  title="Echo Dot (4th Gen, 2020 release) with clock |Alexa (Blue)"
                  price={5,499.00}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg"
                  />
               <Product
                  id="5"
                  title="Tygot Gorilla Tripod/Mini (13 Inch) Tripod"
                  price={349}
                  rating={3}
                  image="https://m.media-amazon.com/images/I/6158OXXY3JS._SL1500_.jpg"
                  />
            </div>
            <div className="home__row">
            <Product
               id="6"
               title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
               price={81,640}
               rating={5}
               image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
               />
            </div>
         </div>
      </div>
   )
}

export default Home
