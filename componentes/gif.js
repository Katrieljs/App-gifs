import React from "react"
import {Link} from "wouter"

function Gif ({title, id, url}) {
	return(
		<Link to={`/gif/${id}`} className="gif">
            <img className="gif-img" src={url} />
            <h4 className="gif-title">{title}</h4>
        </Link>
	)
}

export default React.memo(Gif)