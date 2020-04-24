import React, {useState} from 'react'
import Nav from '../../components/nav'
import useTrack from '../../utils/hooks/useTrack'
import StyledAddTrack from './styled'
import {ROUTE_BACK_TO_WORKSPACE} from '../../utils/route'
import Track from '../../components/track'
import {GithubPicker} from 'react-color'
import ColorPicker from '../../components/color_picker'

let AddTrack = () => {
    let {tracks, addTrack} = useTrack()

    // Add New Track
    let [newTrack, setNewTrack] = useState({title: '', color: '#ffffff'})
    let handleChangeTitle = event => {
        setNewTrack({...newTrack, title: event.target.value})
    }
    let handleChangeColor = color => {
        setNewTrack({...newTrack, color: color})
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
                                onChange={handleChangeTitle}
                            />
                            <ColorPicker
                                value={newTrack.color}
                                onChange={handleChangeColor}
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
