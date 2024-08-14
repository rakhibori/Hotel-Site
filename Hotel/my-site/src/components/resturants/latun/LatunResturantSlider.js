import React,{useState, useEffect} from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import img1 from '../../../image/resturants/latun/1.jpg';
import img2 from '../../../image/resturants/latun/2.jpg';
import img3 from '../../../image/resturants/latun/3.jpg';
import img4 from '../../../image/resturants/latun/4.jpg';

const initIndexNumber = 0

const LatunResturantSlider = () => {

    const[indexNumber, setIndexNumber] = useState(initIndexNumber)

    const slides = [
        {id:1, image:img1, alt:'image1'},
        {id:2, image:img2, alt:'image2'},
        {id:3, image:img3, alt:'image3'},
        {id:4, image:img4, alt:'image4'},
    ]

    useEffect(() => {
        changeSlideHandler()
    }, [])

    const changeSlideHandler = () => {
        setTimeout(() => {
            nextSlideHandler() 
            changeSlideHandler()   
        },3000)
    }

    const perviousSlideHandler = () => [
        setIndexNumber((prevState) => (prevState -1 + slides.length) % slides.length)
    ]

    const nextSlideHandler = () => [
        setIndexNumber((prevState) => (prevState +1) % slides.length)
    ]

    return ( 
        <div className='sliderBox'>
           {
            slides.map((slide) => (
                <img key={slide.id} src={slide.image} alt={slide.alt} className={indexNumber +1 === slide.id ? 'active' : 'deactive'}/>
            ))
           } 

           <FaAngleLeft className='leftIcon' onClick={perviousSlideHandler}></FaAngleLeft>
           <FaAngleRight className='rightIcon' onClick={nextSlideHandler}></FaAngleRight>
        </div>
     );
}
 
export default LatunResturantSlider;