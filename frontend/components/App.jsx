import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting_form/greeting_form_container';
import SignUpModalContainer from './signup_form/signup_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>


    <div className='main-background'>

    </div>

    <div>
      <section className='city-lists-header'>
        Featured Cities 
      </section>
      <section id='city-lists'>
        <div className='row-1'>
          <span className='city-lists-1-1'>New York</span>
          <span className='city-lists-1-2'>Los Angeles</span>
          <span className='city-lists-1-3'>Chicago</span>
        </div>
        <div className='row-2'>
          <span className='city-lists-2-1'>San Francisco</span>
          <span className='city-lists-2-2'>Washington DC</span>
          <span className='city-lists-2-3'>Austin</span>
        </div>
        <div className='row-3'>
          <span className='city-lists-3-1'>Singapore</span>
          <span className='city-lists-3-2'>Tokyo</span>
          <span className='city-lists-3-3'>Paris</span>
        </div>
      </section>
    </div>
  </div>
);

export default App;
