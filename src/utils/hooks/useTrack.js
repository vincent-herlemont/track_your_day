import useWorkspace from './useWorkspace'
import {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import {newTrack} from '../track'

const useTrack = () => {
    const workspace = useWorkspace()
    const {updateWorkspaceById, setWorkspaces} = useContext(WorkspaceContext)

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
            return prevState
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
    }
}

export default useTrack
