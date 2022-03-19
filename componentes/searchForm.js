import React,{useState} from "react";

function SearchForm({onSubmit}) {
	const [keyword, setKeyword]=useState("");

	const handleSubmit=(e)=>{
		e.preventDefault()
		onSubmit({keyword})
	}

	const handleChange=(e)=>{
		setKeyword(e.target.value)
	}

	return(
		<form onSubmit={handleSubmit}>
				<input placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword}/>
		</form>
	)
}

export default React.memo(SearchForm)