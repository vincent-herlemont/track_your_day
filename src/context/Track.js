import React, {createContext, useState} from 'react'
import {TrackId} from '../utils/Id'

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

export const TrackContext = createContext(null)

export const TrackContextProvider = ({children}) => {
    let [tracks, setTracks] = useState(dataTracks)

    let store = {
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
        <TrackContext.Provider value={store}>{children}</TrackContext.Provider>
    )
}
