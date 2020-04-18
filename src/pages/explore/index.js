import React from 'react'
import Nav from '../../components/nav'
import {ROUTE_BACK_TO_WORKSPACE} from '../../utils/route'

let Explore = () => {
    return (
        <div>
            <div>Explore</div>{' '}
            <Nav links={[{to: ROUTE_BACK_TO_WORKSPACE, title: 'back'}]} />
        </div>
    )
}

export default Explore
