import useWorkspace from './useWorkspace'
import {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import {newTrack} from '../track'
import {newTracking} from '../traking'

const useTrack = () => {
    const workspace = useWorkspace()
    const {setWorkspaces, writeDataToCache} = useContext(WorkspaceContext)

    const updateWorkspaceBulk = (bulkName, bulk) => {
        setWorkspaces(ws => {
            ws = ws.map(w => {
                if (bulk instanceof Function) {
                    w[bulkName] = bulk(w[bulkName])
                } else if (
                    w.id === w.id &&
                    !w[bulkName].find(t => bulk.id === t.id)
                ) {
                    w[bulkName] = w[bulkName].concat([bulk])
                } else {
                    console.log(bulk)
                    w[bulkName] = w[bulkName].map(t =>
                        t.id === bulk.id ? {...t, ...bulk} : t
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
        setTrackById: track => {
            updateWorkspaceBulk('tracks', track)
        },
        addTrack: track => {
            track = newTrack(workspace.tracks, track)
            updateWorkspaceBulk('tracks', track)
        },
        removeTrackById: id => {
            updateWorkspaceBulk('tracks', tracks => {
                return tracks.filter(el => el.id !== id)
            })
        },
        startTracking: (trackId, tracking) => {
            tracking = newTracking(workspace.trackings, trackId, tracking)
            updateWorkspaceBulk('trackings', tracking)
        },
    }
}

export default useTrack
