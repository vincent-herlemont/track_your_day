import React from 'react'
import StyledTracking from './styled'

const Tracking = ({tracking, track}) => {
    console.log(tracking)
    return (
        <StyledTracking>
            <div className="content">
                <div className="title">{track.title}</div>
                <div className="description">Description ...</div>
            </div>
            <div>
                <svg className="dot" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="5" />
                </svg>
            </div>
        </StyledTracking>
    )
}

export default Tracking
