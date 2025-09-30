import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
           Savor the highlights of our kitchen, where every dish tells a story of tradition, freshness, and creativity—crafted to delight your taste buds and keep you coming back for more.
          </p>
        </div>

        <div className="dishes_container">
          {data[0]?.dishes?.map(element => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}   
        </div>
      </div>
    </section>
  );
};

export default Menu;
