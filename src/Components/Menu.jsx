import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Category from './Category'
import './Menu.css'

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => { 
      const requestLink = `https://coolmeal.onrender.com/api/dish-category`
      async function fetchData() {
      const {data} = await axios.get(requestLink);
      setData(data);
  }
      fetchData().catch(e => console.log(e))
  }, [])


  return (
    <div className='menu'>
      {data.map((item) => (
              <Category 
                key={item.id}
                name={item.name}
                img={item.img}
              />
        ))}
    </div>
  )
}

export default Menu