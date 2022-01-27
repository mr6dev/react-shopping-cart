import React, { Component } from 'react';
import lscache from 'lscache';
import http from '../services/httpService';
import config from '../config.json';
import Card from './Card';
import Modal from './Modal';
import ListGroup from './ListGroup';
import WishLists from './WishLists';

class Cards extends Component {
  state = {
    beers: [],
    oneBeer: {},
    items: ['All', 'Steak', 'Pizza'],
    wishlists: [],
  };

  async componentDidMount() {
    const { data } = await http.get(config.apiEndpoint);

    this.setState({ beers: data });
  }

  handleModalClcik = (item) => {
    this.setState({ oneBeer: item });
  };

  handleSelectFilter = async (item) => {
    if (item === 'All') {
      const { data } = await http.get(config.apiEndpoint);
      this.setState({ beers: data });
    } else {
      const { data } = await http.get(config.apiEndpoint, {
        params: { food: item },
      });
      this.setState({ beers: data });
    }
  };

  handleLike = (item) => {
    let beers = [...this.state.beers];
    const index = beers.indexOf(item);
    beers[index] = item;
    item.twist = !item.twist;
    this.setState({ beers });

    if (item.twist === true) {
      const likeWishList = [...this.state.wishlists];
      const newLikeWishList = likeWishList.concat(item);
      this.setState({ wishlists: newLikeWishList });

      // window.localStorage.setItem(
      //   'FavoritLists',
      //   JSON.stringify(newLikeWishList)
      // );
      lscache.set('FavoritLists', newLikeWishList, 43200);
    } else if (item.twist === false) {
      const disLikeWishList = [...this.state.wishlists];
      const disLikeObject = disLikeWishList.filter((i) => i.id === item.id);
      const disLiked = disLikeObject[0];
      const newW = disLikeWishList.filter((i) => {
        return i.id !== disLiked.id;
      });
      this.setState({ wishlists: newW });
    }
  };

  render() {
    const { items, beers, wishlists, oneBeer } = this.state;

    return (
      <div className='container'>
        <ListGroup items={items} onItemSelect={this.handleSelectFilter} />
        <div className='row align-items-cente'>
          {beers.map((beer) => (
            <Card
              key={beer.id}
              img={beer.image_url}
              title={beer.name}
              description={beer.tagline}
              liked={beer.twist}
              click={() => this.handleModalClcik(beer)}
              onLike={() => this.handleLike(beer)}
            />
          ))}
        </div>

        {oneBeer.id && (
          <Modal
            key={oneBeer.id}
            img={oneBeer.image_url}
            name={oneBeer.name}
            tagline={oneBeer.tagline}
            abv={oneBeer.abv}
            description={oneBeer.description}
            price={oneBeer.srm}
          />
        )}

        <WishLists items={wishlists} />
      </div>
    );
  }
}

export default Cards;
