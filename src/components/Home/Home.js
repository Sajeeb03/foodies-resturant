import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import "./Home.css";

const Home = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    return (
        <div className='home-container'>
            <div>
                <div className='search-field'>
                    <input type="text" name="" id="input-field" />
                    <button className='btn-search'>Search</button>
                </div>
                <div className="foods-container">
                    {
                        foods.map(food => <Food food={food} key={food.idMeal}></Food>)
                    }
                </div>
            </div>
            <div className="cart-container">
                cart
            </div>
        </div>
    );
};

export default Home;