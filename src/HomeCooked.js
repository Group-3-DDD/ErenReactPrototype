import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './HomeCooked.css';
import logo from './logo transparent.png';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';
import img13 from './img13.jpg';
import img14 from './img14.jpg';
import img15 from './img15.jpg';
import img16 from './img16.jpg';
import img17 from './img17.jpg';

function HomeCooked() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const foodTypes = ['pizza', 'burger', 'sushi', 'tacos', 'curry', 'spaghetti', 'beef', 'noodles', 'chicken', 'potatoes', 'halloumi', 'bacon', 'salad', 'fajitas', 'paprika', 'cumin', 'onion', 'garlic', 'peppers', 'cheese', 'tomatoes', 'bread', 'oregano', 'stock', 'rocket'];


  const [takeaways, setTakeaways] = useState([
    {
      id: 1,
      name: 'Home Made Pizza',
      description: 'Flour,Milk,Tomato',
      deliveryFee: '10-15 mins',
      image: img8,
      keywords: ['pizza', 'milk', 'flour'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 2,
      name: 'Spaghetti Bolognese',
      description: 'Beef mince, Onion, Garlic, Mushroom, Tomatoes, Oil, Spaghetti, Cheese, Rocket',
      deliveryFee: '10-15 mins',
      image: img9,
      keywords: ['pasta', 'spaghetti', 'meat'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 3,
      name: 'Pot Noodle',
      description: 'Noodles, Chilis, Chicken or vegetable stock, Tomatoes',
      deliveryFee: '5 mins',
      image: img10,
      keywords: ['noodles', 'vegetarian', 'spicy'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 4,
      name: 'Pasta Sauce',
      description: 'Olive oil, Chopped tomatoes, Garlic gloves, Vegetable stock, Cooked pasta, Cheese',
      deliveryFee: '15 mins',
      image: img11,
      keywords: ['pasta', 'sauce', 'vegetarian'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 5,
      name: 'Fajitas',
      description: 'Tortilla bread, Sunflower oil, Chicken breast, Mixed peppers, Onion, Garlic cloves, Chili powder, Paprika, Cumin',
      deliveryFee: '20 mins',
      image: img12,
      keywords: ['mexican', 'spicy', 'chicken'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 6,
      name: 'Hamburgers, Chips and Salad',
      description: 'Cheese, Tomatoes, Sunflower oil, Burger buns, Beef burgers',
      deliveryFee: '20 mins',
      image: img13,
      keywords: ['burger', 'beef', 'fast food'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 7,
      name: 'Baked Potatoes',
      description: 'Large Baking Potatoes, Olive oil, Spring Onion, Unsalted butter, Salt',
      deliveryFee: '15 mins',
      image: img14,
      keywords: ['potatoes', 'vegetarian', 'healthy'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 8,
      name: 'Halloumi flatbread',
      description: 'Pumpkin seed, Cumin seed, Red cabbage, Mixed peppers, White wine vinegar, Extra virgin olive oil, Hummus, Halloumi',
      deliveryFee: '15 mins',
      image: img15,
      keywords: ['vegetarian', 'flatbread', 'halloumi'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },
    {
      id: 9,
      name: 'Tomato Soup',
      description: 'Ciabatta bread mix, Garlic butter, Dried oregano, Grated cheddar or mozzarella, Carrot, Onion, Plum tomatoes, Vegetable stock, Fraiche',
      deliveryFee: '10 mins',
      image: img16,
      keywords: ['soup', 'vegetarian', 'healthy'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    },{
      id: 10,
      name: 'Smoky BBQ',
      description: 'Beef, BBQ sauce, Onion, Peppers',
      deliveryFee: '10-15 mins',
      image: img17,
      keywords: ['beef', 'bbq', 'onion', 'peppers'],
      link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
    }

  ]);

  useEffect(() => {
    if (searchText !== '') {
      const regex = new RegExp(`^${searchText}`, 'i');
      setSuggestions(foodTypes.filter(foodType => regex.test(foodType)));
      setTakeaways(takeaways.filter(takeaway => {
        const keywords = takeaway.keywords || []; 
        return regex.test(takeaway.name) || keywords.some(keyword => regex.test(keyword));
      }));
    } else {
      setSuggestions([]);
      setTakeaways(takeaways); 
    }
  }, [searchText]);

  useEffect(() => {
    if (searchText !== '') {
      const regex = new RegExp(`^${searchText}`, 'i');
      setSuggestions(foodTypes.filter(foodType => regex.test(foodType)));
    } else {
      setSuggestions([]);
    }
  }, [searchText]);

  const handleSearchChange = e => {
    const keyword = e.target.value.toLowerCase();
    setSearchText(keyword);
    if (keyword !== '') {
      setTakeaways(
        takeaways.filter(takeaway =>
          takeaway.keywords.some(
            kw => kw.toLowerCase().indexOf(keyword) !== -1
          )
        )
      );
    } else {
      setTakeaways([
        {
          id: 1,
          name: 'Home Made Pizza',
          description: 'Flour,Milk,Tomato',
          deliveryFee: '10-15 mins',
          image: img8,
          keywords: ['pizza', 'milk', 'flour'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 2,
          name: 'Spaghetti Bolognese',
          description: 'Beef mince, Onion, Garlic, Mushroom, Tomatoes, Oil, Spaghetti, Cheese, Rocket',
          deliveryFee: '10-15 mins',
          image: img9,
          keywords: ['pasta', 'spaghetti', 'meat'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 3,
          name: 'Pot Noodle',
          description: 'Noodles, Chilis, Chicken or vegetable stock, Tomatoes',
          deliveryFee: '5 mins',
          image: img10,
          keywords: ['noodles', 'vegetarian', 'spicy'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 4,
          name: 'Pasta Sauce',
          description: 'Olive oil, Chopped tomatoes, Garlic gloves, Vegetable stock, Cooked pasta, Cheese',
          deliveryFee: '15 mins',
          image: img11,
          keywords: ['pasta', 'sauce', 'vegetarian'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 5,
          name: 'Fajitas',
          description: 'Tortilla bread, Sunflower oil, Chicken breast, Mixed peppers, Onion, Garlic cloves, Chili powder, Paprika, Cumin',
          deliveryFee: '20 mins',
          image: img12,
          keywords: ['mexican', 'spicy', 'chicken'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 6,
          name: 'Hamburgers, Chips and Salad',
          description: 'Cheese, Tomatoes, Sunflower oil, Burger buns, Beef burgers',
          deliveryFee: '20 mins',
          image: img13,
          keywords: ['burger', 'beef', 'fast food'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 7,
          name: 'Baked Potatoes',
          description: 'Large Baking Potatoes, Olive oil, Spring Onion, Unsalted butter, Salt',
          deliveryFee: '15 mins',
          image: img14,
          keywords: ['potatoes', 'vegetarian', 'healthy'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 8,
          name: 'Halloumi flatbread',
          description: 'Pumpkin seed, Cumin seed, Red cabbage, Mixed peppers, White wine vinegar, Extra virgin olive oil, Hummus, Halloumi',
          deliveryFee: '15 mins',
          image: img15,
          keywords: ['vegetarian', 'flatbread', 'halloumi'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },
        {
          id: 9,
          name: 'Tomato Soup',
          description: 'Ciabatta bread mix, Garlic butter, Dried oregano, Grated cheddar or mozzarella, Carrot, Onion, Plum tomatoes, Vegetable stock, Fraiche',
          deliveryFee: '10 mins',
          image: img16,
          keywords: ['soup', 'vegetarian', 'healthy'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        },{
          id: 10,
          name: 'Smoky BBQ',
          description: 'Beef, BBQ sauce, Onion, Peppers',
          deliveryFee: '10-15 mins',
          image: img17,
          keywords: ['beef', 'bbq', 'onion', 'peppers'],
          link: 'https://universitycompare.com/advice/student-health/10-easy-student-recipes',
        }
      ]);
    }
  };
  
  const handleSuggestionClick = suggestion => {
    setSearchText(suggestion);
    setSuggestions([]);
  };

  return (
    
    <div className="takeaway-container">
      <Link to="/mainpage" className="return-button">Return</Link>
      
      <h1>Home Cooked Meals Page</h1>
      <div className="search-container">
      <Link to="/mainpage" className="return-button">Return</Link>
        <Input
          type="text"
          placeholder="type your ingridients..."
          value={searchText}
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map(suggestion => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="takeaway-list">
        {takeaways.map(takeaway => (
          <div key={takeaway.id} className="takeaway-card" onClick={() => window.open(takeaway.link, "_blank")}>
            <img src={takeaway.image} alt={takeaway.name} />
            <div className="takeaway-info">
              <h2>{takeaway.name}</h2>
              <p>{takeaway.description}</p>
              <p>Cook Time: {takeaway.deliveryFee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCooked;
