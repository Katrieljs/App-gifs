import {API_KEY} from "./settings.js"
import {API_URL} from "./settings.js"

export default function getTrendingTerms(){
	const apiURL=`${API_URL}/trending/searches?api_key=${API_KEY}`;
	
    return fetch(apiURL)
      .then(res=>res.json())
      .then(response=>{
        const {data}=response;
          return data
        })
}