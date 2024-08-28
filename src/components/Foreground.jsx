import React, { useRef } from 'react'
import Card from './Card'
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
        },
        {
            "desc": "This is a document",
            "size": "1.2mb",
            "download": false,
            "tag": {
                "show": true,
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
        },
        {
            "desc": "This is a card",
            "size": "1.2mb",
            "download": false,
            "tag": {
                "show": false,
                "title": "Download",
            }
        },
    ]
    return (
        <div ref={ref} className='w-full h-screen z-[3] fixed flex flex-wrap gap-8'>
            {data.map((data, index) => {
                return <Card data={data} r={ref} />
            })}
        </div>
    )
}

export default Foreground