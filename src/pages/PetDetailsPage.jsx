import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Hero from "../components/Hero";

function PetDetailsPage() {
    const pet = useLoaderData();

    return(
        <div>
            <main>
                <Hero image={pet.photos[1]?.full || 'https://i.imgur.com/aEcJUFK.png'}
                displayText={`Meet ${pet.name}`}/>
                <div className="pet-detail">
                    <div className="pet-image-container">
                        <img className="pet-image"
                        src={pet.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'}
                        alt=""/>
                    </div>
                    <div>
                        <h1>{pet.name}</h1>
                        <h3>Breed: {pet.breeds.primary}</h3>
                        <p>Color: {pet.colors.primary || 'Unknown'}</p>
                        <p>Gender: {pet.gender}</p>
                        <h3>Description</h3>
                        <p>{pet.description}</p>
                    </div>
                </div>   
            </main>
        </div>
    )
}

export default PetDetailsPage;

export const petLoader = async ({params}) => {
    const { id } = params;
    const response = await fetch("http://localhost:8000/animals/" + id)
    if(!response.ok){
        throw Error('No pet found.')
    }
    const jsonResponse = await response.json();
    return jsonResponse;
}