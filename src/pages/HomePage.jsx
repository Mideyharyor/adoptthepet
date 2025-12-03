import React, { useEffect, useState } from "react";
import { getPets } from "../api/petfinder";
import Hero from "../components/Hero";
import missingImage from '../assets/missing-animal.png'
import { Link, useParams,  } from "react-router";
import PetDetailsNotFound from "./PetDetailsNotFound";
import Error404 from "./Error404";

export const capitalized = str => {
    if (!str) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function HomePage() {
    const [data, setData] = useState(null);
    const {type} = useParams();
    const displayType = type || '';

    useEffect(() => {
        const getPetsData = async () => {
            const petsData = await getPets(capitalized(displayType));
            setData(petsData)
        }

        getPetsData();
    }, [type]);

    if (!data){
        return<h2>Loading....</h2>
    }

    return(
        <div className="page">
            <Hero />
            

            {data.length ? (<>
                <h3>
                    <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
                    available for adoption near you
                </h3>
                <div className="grid">
                    {data.map((animal) =>{
                        return <Link  className="pet" key={animal.id} to={`/${animal.type.toLowerCase()}/${animal.id}`}>
                            <article>
                                <div className="pet-image-container">{<img className="pet-image" src={animal.photos[0]?.medium || missingImage} alt=""/>}</div>
                                <h3>{animal.name}</h3>
                                <p>Breed: {animal.breeds.primary}</p>
                                <p>Color: {animal.colors.primary}</p>
                                <p>Gender: {animal.gender}</p>
                            </article>
                        </Link>
                    })}
                </div>
                </>
            ) : (<h3>Oops!! Not found</h3>)}
        </div>
    )
}

export default HomePage;