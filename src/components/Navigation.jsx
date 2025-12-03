import React from "react";
import Logo from '../assets/logo.svg';
import Search from "./Search";
import {types} from '../mocks/data/petTypes.json'
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

function Navigation(){
    const navigate = useNavigate()
    return(
        <nav>
            <div className="nav-logo">
                <img src={Logo} alt="Petlover" navigate="/"/>
                <Search />
            </div>
            <ul className="nav-links">
                <li key={'all'}>
                    <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>All Pets</NavLink>
                </li>
                {types.map(type => {
                    return <li key={type.name}>
                        <NavLink className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
                            to={`/${type._links.self.href.split('/').pop()}`}>{type.name}s {' '}</NavLink></li>
                })}   
            </ul>
        </nav>
    )
}

export default Navigation;