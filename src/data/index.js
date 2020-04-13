import React from 'react'

export const DataWorkspaces = {
    workspaces: [
        {
            id: 'A0',
            name: 'Track your day',
        },
    ],
    setName: (workspaceId, name) => {},
}
export const DataWorkspacesContext = React.createContext(DataWorkspaces)
