import React from 'react';

const servicesDetailsPage = ({params}) => {
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
    const id= params.id;
    const singleData= data.find((d)=>d._id == id);
    return (
        <div className='w-[45%] flex gap-5 border p-3'>
            <img src={singleData.service_image} className='h-60' alt="" />
            <div className='space-y-3'>
                <h1 className='text-2xl font-bold'>{singleData.service_name}</h1>
                <p className=''>{singleData.service_description}</p>
                <button className='bg-blue-600 text-white px-5 py-2'>Enroll Now</button>
            </div>
        </div>
    );
};

export default servicesDetailsPage;