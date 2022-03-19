import React from "react"; 
import Gif from "./gif.js"
import {useGif} from "../hooks/useGif.js"
import "./listOfGifs.css"

export default function ListOfGifs({ gifs }){
 	// A react no le encanta que devuelvas una array, la solución es envolver todo en un div o en un fragment

	return <div className="gif-container">
		{gifs.map(({id, title, url})=>{
			       return <Gif
			              key={id} 
			              title={title}
			              id={id}
			              url={url}
			        />
			    })}
	</div>

}