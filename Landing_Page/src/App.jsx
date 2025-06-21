import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tickets from './components/Tickets';
import Schedule from './components/Schedule';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Home />
                <Tickets />
                <Schedule />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
