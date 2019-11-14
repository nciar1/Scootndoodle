import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Video } from '../../components/Video/Video'
import { About } from '../../components/About/About'
import Media from '../../components/Media/Media';
import  {ShopPreview}  from '../../components/ShopPreview/ShopPreview'
import ReviewSlider from '../../components/Reviews/ReviewSlider';
import sliderData from '../../assets/reviews'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import Row from 'react-bootstrap/Row';
import { MissionStatement } from '../../components/Mission/MissionStatement';
//import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;
