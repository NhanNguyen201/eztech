import { SlSocialTwitter } from "react-icons/sl";
import { PiYoutubeLogo } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
const sitemaps = [
    { 
        col: "web map",
        items: [
            { name: "Home"},
            { name: "Games"},
            { name: "News"},
            { name: "Math"},
            { name: "Company"},
            { name: "Event"},
            { name: "Partners"},
        ]
    },
    { 
        col: "About Us",
        items: [
            { name: "Licening"},
            { name: "Certification"},
            { name: "Responsibe Gaming"},
            { name: "Exhibitions"},
            { name: "Copyright Protection"},
            { name: "Privacy Policy"},
        ]
    },
    { 
        col: "Events",
        items: [
            { name: "PG ICE 2017"},
            { name: "PG ICE 2018"},
            { name: "PG ICE 2019"},
            { name: "About ICE"},
            
        ]
    },
    { 
        col: "Our Partners",
        items: [
            { name: "Relax Gaming"},
            { name: "Leander Games"},
           
        ]
    }

]
export default function Footer() {
    const siteMapMarkup = sitemaps.map(col => (
        <div key={col.col} className="ml-[70px]">
            <h3 className="text-lg uppercase font-semibold">{col.col}</h3>
            {col.items.map(item => (
                <p key={item.name} className="text-slate-500">{item.name}</p>))
            }
        </div>
    ))
    return (
        <div className="pt-[100px] pb-28 mt-[100px] border-t border-slate-400 max-">
            <div className="max-w-[1240px] m-auto px-[20px] flex justify-between">
                <div className="max-w-[172px] max-md:hidden">
                    <img src="/logo.png" className="w-[60px] h-[40px] object-contain"/>
                    <p className="text-slate-400 text-xs mt-[14px]">Valletta Buildings, South Street,
                    Valletta - VLT 1103 Malta</p>
                    <div className="text-xl mt-[20px] flex">
                        <SlSocialTwitter className="text-blue-400 mr-[15px] "/>
                        <PiYoutubeLogo className="text-red-500 mr-[15px] "/>
                        <SlSocialLinkedin className="text-blue-400 -translate-y-0.5"/>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    {siteMapMarkup}
                </div>
            </div>
            <div className="md:hidden lg:hidden xl:hidden">
                {sitemaps.map(col => (
                    <div key={col.col} className="w-full">
                        <div className="w-full m-auto py-[15px] px-[20px] border-b border-slate-200 flex justify-between">
                        
                            <h3 className="uppercase text-lg font-medium">{col.col}</h3>
                            <FaPlus className="text-lg translate-y-2"/>

                        </div>
                    </div>
                ))}
            </div>
            <div className=" max-w-[1240px] m-auto mt-[80px] pt-[60px] px-[20px] border-t border-slate-400">
                <p className="text-slate-400 text-sm mt-[14px] md:hidden lg:hidden xl:hidden my-[10px]">Valletta Buildings, South Street,
                Valletta - VLT 1103 Malta</p>
                <p className="text-slate-400 text-sm my-[10px]">COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
                <div className="text-2xl mt-[20px] flex md:hidden lg:hidden xl:hidden">
                    <SlSocialTwitter className="text-blue-400 mr-[15px] "/>
                    <PiYoutubeLogo className="text-red-500 mr-[15px] "/>
                    <SlSocialLinkedin className="text-blue-400 -translate-y-0.5"/>
                </div>
            </div>
        </div>
    )
}
