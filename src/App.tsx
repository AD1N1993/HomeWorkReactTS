import './App.scss';
import React from "react";

import {BrowserRouter, HashRouter, Route} from "react-router-dom"

import {NavBar} from "./components/NavBar/NavBar";
import {PreJunior} from "./Pages/Prejunior/PreJunior";
import {JuniorPlus} from "./Pages/JuniorPlus/JuniorPlus";
import {Junior} from "./Pages/Junior/Junior";


function App() {
    return (
        <HashRouter>
            <div className="App">
                <NavBar/>
                <Route path={'/prejunior'} render={ ()=> <PreJunior/> }/>
                <Route path={'/junior'} render={ ()=> <Junior /> }/>
                <Route path={'/juniorplus'} render={ ()=> <JuniorPlus/> }/>

            </div>
        </HashRouter>

    )
        ;
}

export default App;