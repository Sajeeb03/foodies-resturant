import React from 'react';
import "./Food.css";
const Food = ({ food }) => {
    // console.log(food);
    const { strMealThumb, strMeal, idMeal, strArea } = food;
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <div className='card-text'>
                <h3>{strMeal}</h3>
                <p>{strArea}</p>
                <h4>Price: $100</h4>
                <button className='btn-order'>Order Now</button>
            </div>
        </div>
    );
};

export default Food;