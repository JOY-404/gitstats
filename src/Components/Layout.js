import React from 'react'

function Layout (props) {
    return <div className="app-wrapper" id="user-profile"><div className="container">{props.children}</div></div>
}

export default Layout