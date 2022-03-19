import React,{useContext} from "react";
import GifsContext from "../context/gifsContext.js"
import Gif from "../componentes/gif.js"

export default function Detail({params}){
	const {gifs}=useContext(GifsContext)

	const gif=gifs.find(singleGif=>singleGif.id==params.id)

	return <Gif {...gif} />
}