import styled from 'styled-components'
import {motion, useAnimation} from 'framer-motion'
import React, {useEffect} from 'react'

const StyledTracking = styled.div`
    display: flex;
    padding: 1.4em;

    .content {
        display: flex;
        flex-flow: column nowrap;
        margin-right: auto;
    }

    .title {
        font-size: 0.5em;
        text-transform: uppercase;
        margin-left: 0.5em;
    }

    .description {
        padding: 0.5em 0.5em 0.5em 0;
        overflow: fragments;
    }

    .dot {
        height: 50px;
    }

    cursor: pointer;
`

const Dot = ({hover}) => {
    const controls = useAnimation()
    useEffect(() => {
        if (hover) {
            controls.start({scale: 2.5})
        } else {
            controls.start({scale: 1})
        }
    }, [hover])

    return (
        <StyledDot>
            <motion.svg
                animate={controls}
                whileTap={{scale: 3.5}}
                className="dot"
                viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="5" />
            </motion.svg>
        </StyledDot>
    )
}

const StyledDot = styled.div``

export {Dot}

export default StyledTracking
