import React from 'react';
import { getTheCart, setTheCart } from '../../utilities/fakeDb';
import "./Food.css";
const Food = ({ food, btn }) => {
    const { strMealThumb, strMeal, strArea } = food;
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <div className='card-text'>
                <h3>{strMeal}</h3>
                <p>{strArea}</p>
                <h4>Price: $100</h4>
                <button onClick={() => btn(food)} className='btn-order'>Order Now</button>
            </div>
        </div>
    );
};

export default Food;