import React, {useState} from 'react'
import {WorkspaceId} from '../utils/Id'

const dataWorkspaces = [
    {
        id: 'A0',
        name: 'Track your day',
    },
    {
        id: 'A1',
        name: 'Track your day 2',
    },
]

export const WorkspaceContext = React.createContext(null)

export const WorkspaceContextProvider = ({children}) => {
    const [workspaces, setWorkspaces] = useState(dataWorkspaces)

    const store = {
        workspaces,
        firstWorkSpace: () => {
            return workspaces[0]
        },
        workspaceById: id => {
            return workspaces.find(el => el.id === id)
        },
        updateWorkspaceById: (id, workspace) => {
            setWorkspaces(prevState => {
                return prevState.map(el =>
                    el.id === id ? {...el, ...workspace} : el
                )
            })
        },
        addWorkspace: workspace => {
            setWorkspaces(prevState => {
                let id = WorkspaceId(workspaces)
                workspace = {...workspace, id}
                return prevState.concat([workspace])
            })
        },
    }

    return (
        <WorkspaceContext.Provider value={store}>
            {children}
        </WorkspaceContext.Provider>
    )
}
