import React from 'react'
import styled from 'styled-components'
import {navigate} from '@reach/router'
import {motion} from 'framer-motion'

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
`

export const StyledNavLink = styled(motion.div)`
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    flex: 1;

    color: black;
    text-decoration: none;
    cursor: pointer;
`

export const AnimatedNavLink = ({to, children}) => {
    let handleButton = event => {
        event.preventDefault()
        navigate(to)
    }
    return (
        <StyledNavLink
            initial={{backgroundColor: '#fff'}}
            whileHover={{backgroundColor: '#ffcfcf'}}
            onClick={handleButton}>
            {children}
        </StyledNavLink>
    )
}

export default StyledNav
