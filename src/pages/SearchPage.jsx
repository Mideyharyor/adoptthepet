import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Pet from "../components/Pet";
import { getPets } from "../api/petfinder";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";

function SearchPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const petNameToFind = searchParams.get('name');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchSearch = async () => {
            const result = await getPets("", petNameToFind);
            setSearchResult(result);
        }



        if (petNameToFind) fetchSearch();
    }, [petNameToFind]);


    return(
        <div className="page">
            <Hero displayText={`Results for ${petNameToFind}`}/>

            {searchResult.length ? <h3>Pets available for adoption near you</h3> : 
            <>
            <h3>{`No results found for ${petNameToFind}`}</h3>
            <button onClick={() => navigate(-1)}style={{padding: 10, fontSize: 20}}>Go Back</button>
            </>}

            <main>
                <div className="grid">
                    {searchResult.map(pet => {
                        return <Pet animal={pet} key={pet.id}/>
                    })}
                </div>
            </main>
        </div>
    )
}

export default SearchPage