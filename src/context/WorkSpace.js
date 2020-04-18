import React, {useState} from 'react'
import {defaultWorkspaces, newWorkspace} from '../utils/workspace'
import {useQuery} from '@apollo/react-hooks'
import {GET_DIRTY_DATA} from '../components/graphql'

export const WorkspaceContext = React.createContext(null)

export const WorkspaceContextProvider = ({children}) => {
    let writeDataToCache = workspaces => {
        console.log(workspaces)
        let data = {
            tshuss: JSON.stringify(workspaces),
        }
        client.writeData({
            data: {
                dirtyData: {
                    ...data,
                    __typename: 'DirtyData',
                },
            },
        })
    }

    let {data, client} = useQuery(GET_DIRTY_DATA)
    if (!data?.dirtyData?.tshuss) {
        writeDataToCache(defaultWorkspaces())
    } else {
        data = JSON.parse(data.dirtyData.tshuss)
    }

    const [workspaces, setWorkspaces] = useState(data)

    const store = {
        /// -----------------------------------------
        /// Workspaces
        workspaces,
        setWorkspaces,
        writeDataToCache,
        firstWorkSpace: () => {
            return workspaces[0]
        },
        workspaceById: id => {
            return workspaces.find(el => el.id === id)
        },
        updateWorkspaceById: (id, workspace) => {
            setWorkspaces(prevState => {
                prevState = prevState.map(el =>
                    el.id === id ? {...el, ...workspace} : el
                )
                writeDataToCache(prevState)
                return prevState
            })
        },
        addWorkspace: workspace => {
            setWorkspaces(prevState => {
                prevState = prevState.concat([
                    newWorkspace(workspaces, workspace),
                ])
                writeDataToCache(prevState)
                return prevState
            })
        },
    }

    return (
        <WorkspaceContext.Provider value={store}>
            {children}
        </WorkspaceContext.Provider>
    )
}
