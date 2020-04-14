import React, {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import useWorkspace from '../../utils/hooks/useWorkspace'
import Nav from '../../components/nav'

let Workspace = ({uri}) => {
    let workspace = useWorkspace()
    let {updateWorkspaceById} = useContext(WorkspaceContext)

    let handleSetName = event => {
        updateWorkspaceById(workspace.id, {name: event.target.value})
    }
    return (
        <div>
            <div>Workspace id : {workspace.id}</div>
            <div>Workspace name : {workspace.name}</div>
            <input value={workspace.name} onChange={handleSetName} />
            <hr />
            <Nav
                links={[
                    {to: '/workspaces', title: 'workspaces'},
                    {to: 'tracks/add', title: 'add track'},
                    {to: 'explore', title: 'explore'},
                ]}
            />
        </div>
    )
}

export default Workspace
