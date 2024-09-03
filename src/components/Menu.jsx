import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
const Menu = () => {
    const [menustate, setMenustate] = useState(true)
    const action = () => {
        setMenustate(menustate1=>{
            const currentHeight = parseFloat(gsap.getProperty("#menu", "height"));
            if (menustate1) {
                gsap.to("#menu", {
                    height: `${currentHeight + 100}px`,
                });
                gsap.to("#plus-sign", {
                    rotate: 225,
                });
            } else {
                gsap.to("#menu", {
                    height: `${Math.max(currentHeight - 100, 0)}px`,
                });
                gsap.to("#plus-sign", {
                    rotate: 0,
                });
            }
            return !menustate1
        })
    };
    useEffect(() => {
        const menu = document.querySelector("#menu")
        menu.addEventListener("click", action)

        return (()=>{
            menu.removeEventListener("click", action)
        }
        )
    }, [])
    return (
        <div id='menu' className='z-[4] absolute p-4 bg-zinc-900  m-1 rounded-3xl right-0 top-[50%] translate-y-[-50%]' >
            <FaPlus id='plus-sign' className='fill-zinc-600 text-3xl' />
        </div>
    )
}

export default Menu
