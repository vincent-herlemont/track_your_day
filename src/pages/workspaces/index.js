import React from 'react'
import Nav from '../../components/nav'

let Workspaces = () => {
    return (
        <div>
            <div>List workspace</div>
            <Nav links={[{to: '/workspaces/add', title: 'add'}]} />
        </div>
    )
}

export default Workspaces
