import { FaSearch } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { HiRectangleStack } from "react-icons/hi2";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoIosMusicalNotes } from "react-icons/io";
import { BsFillSuitClubFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { HiFilter } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const tabContents = [
    {
        name: "Home",
        icon: <GoHomeFill />
    },
    {
        name: "Timeline",
        icon: <HiRectangleStack />
    },
    {
        name: "All games",
        icon: <BsGrid3X3GapFill />
    },
    {
        name: "Search",
        icon: <GoHomeFill />
    }
   
]
const inactiveTabStyle = "text-slate-500 p-[10px] text-center flex-1 grid justify-items-center cursor-pointer"
const activeTabStyle = "text-black p-[10px] text-center flex-1 grid justify-items-center cursor-pointer border-b border-slate-800"
export default function index() {
    const [tabActive, setTabActive] = useState(2)
    return (
        <div>
            <div className="w-full lg:hidden xl:hidden   h-9 ">
                <div className="flex justify-around border-b border-slate-400">
                    {tabContents.map((tab, idx) => (
                        <div className={idx === tabActive ? activeTabStyle : inactiveTabStyle} key={tab.name} onClick={e => setTabActive(idx)}> 
                            {tab.icon}
                            <p className="text-xs uppercase">{tab.name}</p>
                        </div>
                    ))}
                    <div className="text-slate-500 p-[10px] text-center flex-1 grid justify-items-center border-l border-slate-400"> 
                        <HiFilter />
                        <p className="text-xs uppercase">Filter</p>
                    </div>
                </div>
            </div>
            <div className="flex max-w-[1240px] m-auto pt-[100px] px-[20px] max-md:px-0">
                <div className="w-[160px]  pt-5 max-md:hidden ">
                    <div className="text-slate-500 font-semibold"><FaSearch className="inline text-lg mr-2"/>Search</div>
                    <div className="border-b-2 border-slate-500  mt-4"/>
                    <div className="text-black my-2 font-semibold"><GoHomeFill className="inline text-lg mr-2"/>Games Home</div>
                    <div className="text-slate-500  my-2 font-semibold"><HiRectangleStack className="inline text-lg mr-2"/>Timeline</div>
                    <div className="text-slate-500  my-2 font-semibold"><BsGrid3X3GapFill className="inline text-lg mr-2"/>All Games</div>
                </div>
                
                <div className="flex-1 ml-[40px] max-md:ml-0">
                    <div className="flex justify-between max-md:hidden">
                        <h3 className="text-lg font-semibold pl-[25px]">Hot Games</h3>
                        <div className="flex max-md:hidden">
                            <IoIosArrowBack  className="text-xl text-slate-300"/>
                            <IoIosArrowForward  className="text-xl text-slate-600"/>
                        </div>
                        
                    </div>
                    <div className="w-[100vw] px-[25px] flex justify-between md:hidden lg:hidden xl:hidden">
                        <h3 className="text-lg font-semibold ">Hot Games</h3>
                        <div className="p-[10px]   border border-black ">
                            <div className="flex justify-between">
                                <div className="mr-[10px]">
                                    <p>Release Date</p>

                                </div>
                                <p>az <MdOutlineKeyboardArrowDown  className="inline "/></p>

                            </div>
                        </div>
                        
                    </div>
                    <div className="flex mt-[30px]">
                        <div  className="md:hidden lg:hidden xl:hidden rounded-md overflow-hidden w-[308px] ml-[30px]">
                            <img className="w-full object-contain" src="treepng.png"/>
                            <div className="bg-[#C48F03] w-full h-full p-[20px]">
                                <div className="flex">
                                    <img src="1.png" className="w-[60px] h-[60px]"/>
                                    <div className="text-white ml-[20px]">
                                        <h3 className="font-semibold">Tree Of Fortune</h3>
                                        <p className="text-xs font-thin">Legend has it that a farmer was
                                        granted a seed from a deity.</p>
                                    </div>    
                                </div>
                                <div className="flex justify-around text-white mt-[30px]">
                                    <div>
                                        <h3 className="uppercase text-md">Medium</h3>
                                        <p className="text-sm opacity-50 font-thin">Volatility</p>
                                    </div>
                                    <div>
                                        <h3 className="uppercase text-md">95.01%</h3>
                                        <p className="text-sm opacity-50 font-thin">RTP</p>
                                    </div>
                                    <div>
                                        <h3 className="uppercase text-md">x5000</h3>
                                        <p className="text-sm opacity-50  font-thin">Maximum Win</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 max-md:hidden">
                            <div className="w-full h-[221px] rounded-md overflow-hidden">
                                <img src={"/mahjong.png"} />
                            </div>
                            <div className="mt-[30px] flex justify-between items-center">
                                <div className="flex">
                                    <img src="/mahjong-logo.webp" className="h-[90px] w-[90px]"/>
                                    <div className="ml-[20px]">
                                        <h3 className="text-lg font-semibold">Mahjong Ways</h3>
                                        <p className="text-sm">4TECH™ has just launched their very
                                        first Mahjong inspired slot machine gam…</p>
                                    </div>
                                </div>
                                <button className="border-slate-500 border-2 rounded-md px-[20px] py-[2.5px]">View</button>
                            </div>
                        </div>
                        <div className="flex-1 ml-[20px] max-md:hidden">
                            <div className="w-full h-[221px] rounded-md overflow-hidden">
                                <img src={"/wild.png"} />
                            </div>
                            <div className="mt-[30px] flex justify-between items-center">
                                <div className="flex">
                                    <img src="/wild-logo.png" className="h-[90px] w-[90px]"/>
                                    <div className="ml-[20px]">
                                        <h3 className="text-lg font-semibold">Mahjong Ways</h3>
                                        <p className="text-sm">4TECH™ has just launched their very
                                        first Mahjong inspired slot machine gam…</p>
                                    </div>
                                </div>
                                <button className="border-slate-500 border-2 rounded-md px-[20px] py-[2.5px]">View</button>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mt-[90px] pl-[25px]">Hottest Category</h3>
                    <div className="flex mt-[30px]">
                        <div className="flex-1 rounded-3xl bg-slate-200 p-[20px] flex max-sm:w-[390px] max-sm:px-[10px] max-sm:py-[30px] ">
                            
                            <div className=" flex-1 w-full mr-[10px]">
                                <div className="bg-[#5C6EFF] rounded-3xl w-full h-[210px] p-[15px] text-white">
                                    <IoIosMusicalNotes className="text-white text-3xl"/>
                                    <h3 className="text-xl mt-[10px] font-thin">Music</h3>
                                    <p className="mt-[10px] font-thin text-sm">
                                        Music makes everything
                                        better, and these games
                                        will grove to it!
                                    </p>
                                </div>
                                <div className="flex mt-[20px]">
                                    <div className="flex-1 w-[95px] h-[95px] mr-[5px] max-sm:w-[75px] max-sm:h-[75px]">
                                        <img src="3.png" className="h-full w-full"/>
                                    </div>
                                    <div className="flex-1 w-[95px] h-[95px] ml-[5px] max-sm:w-[75px] max-sm:h-[75px]">
                                        <img src="4.png" className="h-full w-full"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1  w-full ml-[10px]">
                                <div className="flex ">
                                    <div className="flex-1 w-[95px] h-[95px]  mr-[5px] max-sm:w-[75px] max-sm:h-[75px]">
                                        <img src="1.png" className="h-full w-full"/>
                                    </div>
                                    <div className="flex-1 w-[95px] h-[95px]  ml-[5px] max-sm:w-[75px] max-sm:h-[75px]">
                                        <img src="2.png" className="h-full w-full"/>
                                    </div>
                                </div>
                                <div className="bg-[#5C6EFF] rounded-3xl w-full h-[210px]  mt-[20px]">
                                    <img src="/hiphop.png" className="w-full h-full"/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex-1 rounded-3xl bg-slate-200 p-[20px] ml-[20px] flex">
                            <div className=" flex-1">
                                <div className="bg-[#19796A] rounded-3xl w-full h-[210px] p-[15px] text-white">
                                    <BsFillSuitClubFill className="text-white text-3xl"/>
                                    <h3 className="text-xl mt-[10px] font-thin">Table Games</h3>
                                    <p className="mt-[10px] font-thin text-sm">
                                        The classic table games
                                        for the gentlemen and
                                        ladies.
                                    </p>
                                </div>
                                <div className="flex mt-[20px]">
                                    <div className="flex-1 w-[95px] h-[95px]  mr-[5px]">
                                        <img src="3.png" className="h-full w-full"/>
                                    </div>
                                    <div className="flex-1 w-[95px] h-[95px]  ml-[5px]">
                                        <img src="4.png" className="h-full w-full"/>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-[15px] flex-1">
                                <div className="flex mb-[20px]">
                                    <div className="flex-1 w-[95px] h-[95px]  mr-[5px]">
                                        <img src="1.png" className="h-full w-full" />
                                    </div>
                                    <div className="flex-1 w-[95px] h-[95px]  ml-[5px]">
                                        <img src="2.png" className="h-full w-full"/>
                                    </div>
                                </div>
                                <div className="bg-[#19796A] rounded-3xl w-full h-[210px]  overflow-hidden">
                                    <img src="/blackjack.jpg" className="w-full h-full"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='w-[100vw] flex justify-center items-center mt-[40px] md:hidden lg:hidden xl:hidden'> 
                        <div className='ml-2 w-2 h-2 rounded-lg bg-slate-400 opacity-60 cursor-pointer'/>
                        <div className='ml-2 w-2 h-2 rounded-lg bg-slate-400 opacity-60 cursor-pointer'/>
                        <div className='ml-2 w-4 h-4 rounded-lg border-slate-400 border-2 box-border grid justify-items-center cursor-pointer' >
                            <div className='w-2 h-2 rounded-lg bg-slate-400 m-auto'></div>
                        </div>
                        <div className='ml-2 w-2 h-2 rounded-lg bg-slate-400 opacity-60 cursor-pointer'/>
                        <div className='ml-2 w-2 h-2 rounded-lg bg-slate-400 opacity-60 cursor-pointer'/>
                    </div>
                    <div className='w-[100vw]  grid justify-items-center mt-[40px] md:hidden lg:hidden xl:hidden'> 
                        <div className="w-[90%] rounded-xl px-[20px] py-[10px] bg-slate-100 text-center font-semibold text-lg">Load More +</div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
