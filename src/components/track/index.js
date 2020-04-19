import React, {useState} from 'react'
import StyledTrack from './styled'
import {useNavigate} from '@reach/router'
import {ROUTE_BACK_TO_WORKSPACE} from '../../utils/route'
import useTrack from '../../utils/hooks/useTrack'

const Track = ({track}) => {
    const {removeTrackById, startTracking, setTrackById} = useTrack()

    // Update title of track
    let handleSetTitle = event => {
        setTrackById(track.id, {title: event.target.value})
    }

    // TODO set color picker
    //https://www.npmjs.com/package/react-color

    // Remove Track
    let handleRemoveTrack = () => {
        removeTrackById(track.id)
    }

    const navigate = useNavigate()

    // Select track for start tracking
    let handleStartTracking = () => {
        startTracking(track.id, {})
        navigate(ROUTE_BACK_TO_WORKSPACE)
    }

    let [editMode, setEditMode] = useState(false)

    let handleToggleEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <StyledTrack>
            <button onClick={handleStartTracking}>{'<='}</button>
            <div className="title">
                {editMode && (
                    <React.Fragment>
                        <input
                            className="content"
                            onChange={handleSetTitle}
                            value={track.title}
                        />
                        <button
                            className="action"
                            onClick={handleToggleEditMode}>
                            ok
                        </button>
                    </React.Fragment>
                )}
                {!editMode && (
                    <React.Fragment>
                        <div className="content">{track.title}</div>{' '}
                        <button
                            className="action"
                            onClick={handleToggleEditMode}>
                            edit
                        </button>
                    </React.Fragment>
                )}
            </div>
            <button onClick={handleRemoveTrack}>X</button>
        </StyledTrack>
    )
}

export default Track
