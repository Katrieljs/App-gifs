import React,{useCallback, useRef, useEffect} from "react";
import ListOfGifs from "../componentes/listOfGifs.js";
import getGifs from "../services/peticion.js"
import {useGif} from "../hooks/useGif.js"
import useNearScreen from "../hooks/useNearScreen.js"
import debounce from "just-debounce-it"

export default function SearchResults({params}){
	const {keyword}=params;
	const {loading, gifs, setPage}=useGif({keyword})
	const externalRef=useRef()
	const {isNearScreen}=useNearScreen({
		externalRef: loading ? null : externalRef,
		distance: "300px",
		once: false
	})

	const debounceHandleNextPage=useCallback(debounce(
		 ()=> setPage(prevPage=>prevPage + 1), 100
	), [])

	useEffect(()=>{
		if (isNearScreen) debounceHandleNextPage()
	},[debounceHandleNextPage, isNearScreen])

return <div> 
	{loading ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> 
			: <> <h3>{decodeURI(keyword)}</h3> 
				<ListOfGifs gifs={gifs} /> 
				<div id="visor" ref={externalRef}></div>
			</>
	} 
	</div>
}

