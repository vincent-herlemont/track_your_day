import React, {useState} from 'react'
import StyledTracking, {Dot} from './styled'

const Tracking = ({tracking, track}) => {
    let [hover, setHover] = useState(false)

    let handleToggleHover = () => {
        if (!hover) {
            setHover(true)
        } else {
            setHover(false)
        }
    }

    return (
        <StyledTracking
            onMouseEnter={handleToggleHover}
            onMouseLeave={handleToggleHover}>
            <div className="content">
                <div className="title">{track.title}</div>
                <div className="description">Description ...</div>
            </div>
            <div>
                <Dot hover={hover} />
            </div>
        </StyledTracking>
    )
}

export default Tracking
