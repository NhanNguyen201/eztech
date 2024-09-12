import logo from '/logo.png'
import { IoIosMenu } from "react-icons/io";
import "./styles.css"
const navItems = [
    {
        name: "Home",
        isActive: false,
    },
    {
        name: "Games",
        isActive: true,
    },
    {
        name: "News",
        isActive: false,
    },
    {
        name: "math",
        isActive: false,
    },
    {
        name: "company",
        isActive: false,
    },
    {
        name: "events",
        isActive: false,
    },
    {
        name: "partners",
        isActive: false,
    },
]

const Logo = () => (
    <div className='h-20 w-20 object-contain scale-95 max-md:scale-75'>
        <img src={logo} alt='logo  image' className='invert translate-y-1/3'/>
    </div>
) 

function Navbar() {
    return (
        <div className="w-full fixed top-0  bg-black bg-opacity-60 z-50 max-md:bg-opacity-30">
            <div className=" max-w-[1240px] m-auto flex items-center justify-between ">
                <Logo />
                <div className='flex max-md:hidden'>
                    {navItems.map(navItem => (
                        <div key={navItem.name} className={`text-md text-white font-thin mx-5 py-6 ${navItem.isActive ? "activeItem" : ""}`}>
                            {String(navItem.name).toUpperCase()}
                        </div>))
                    }
                </div>
                <IoIosMenu className='text-white text-3xl mr-[10px] md:hidden lg:hidden xl:hidden'/>
            </div>
        </div>
    )
}

export default Navbar