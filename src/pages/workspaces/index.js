import React, {useContext} from 'react'
import Nav from '../../components/nav'
import {WorkspaceContext} from '../../context/WorkSpace'
import {Link} from '@reach/router'

let Workspaces = () => {
    let {workspaces} = useContext(WorkspaceContext)
    return (
        <div>
            <div>List workspace</div>
            <ul>
                {workspaces.map(el => {
                    return (
                        <li key={el.id}>
                            <Link to={'/workspaces/' + el.id}>
                                ({el.id}) | {el.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Nav links={[{to: '/workspaces/add', title: 'add'}]} />
        </div>
    )
}

export default Workspaces
