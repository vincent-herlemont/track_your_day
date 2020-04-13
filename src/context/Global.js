import React, {useState} from 'react'

const dataWorkspaces = [
    {
        id: 'A0',
        name: 'Track your day',
    },
]

export const GlobalContext = React.createContext(null)

export const GlobalContextProvider = ({children}) => {
    const [workspaces, setWorkspaces] = useState(dataWorkspaces)

    const store = {
        workspaces,
        firstWorkSpace: () => {
            return workspaces[0]
        },
        workspaceById: id => {
            return workspaces.find(el => el.id)
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
        <GlobalContext.Provider value={store}>
            {children}
        </GlobalContext.Provider>
    )
}
