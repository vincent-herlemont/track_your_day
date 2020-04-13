import {useContext} from 'react'
import {WorkspaceContext} from '../../context/WorkSpace'
import {useMatch} from '@reach/router'

let useWorkspace = () => {
    let match = useMatch('/workspaces/:workspaceId/*')
    let {workspaceById} = useContext(WorkspaceContext)
    return workspaceById(match.workspaceId)
}

export default useWorkspace
