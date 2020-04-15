import React from 'react'
import StyledNav, {AnimatedNavLink} from './style'

let Nav = ({links}) => {
    return (
        <StyledNav>
            {links.map(el => (
                <AnimatedNavLink key={el.title} to={el.to}>
                    {el.title}
                </AnimatedNavLink>
            ))}
        </StyledNav>
    )
}

export default Nav
