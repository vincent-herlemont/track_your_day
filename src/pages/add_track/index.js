import React, {useState} from 'react'
import Nav from '../../components/nav'
import useTrack from '../../utils/hooks/useTrack'
import {useNavigate} from '@reach/router'
import StyledAddTrack from './styled'
import {ROUTE_BACK_TO_WORKSPACE} from '../../utils/route'
import Track from '../../components/track'

let AddTrack = () => {
    let {tracks, addTrack} = useTrack()

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

    return (
        <StyledAddTrack>
            <div>
                <div>Select track</div>
                <div>
                    {tracks.map(el => (
                        <Track key={el.id} track={el} />
                    ))}
                    <div>
                        <form onSubmit={handleAddTrack}>
                            <input
                                value={newTrack.title}
                                onChange={handleNewTrack}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Nav links={[{to: ROUTE_BACK_TO_WORKSPACE, title: 'back'}]} />
        </StyledAddTrack>
    )
}

export default AddTrack
