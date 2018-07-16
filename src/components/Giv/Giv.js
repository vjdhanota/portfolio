import React, { Component } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AddCard from '../../images/giv/add_card.png';
import Login from '../../images/giv/login.png';
import Profile from '../../images/giv/profile_theme.png';
import RecSearch from '../../images/giv/rec_search.png';
import Register from '../../images/giv/registration.png';
import SideMenu from '../../images/giv/side_menu.png';

const Giv = props => {
  return (
    <div>
      <Carousel dynamicHeight={true} infiniteLoop={true}>
        <div>
          <img src={Login}/>
          <p className="legend">Login Page</p>
        </div>
        <div>
          <img src={Register}/>
          <p className="legend">User Registration</p>
        </div>
        <div>
          <img src={RecSearch}/>
          <p className="legend">Recommendations / Search Page</p>
        </div>
        <div>
          <img src={AddCard}/>
          <p className="legend">Adding new payment method</p>
        </div>
        <div>
          <img src={SideMenu}/>
          <p className="legend">Side menu</p>
        </div>
        <div>
          <img src={Profile}/>
          <p className="legend">User profile + additional theme</p>
        </div>
      </Carousel>

    </div>

  );
} 

export default Giv;