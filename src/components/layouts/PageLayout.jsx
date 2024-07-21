import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../partials/Navbar'


const PageLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>

    )
}

export default PageLayout