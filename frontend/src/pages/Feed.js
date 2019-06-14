import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <section className="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Jorge Mendes</span>
              <span className="place">São Paulo</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="http://localhost:3333/files/wall.jpg" alt="" />
        </article>
      </section>
    );
  }
}

export default Feed;
