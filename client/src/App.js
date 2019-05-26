import React from 'react';
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="all-body">
      <div className="landing--container">
        <div className="landing--title">
          <h1>Movie Scrabble Hangman!</h1>
          <p>Click a letter</p><br />


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
