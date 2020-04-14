import React, {useContext, useState} from 'react'
import Nav from '../../components/nav'
import {WorkspaceContext} from '../../context/WorkSpace'

let AddTrack = () => {
    let {tracks, setTrackById, addTrack, removeTrackById} = useContext(
        WorkspaceContext
    )

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

    return (
        <div>
            <div>Select track</div>
            <div>
                <ul>
                    {tracks.map(el => (
                        <li key={el.id}>
                            <button onClick={handleRemoveTrack(el.id)}>
                                x
                            </button>
                            ({el.id})
                            <input
                                value={el.title}
                                onChange={handleSetTitle(el.id)}
                            />
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
            <Nav links={[{to: '../../', title: 'back'}]} />
        </div>
    )
}

export default AddTrack
