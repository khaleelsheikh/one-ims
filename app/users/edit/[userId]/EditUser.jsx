"use client"

import SideNavbar from '@/app/components/SideNavbar'
import React from 'react'

const EditUser = () => {
    return (
        <>
            <div className="flex">
                <SideNavbar />
                <div className="flex-grow p-4 h-[96vh]">This is Edit user page</div>
            </div>
        </>
    )
}

export default EditUser