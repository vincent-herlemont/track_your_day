import React, {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import useWorkspace from '../../utils/hooks/useWorkspace'
import {Link} from '@reach/router'

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
            <Link to={'tracks/add'}>Add Track</Link>
        </div>
    )
}

export default Workspace
