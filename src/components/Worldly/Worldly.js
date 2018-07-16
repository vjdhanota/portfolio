import React, { Component } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ArticlePage from '../../images/worldly/article-page.png';
import Dashboard from '../../images/worldly/dashboard.png';
import Feed from '../../images/worldly/feed_page.png';
import Login from '../../images/worldly/login_page.png';
import QuizCreate from '../../images/worldly/quiz_creation.png';
import QuizResult from '../../images/worldly/quiz_results.png';
import QuizProgress from '../../images/worldly/student_taking_quiz.png';

const Worldly = props => {
  return (
    <div>
      <Carousel dynamicHeight={true} infiniteLoop={true}>
        <div>
          <img src={Login}/>
          <p className="legend">Login Page</p>
        </div>
        <div>
          <img src={Dashboard}/>
          <p className="legend">Teacher Dashboard</p>
        </div>
        <div>
          <img src={Feed}/>
          <p className="legend">Real-Time News Feed</p>
        </div>
        <div>
          <img src={ArticlePage}/>
          <p className="legend">Individual Article Page</p>
        </div>
        <div>
          <img src={QuizCreate }/>
          <p className="legend">Creation of a MC quiz</p>
        </div>
        <div>
          <img src={QuizProgress}/>
          <p className="legend">Student side progress of a quiz</p>
        </div>
        <div>
          <img src={QuizResult}/>
          <p className="legend">Student view of quiz result</p>
        </div>


      </Carousel>

    </div>

  );
} 

export default Worldly;