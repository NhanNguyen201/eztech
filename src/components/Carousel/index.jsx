import fute from '/futebol.webp'
import chickyrun from '/chickyrun.png'
import "./styles.css"
import CarouselItem from './CarouselItem'
import { useState } from 'react'

const carousels = [
    {
        bg: "#e88b43",
        img: null,
        callToAction: null
    },
    {
        bg: "#5c1c07",
        img: null,
        callToAction: null

    },
    {
        bg: "blue",
        img: fute,
        callToAction: null

    },
    {
        bg: "blue",
        img: chickyrun,
        callToAction: {
            title: "Chicky Run",
            action: "Game Details"
        }

    },
    {
        bg: "#0d0b07",
        img: null,
        callToAction: null
    }
]
const NavigateItem = ({idx, active, setActiveCarousel}) =>{
    return idx === active ?  (
        <div className='ml-2 w-4 h-4 rounded-lg border-white border-2 box-border grid justify-items-center cursor-pointer' onClick={() => setActiveCarousel(idx)}>
            <div className='w-2 h-2 rounded-lg bg-white m-auto'></div>
        </div>
        ) : (
        <div className='ml-2 w-2 h-2 rounded-lg bg-white opacity-60 cursor-pointer' onClick={() => setActiveCarousel(idx)}></div>
    )
}
const CarouselDisplayItem = ({active}) => {
    const item = carousels[active]
    return <CarouselItem {...item}/>
}
function Carousel() {
    const [active, setActive] = useState(2)
    const setActiveCarousel = (idx) => setActive(idx)
    return (
        <div className="w-full h-[576px] max-md:h-[420px] bg-[#03827E]">
            <CarouselDisplayItem active={active}/>
            <div className=' w-full  m-auto relative'>
                <div className='w-full p-10 left-28 bottom-5 max-md:bottom-20 absolute '>
                    <div className='m-auto max-w-full flex justify-start items-end'>
                        <div className='flex justify-start items-center'> 
                            {carousels.map((c, idx) => <NavigateItem active={active} idx={idx} key={idx} setActiveCarousel={setActiveCarousel}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel