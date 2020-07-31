import './App.scss';
import React, {useEffect, useState} from "react";

import {HashRouter, Redirect, Route,} from "react-router-dom"

import {NavBar} from "./components/NavBar/NavBar";
import {PreJunior} from "./Pages/Prejunior/PreJunior";
import {JuniorPlus} from "./Pages/JuniorPlus/JuniorPlus";
import {Junior} from "./Pages/Junior/Junior";


function App() {

    return (
        <HashRouter>
            <div className="App">
                <NavBar/>
                <Route exact path={'/'}  render={() => <PreJunior/>}/>
                <Route path={'/prejunior'} render={() => <PreJunior/>}/>
                <Route path={'/junior'} render={() => <Junior/>}/>
                <Route path={'/juniorplus'} render={() => <JuniorPlus/>}/>
            </div>
        </HashRouter>

    )
        ;
}

export default App;