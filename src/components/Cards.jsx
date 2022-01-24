import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../config.json';
import Card from './Card';
import Modal from './Modal';

class Cards extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    const { data } = await http.get(config.apiEndpoint);
    this.setState({ beers: data });
  }
  render() {
    return (
      <div className='container'>
        <div className='row align-items-cente'>
          {this.state.beers.map((beer) => (
            <Card
              key={beer.id}
              img={beer.image_url}
              title={beer.name}
              description={beer.tagline}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
