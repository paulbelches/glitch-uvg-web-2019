/* eslint-disable  class-methods-use-this */
import { Component } from 'react';
import './index.css';

class Logo extends Component {
  render() {
    return (
      <div clasName="Container" >
        <img src='https://duckduckgo.com/assets/logo_homepage.normal.v108.svg' href={window.scrollTo(0, 250)} className="mainLogo"></img>
      <span className="tag">"conocer más"</span></div>
    );
  }
}

export default Logo;
