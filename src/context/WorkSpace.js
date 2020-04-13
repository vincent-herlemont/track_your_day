import React, {useState} from 'react'

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
    }

    return (
        <WorkspaceContext.Provider value={store}>
            {children}
        </WorkspaceContext.Provider>
    )
}
