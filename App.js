import React from "react"; 
import { Link, Route } from "wouter";
import './App.css';
import ListOfGifs from "./componentes/listOfGifs.js";
import Home from "./paginas/home.js";
import Detail from "./paginas/detail.js"
import SearchResults from "./paginas/searchResults.js"
import StaticContext from "./context/estaticContext.js"
import {GifsContextProvider} from "./context/gifsContext.js"

function App() {
  return (
    <StaticContext.Provider value={{
      name: "Katriel M",
      colegio: true
    }}>
    <div className="App">
      <Link to="/">
        <h1>App</h1>
      </Link>

      <section className="App-content">
      <GifsContextProvider>
        <Route 
          component={Home}
          path="/" 
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword" 
        />
        <Route 
          component={Detail}
          path="/gif/:id" 
        />
      </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
