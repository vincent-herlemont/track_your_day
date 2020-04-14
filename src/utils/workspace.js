import {WorkspaceId} from './Id'
import {defaultTracks} from './track'

const newWorkspace = (workspaces, workspace) => {
    return {
        ...workspace,
        id: WorkspaceId(workspaces),
        tracks: defaultTracks(),
    }
}

const defaultWorkspaces = () => {
    let workspaces = []
    workspaces.push(newWorkspace(workspaces, {name: 'Track your day'}))
    return workspaces
}

export {newWorkspace, defaultWorkspaces}
