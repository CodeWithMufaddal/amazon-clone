import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Product({ id, title, image, price, rating }) {
   const [state, dispatch] = useStateValue();
   const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          price: price,
          rating: rating,
          image: image,
        },
      });
    };
   return (
      <div className="product">
         <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
               <small>&#8377;</small>
               <strong>{price}</strong>
            </p>


            <div className="product__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>⭐</p>
                  ))}
            </div>
         </div>

         <img className="product__image" src={image} alt="" />


         <button onClick={addToBasket}>Add to Basket</button>
      </div>
   )
}

export default Product
