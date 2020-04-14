import React from 'react'
import Nav from '../../components/nav'

let Explore = () => {
    return (
        <div>
            <div>Explore</div> <Nav links={[{to: '../', title: 'back'}]} />
        </div>
    )
}

export default Explore
