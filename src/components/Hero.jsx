import React from "react";
import { redirect } from "react-router";
import petsHero from '../assets/pets-hero.png';
import { useParams } from "react-router";

function Hero({image, displayText}) {
    const {type} = useParams();

    return (
        <div className="hero-container" 
        style={{backgroundImage: `linear-gradient(black, black), url(${image || petsHero})`,
        backgroundBlendMode: 'saturation',
        backgroundSize: 'cover',
        backgroundColor: '#0000008f'}}>
            <h2>{displayText || getHeroTitle(type)}</h2>
        </div>
    )
}

export default Hero;

const getHeroTitle = type => {
    switch (type){
        case 'dog':
            return 'Dogs';
        case 'cat':
            return 'Cats';
        case 'rabbit':
            return 'Rabbits';
        case 'bird':
            return 'Birds';
        default:
            return 'Find your perfect pet';
    }
}