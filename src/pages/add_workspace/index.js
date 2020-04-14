import React from 'react'
import Nav from '../../components/nav'

let AddWorkspace = () => {
    return (
        <div>
            <div>Add Workspace</div>
            <Nav links={[{to: '/workspaces', title: 'back'}]} />
        </div>
    )
}

export default AddWorkspace
