import React,{Suspense} from "react" 
import useNearScreen from "../hooks/useNearScreen.js"

const TrendingSearches=React.lazy(()=> import("./listOfTrendingSearches.js"))

export default function LazyTrending (){
	const {isNearScreen, fromRef}=useNearScreen()

	return <div ref={fromRef}>
		<Suspense fallback={<i className="fa-solid fa-spinner fa-spin-pulse"></i>}>
		{isNearScreen? <TrendingSearches />: <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
		</Suspense>
	</div>
}