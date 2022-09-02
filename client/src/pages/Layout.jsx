import React from 'react'
import {Outlet, Link } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <Outlet />
    </div>
  )
}
