import React, { useEffect, useState } from 'react';
import { getTheCart, setTheCart } from '../../utilities/fakeDb';
import Food from '../Food/Food';
import "./Home.css";

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);
    const handleOrder = (food) => {
        const { strMeal, idMeal } = food;
        const info = {
            idMeal,
            strMeal,
            price: 100,
            quantity: 1
        }

        const savedCart = getTheCart();
        if (savedCart) {
            const isExist = savedCart.find(p => p.idMeal === idMeal);
            if (isExist) {
                isExist.quantity = isExist.quantity + 1;
                setTheCart(savedCart);
                setCart(getTheCart())
            }
            else {
                setTheCart([...savedCart, info]);
                setCart(getTheCart());
            }
        }
        else {
            setTheCart([info])
            setCart(getTheCart())
        }
    }
    console.log(cart)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [search])
    // useEffect(() => {
    //     const savedCart = getTheCart();
    //     const newCart = [];
    //     for (const id of savedCart) {
    //         const savedItems = foods.find(p => p.idMeal === id.idMeal);
    //         newCart.push(savedItems);
    //     }
    //     setCart(newCart);
    // }, [foods])
    console.log(cart);
    return (
        <div className='home-container'>
            <div>
                <div className='search-field'>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id="input-field" />
                    <button className='btn-search'>Search</button>
                </div>
                <div className="foods-container">
                    {
                        foods?.length && foods.map(food => <Food
                            food={food}
                            key={food.idMeal}
                            btn={handleOrder}
                        ></Food>)
                    }
                </div>
            </div>
            <div className="cart-container">
                {
                    cart.map(items => <h1>{items.quantity} {items.strMeal}</h1>)
                }
            </div>
        </div>
    );
};

export default Home;