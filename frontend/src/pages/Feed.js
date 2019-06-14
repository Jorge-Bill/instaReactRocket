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
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>
            <p>
              Post muito foda
              <span>#react #top</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Jorge Mendes</span>
              <span className="place">São Paulo</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="http://localhost:3333/files/wall.jpg" alt="" />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>
            <p>
              Post muito foda
              <span>#react #top</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
