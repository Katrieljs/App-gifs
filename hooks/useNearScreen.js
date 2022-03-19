import React,{useState, useEffect, useRef} from "react"

export default function useNearScreen({distance= "100px", once=true, externalRef}={}) {
	const [isNearScreen, setShow]=useState(false)
	const fromRef=useRef()

	useEffect(function(){
		let observer

		const element=externalRef ? externalRef.current : fromRef.current;

		const onChange=(entries, observer)=>{
			const el=entries[0]
			if (el.isIntersecting) {
				setShow(true)
				once && observer.disconnect()
			}else{
				!once && setShow(false)
			}
		}

		observer=new IntersectionObserver(onChange,{
			rootMargin: distance
		})

		if (element) observer.observe(element)

		return ()=>observer.disconnect()
	})
	return {isNearScreen, fromRef}
}