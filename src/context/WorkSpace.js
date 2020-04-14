import React, {useState} from 'react'
import {TrackId, WorkspaceId} from '../utils/Id'

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

const dataTracks = [
    {
        id: 'o_0',
        title: 'Work',
    },
    {
        id: 'qs0',
        title: 'Learn',
    },
    {
        id: '9oi',
        title: 'Free time',
    },
]

export const WorkspaceContext = React.createContext(null)

export const WorkspaceContextProvider = ({children}) => {
    const [workspaces, setWorkspaces] = useState(dataWorkspaces)
    const [tracks, setTracks] = useState(dataTracks)

    const store = {
        /// -----------------------------------------
        /// Workspaces
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
        /// -----------------------------------------
        /// Tracks
        tracks,
        setTrackById: (id, track) => {
            setTracks(prevState => {
                return prevState.map(el =>
                    el.id === id ? {...el, ...track} : el
                )
            })
        },
        addTrack: partialTrack => {
            setTracks(prevState => {
                let track = {
                    ...partialTrack,
                    id: TrackId(tracks),
                }
                return prevState.concat([track])
            })
        },
        removeTrackById: id => {
            setTracks(prevState => {
                return prevState.filter(el => el.id !== id)
            })
        },
    }

    return (
        <WorkspaceContext.Provider value={store}>
            {children}
        </WorkspaceContext.Provider>
    )
}
