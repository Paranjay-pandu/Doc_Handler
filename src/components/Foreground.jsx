import React, { useRef } from 'react'
import Card from './Card'
import Menu from './Menu'
const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            "desc": "Document about a project",
            "size": "1.2gb",
            "download": false,
            "tag": {
                "show": false,
                "title": "Download",
            }
        },
        {
            "desc": "This is a card",
            "size": "1.2mb",
            "download": false,
            "tag": {
                "show": true,
                "title": "Download",
            }
        }
    ]
    return (
        <>
        <div ref={ref} className='w-full h-screen z-[3] fixed flex flex-wrap gap-6'>
            {data.map((data, index) => {
                return <Card data={data} r={ref} />
            })}
        </div>
        <Menu className="z-[4]" />
        </>
    )
}
export default Foreground