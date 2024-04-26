"use client"

import React from 'react'
import SideNavbar from '../components/SideNavbar'


const Users = () => {
    return (
        <>
            <div className="flex">
                <SideNavbar />
                <div className="flex-grow p-4 h-[96vh]">This is User search page</div>
            </div>
        </>
    )
}

export default Users