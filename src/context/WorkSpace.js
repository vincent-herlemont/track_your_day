import React, {useState} from 'react'
import {defaultWorkspaces, newWorkspace} from '../utils/workspace'

export const WorkspaceContext = React.createContext(null)

export const WorkspaceContextProvider = ({children}) => {
    const [workspaces, setWorkspaces] = useState(defaultWorkspaces())

    const store = {
        /// -----------------------------------------
        /// Workspaces
        workspaces,
        setWorkspaces,
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
                return prevState.concat([newWorkspace(workspaces, workspace)])
            })
        },
    }

    return (
        <WorkspaceContext.Provider value={store}>
            {children}
        </WorkspaceContext.Provider>
    )
}
