import React from 'react'
import {Link} from '@reach/router'

let Nav = ({links}) => {
    return (
        <div>
            {links.map(el => (
                <span key={el.title}>
                    <Link to={el.to}>{el.title}</Link>{' '}
                </span>
            ))}
        </div>
    )
}

export default Nav
