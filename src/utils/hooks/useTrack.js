import useWorkspace from './useWorkspace'
import {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import {newTrack} from '../track'
import {newTracking} from '../traking'

const useTrack = () => {
    const workspace = useWorkspace()
    const {workspaces, setWorkspaces, writeDataToCache} = useContext(
        WorkspaceContext
    )

    const updateTracks = tracks => {
        setWorkspaces(prevState => {
            prevState = prevState.map(el => {
                if (workspace.id === el.id) {
                    el.tracks = tracks(el.tracks)
                    return el
                } else {
                    return el
                }
            })
            writeDataToCache(prevState)
            return prevState
        })
    }

    const updateTrackings = tracking => {
        setWorkspaces(ws => {
            ws = ws.map(w => {
                if (
                    w.id === w.id &&
                    !w.trackings.find(t => tracking.id === t.id)
                ) {
                    w.trackings = w.trackings.concat([tracking])
                } else {
                    w.trackings.map(t =>
                        t.id === tracking.id ? {...t, ...tracking} : t
                    )
                }
                return w
            })
            writeDataToCache(ws)
            return ws
        })
    }

    return {
        tracks: workspace.tracks,
        setTrackById: (id, track) => {
            updateTracks(tracks => {
                return tracks.map(el => (el.id === id ? {...el, ...track} : el))
            })
        },
        addTrack: track => {
            updateTracks(tracks => {
                return tracks.concat([newTrack(tracks, track)])
            })
        },
        removeTrackById: id => {
            updateTracks(tracks => {
                return tracks.filter(el => el.id !== id)
            })
        },
        startTracking: (trackId, tracking) => {
            tracking = newTracking(workspace.trackings, trackId, tracking)
            updateTrackings(tracking)
        },
    }
}

export default useTrack
