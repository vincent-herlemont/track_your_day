import {Redirect} from '@reach/router'
import React from 'react'
import useWorkspace from '../../utils/hooks/useWorkspace'

let Workspace = ({children}) => {
    let workspace = useWorkspace()
    if (!workspace) {
        return <Redirect noThrow to="/" />
    } else {
        return <div>{children}</div>
    }
}

export default Workspace
