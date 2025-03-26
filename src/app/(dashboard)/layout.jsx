import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 bg-gray-300 h-96'>
                    <h1>User List</h1>
                </div>
                <div className='col-span-9 bg-blue-200 h-96'>{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;