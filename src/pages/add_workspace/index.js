import React, {useContext, useState} from 'react'
import Nav from '../../components/nav'
import {WorkspaceContext} from '../../context/WorkSpace'
import {navigate, redirectTo} from '@reach/router'

let AddWorkspace = () => {
    let {addWorkspace} = useContext(WorkspaceContext)
    let [newWorkspaceName, setNewWorkspaceName] = useState('')
    let handleNewWorkspaceName = event => {
        setNewWorkspaceName(event.target.value)
    }
    let handleSubmitWorkspace = event => {
        event.preventDefault()
        addWorkspace({name: newWorkspaceName})
        navigate('/workspaces')
    }

    return (
        <div>
            <div>Add Workspace</div>
            <form onSubmit={handleSubmitWorkspace}>
                <input
                    value={newWorkspaceName}
                    onChange={handleNewWorkspaceName}
                />
                <input type="submit" value="Ok" />
            </form>
            <Nav links={[{to: '/workspaces', title: 'back'}]} />
        </div>
    )
}

export default AddWorkspace
