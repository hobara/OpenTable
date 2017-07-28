import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';
import ReservationRequestContainer from '../reservation/reservation_request_container';
import ReviewListsContainer from '../review/review_lists_container';

const CUISINE_TYPE = {
  1: 'American',
  2: 'Italian',
  3: 'French',
  4: 'Mexican',
  5: 'Japanese',
  6: 'Chinese',
  7: 'Thai',
  8: 'Steakhouse',
  9: 'Seafood',
  10: 'Fusion'
};

const PRICE_TYPE = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$'
};

const PRICE_RANGE = {
  1: '$20 and under',
  2: '$30 and under',
  3: '$31 to $50',
  4: '$50 and over'
};

const HOURS_TYPE = {
  1: '17:00 - 21:00',
  2: '17:00 - 22:00',
  3: '18:00 - 22:00',
  4: '18:00 - 23:00'
};

const RATE_TYPE = {
  0: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  1: '',
  2: '',
  3: '',
  4: ''
};



class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    this.props.requestAllRestaurant();
    this.props.requestSingleRestaurant(this.props.match.params.restaurant_id);
  }

  scrollTo(el) {
    return () => {
      el.scrollIntoView();
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className='restaurant-showpage-background'>
        <div className='restaurant-showpage-header'>
            <span className='showpage-header-left'>
              <img src={this.props.restaurant.image1} className='showpage-header-image'/>
            </span>
            <section className='showpage-header-right'>
              <section className='showpage-restaurant-name'>{this.props.restaurant.name}</section>
              <section className='showpage-restaurant-rate'><img src={RATE_TYPE[this.props.restaurant.rate]}/></section>
              <section className='showpage-restaurant-details'>
                <span className='showpage-restaurant-details-left'>
                  {CUISINE_TYPE[this.props.restaurant.cuisine]} | {this.props.restaurant.city_name}  |
                    Price: {PRICE_TYPE[this.props.restaurant.price]}
                </span>
                <span className='showpage-restaurant-details-right'>
                  Favorites
                </span>
              </section>
            </section>
        </div>
        <div className='restaurant-showpage-main-container'>
          <div className='restaurant-showpage-nav-link'>
            <nav className='nav-link-wrapper'>
              <a className='page-nav-link' onClick={this.scrollTo(this.reservationSection)}>Reservation</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.aboutSection)}>About</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.photosSection)}>Photos</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.reviewsSection)}>Reviews</a>
            </nav>
          </div>
          <div className='restaurant-showpage-main'>
            <div className='restaurant-showpage-main-content'>
              <div ref={ el => this.reservationSection = el } className='restaurant-showpage-reservation' name='reservation'>
                <ReservationRequestContainer />
              </div>
              <div ref={ el => this.aboutSection = el } className='restaurant-showpage-content-about' id='about'>
                <section className='restaurant-showpage-content-header'>
                  <h2>About {this.props.restaurant.name}</h2>
                </section>
                <section className='restaurant-showpage-content-about-text'>
                  {this.props.restaurant.about}
                </section>
                <section className='restaurant-showpage-content-about-map'>
                  <span>**Google Map Container**</span>
                </section>
              </div>
              <div ref={ el => this.photosSection = el } className='restaurant-showpage-photos' name='photos'>
                <span className='restaurant-showpage-content-photo-header'>
                  <h2>Photos</h2>
                </span>
                <img src={this.props.restaurant.image1} className='restaurant-showpage-photo'/>
                <img src={this.props.restaurant.image2} className='restaurant-showpage-photo'/>
                <img src={this.props.restaurant.image3} className='restaurant-showpage-photo'/>
              </div>
              <div ref={ el => this.reviewsSection = el } className='restaurant-showpage-reviews' name='reviews'>
                <ReviewListsContainer />
              </div>
            </div>
            <nav className='restaurant-showpage-detail-right'>
              <section className='detail-right-type'>Cuisine Type: </section>
              <section className='detail-right-data'>{CUISINE_TYPE[this.props.restaurant.cuisine]}</section>
              <section className='detail-right-hours'>Open Hours: </section>
              <section className='detail-right-data'>{HOURS_TYPE[this.props.restaurant.hours]}</section>
              <section className='detail-right-phone'>Phone Number: </section>
              <section className='detail-right-data'>(123) - 456 - 7890</section>
              <section className='detail-right-price'>Price Ranages: </section>
              <section className='detail-right-data'>{PRICE_RANGE[this.props.restaurant.price]}</section>
              <section className='detail-right-web'>Web Site: </section>
              <section className='detail-right-web-data'>{'https://table-for-u.herokuapp.com'}</section>
            </nav>
          </div>
        </div>
        <Link to={`/`} className='go-back-to-home'>Go Back To Home</Link>
      </div>
    );
  }
}

export default RestaurantDetail;
