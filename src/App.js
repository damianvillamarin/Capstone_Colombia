import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './pages/Layout'
import { Home } from './pages/Home';
import { Mountains } from './pages/Mountains';
import { NoPage } from './pages/NoPage';
import { NationalParks } from './pages/NationalParks';
import { SocialNetworks } from './components/SocialNetworks';
import { SocialNetworkFacebook } from './components/SocialNetworkFacebook';
import { SocialNetworkInstagram } from './components/SocialNetworkInstagram';
import { SocialNetworkTwitter } from './components/SocialNetworkTwitter';

const App = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Mountains" element={<Mountains />} />
                <Route path="NationalParks" element={<NationalParks />} />
                <Route path="*" element={<NoPage />} />
            </Route>
            </Routes>
            </BrowserRouter>
            <SocialNetworks
                socialNetworkFacebook = {<SocialNetworkFacebook />}
                socialNetworkInstagram = {<SocialNetworkInstagram />}
                socialNetworkTwiter = {<SocialNetworkTwitter />}
            />            
        </div>
    )
}

export default App;