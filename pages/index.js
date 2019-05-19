import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <Hero />
        <Header pathname="/blog" />
        <Posts />
      </section>
    );
  }
}

export default Home;
