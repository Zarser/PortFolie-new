// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';


function App() {
    
    const [isFlipped, setIsFlipped] = useState(false);

    

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        
            <div className="content-wrapper">
                <Header />
                <Main isFlipped={isFlipped} toggleFlip={toggleFlip} />
            </div>
        
    );
}

export default App;
