import React, {useState, useEffect} from "react";
import {FaAngleDoubleUp} from "react-icons/fa"

const ScrollToTop=()=>{
    const[showScrollTopButton, setShowScrollTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 300){
                setShowScrollTopButton(true)
            } else{
                setShowScrollTopButton(false)
            }
        }, [])
        })
    const scrollTop = (elementRef) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
    let button =  <FaAngleDoubleUp className="top-btn-pos top-btn-style" onClick={scrollTop}></FaAngleDoubleUp>;

    return(
        <div>{showScrollTopButton && button}</div>
    )
}

export default ScrollToTop;