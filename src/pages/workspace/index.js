import React, {useContext} from 'react'
import {useParams} from '@reach/router'
import {WorkspaceContext} from '../../context/WorkSpace'

let Workspace = () => {
    let params = useParams()
    let {workspaceById, updateWorkspaceById} = useContext(WorkspaceContext)
    let workspace = workspaceById(params.workspaceId)
    let handleSetName = event => {
        updateWorkspaceById(workspace.id, {name: event.target.value})
    }
    return (
        <div>
            <div>Workspace id : {workspace.id}</div>
            <div>Workspace name : {workspace.name}</div>
            <input value={workspace.name} onChange={handleSetName} />
        </div>
    )
}

export default Workspace
