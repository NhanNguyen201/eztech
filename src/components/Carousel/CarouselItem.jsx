import { FaArrowRight } from "react-icons/fa";
export default function Item({img, bg, callToAction}) {
    return <div className="h-full w-full object-cover relative" style={{background: bg}}>
        {img && <img src={img} alt="carousel image" className="h-full w-full object-cover"/>}
        {callToAction && (
            <div className="absolute w-full text-center bottom-16 max-md:bottom-0 z-10">
                <div className="m-auto px-10 py-6 w-fit box-content bg-zinc-800 max-md:bg-transparent z-[8]">
                    <h3 className="text-white text-lg">{callToAction.title}</h3>
                    <a  href="#" className="text-white cursor-pointer text-sm">{callToAction.action} <FaArrowRight className="inline"/></a>
                </div>

            </div>
        )}
    </div>
}