import React, { Component } from 'react';
import Categories from '../components/Categories';
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <Hero />
        <div className="flex nl3 nr3 mw9 center pt4">
          <div className="w-75-l w-100 ph3">
            <Posts />
          </div>
          <div className="w-25 dn db-l ph3">
            <Categories />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
