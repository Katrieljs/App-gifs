import React, {useCallback} from "react";
import {useLocation} from "wouter";
import {useGif} from "../hooks/useGif.js"
import ListOfGifs from "../componentes/listOfGifs.js"
import TrendingSearches from "../componentes/trendingSearches"
import SearchForm from "../componentes/searchForm"
import "../App.css"


export default function Home(){
	const [path, pushLocation]=useLocation();
	const {loading, gifs}=useGif()

	const handleSubmit=useCallback(({keyword})=>{
		pushLocation(`/search/${keyword}`)
	},[pushLocation])

	return(
		<div>
			<SearchForm onSubmit={handleSubmit}/>
			<h3>Ultima busqueda</h3>
			<ListOfGifs gifs={gifs}/>
			<TrendingSearches />
		</div>	
	)
}