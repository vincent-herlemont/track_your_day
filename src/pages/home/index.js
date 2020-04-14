import React, {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import useWorkspace from '../../utils/hooks/useWorkspace'
import Nav from '../../components/nav'

let Home = () => {
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
            <ul>
                {workspace.trackings.map(el => {
                    let track = workspace.tracks.find(
                        track => track.id === el.trackId
                    )
                    return (
                        <ul key={el.id}>
                            <div>{track.title}</div>
                            <pre>{JSON.stringify(el, 1, 0)}</pre>
                        </ul>
                    )
                })}
            </ul>
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

export default Home