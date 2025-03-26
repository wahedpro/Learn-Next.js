import Link from 'next/link';
import React from 'react';

const services = () => {
    const data = [
        {
            _id: "1",
            service_name: "Mobile App Development",
            service_image: "/1.png",
            service_description: "Mobile app development is the process of creating software applications designed to run on smartphones and tablets, encompassing everything from coding and design to testing and deployment"
        },
        {
            _id: "2",
            service_name: "Blogging",
            service_image: "/2.png",
            service_description: "Blogging is the process of creating and regularly publishing content, like articles, photos, and videos, on a website or platform, often in a casual and informal style, to share information, ideas, or personal experiences with an audience"
        },
        {
            _id: "3",
            service_name: "Digital Marketing",
            service_image: "/3.png",
            service_description: "Digital marketing, also known as online marketing, is the promotion of brands and products through digital channels like the internet, social media, email, and other online platforms to connect with potential customers"
        }
    ]
    return (
        <div>
            <h1 className='text-xl mb-5'>All services</h1>
            <div className='flex gap-5'>
                {
                    data.map((d)=>{
                        return <div className='border p-3'>
                            <img src={d.service_image} className='w-60 mb-2' alt="" />
                            <h1 className='font-bold mb-2'>{d.service_name}</h1>
                            <Link href={`services/${d._id}`}><button className='bg-blue-400 w-full py-1 text-white'>More</button></Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default services;