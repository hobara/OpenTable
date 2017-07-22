import React from 'react';
import { Route, Link } from 'react-router-dom';


class CityLists extends React.Component {

  render() {
    return(
      <div className='city-lists'>
        <section className='city-lists-title'>
          Featured Cities
        </section>
        <section id='featured-cities'>
          <div className='row-1'>
            <Link to={'/api/city/6'}  className='city-lists-1-1'>New York</Link>
            <Link to={'/api/city/2'} className='city-lists-1-2'>Los Angeles</Link>
            <Link to={'/api/city/4'} className='city-lists-1-3'>Chicago</Link>
          </div>
          <div className='row-2'>
            <Link to='/api/city/1' className='city-lists-2-1'>San Francisco</Link>
            <Link to='/api/city/7' className='city-lists-2-2'>Washington DC</Link>
            <Link to='/api/city/5' className='city-lists-2-3'>Austin</Link>
          </div>
        </section>
        <section className='featured-cities-lists'>
          <section className='city-row1'>
            <Link to='/api/city/1' className='city'>San Francisco</Link>
            <Link to='/api/city/2' className='city'>Los Angeles</Link>
            <Link to='/api/city/3' className='city'>Seattle</Link>
            <Link to='/api/city/4' className='city'>Chicago</Link>
          </section>
          <section className='city-row2'>
            <Link to='/api/city/5' className='city'>Austin</Link>
            <Link to='/api/city/6' className='city'>New York</Link>
            <Link to='/api/city/7' className='city'>Washington DC</Link>
            <Link to='/api/city/8' className='city'>Toronto</Link>
          </section>
        </section>

        <section className='city-lists-title'>
          International Cities
        </section>
        <section className='international-cities'>
          <div className='row-3'>
            <Link to='/api/city/10' className='city-lists-3-1'>Singapore</Link>
            <Link to='/api/city/11' className='city-lists-3-2'>Tokyo</Link>
            <Link to='/api/city/9' className='city-lists-3-3'>Paris</Link>
          </div>
        </section>
        <section className='city-row3'>
          <Link to='/api/city/10' className='city'>Singapore, SG</Link>
          <Link to='/api/city/11' className='city'>Tokyo, JP</Link>
          <Link to='/api/city/12' className='city'>Osaka, JP</Link>
          <Link to='/api/city/9' className='city'>Paris, FR</Link>
        </section>
      </div>
    );
  }
}


export default CityLists;
