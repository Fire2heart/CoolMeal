import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import ProductCart from './ProductCart';

function Search() {

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const input = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
        const res = await axios.get(`https://coolmeal.onrender.com/api/search/${query}`);
        setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    const clearInput = () => {
        setQuery('');
        setWordEntered('');
    }

    const Focus = () => {
        input.current.focus();
    }

  return (
    <div className='search'>
        <div className='search-bar'>
            <input
            ref={input}
            placeholder='Search...'
            type='text'
            onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
                setWordEntered(e.target.value);
            }
            }
            value={wordEntered}
            />
            { query === '' ? <AiOutlineSearch className='search-icon' onClick={ Focus }/> : <GrClose className='search-icon' onClick={clearInput}/> }
        </div>
      <ul className="list">
        {data.filter((item) =>
          item.name.toLowerCase().includes(query)
        ).map((item) => (
          // <li className="listItem" key={user.id}>
          //   {user.first_name}
          // </li>
          <ProductCart
            key={item.id}
            name={item.name}
            description={item.description}
            weight={item.weight}
            price={item.price}
            img={item.img}
          />
        ))}
      </ul>
    </div>
  )
}

export default Search