import React, {useState} from 'react'
import Nav from '../../components/nav'
import useTrack from '../../utils/hooks/useTrack'
import {useNavigate} from '@reach/router'
import StyledAddTrack from './styled'
import {ROUTE_BACK_TO_WORKSPACE} from '../../utils/route'

let AddTrack = () => {
    let {
        tracks,
        setTrackById,
        addTrack,
        removeTrackById,
        startTracking,
    } = useTrack()

    // Update title of track
    let handleSetTitle = id => {
        return event => {
            setTrackById(id, {title: event.target.value})
        }
    }

    // Add New Track
    let [newTrack, setNewTrack] = useState({title: ''})
    let handleNewTrack = event => {
        setNewTrack({title: event.target.value})
    }
    let handleAddTrack = event => {
        event.preventDefault()
        addTrack(newTrack)
        setNewTrack({title: ''})
    }

    // Remove Track
    let handleRemoveTrack = id => {
        return () => {
            removeTrackById(id)
        }
    }

    const navigate = useNavigate()

    // Select track for start tracking
    let handleStartTracking = trackId => {
        return () => {
            startTracking(trackId, {})
            navigate(ROUTE_BACK_TO_WORKSPACE)
        }
    }
    return (
        <StyledAddTrack>
            <div>
                <div>Select track</div>
                <div>
                    <ul>
                        {tracks.map(el => (
                            <li key={el.id}>
                                <button onClick={handleStartTracking(el.id)}>
                                    {'<='}
                                </button>
                                ({el.id})
                                <input
                                    value={el.title}
                                    onChange={handleSetTitle(el.id)}
                                />
                                <button onClick={handleRemoveTrack(el.id)}>
                                    x
                                </button>
                            </li>
                        ))}
                        <li>
                            <form onSubmit={handleAddTrack}>
                                <input
                                    value={newTrack.title}
                                    onChange={handleNewTrack}
                                />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <Nav links={[{to: ROUTE_BACK_TO_WORKSPACE, title: 'back'}]} />
        </StyledAddTrack>
    )
}

export default AddTrack
