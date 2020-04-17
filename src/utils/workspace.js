import {defaultTracks} from './track'
import {nanoid} from 'nanoid'

const workspaceId = (workspaces, count = 0) => {
    if (count > 5) {
        throw 'to much tracks, please delete one'
    }
    let id = nanoid(10)
    let find = workspaces.find(el => el.id === id)
    if (find) {
        count = count + 1
        return workspaceId(workspaces, count)
    }
    return id
}

const newWorkspace = (workspaces, workspace) => {
    return {
        ...workspace,
        id: workspaceId(workspaces),
        tracks: defaultTracks(),
        trackings: [],
    }
}

const defaultWorkspaces = () => {
    let workspaces = []
    workspaces.push(newWorkspace(workspaces, {name: 'Track your day'}))
    return workspaces
}

export {newWorkspace, defaultWorkspaces, loadWorkspaces}
