import React, {useContext} from 'react'
import './App.css'
import {Redirect, Router} from '@reach/router'
import AddWorkspace from './pages/add_workspace'
import Workspaces from './pages/workspaces'
import AddTrack from './pages/add_track'
import Explore from './pages/explore'
import {WorkspaceContext, WorkspaceContextProvider} from './context/WorkSpace'
import Workspace from './components/route'
import Home from './pages/home'
import StyledApp from './StyledApp'
import GraphQl from './components/graphql'

let EntryRedirect = () => {
    let {firstWorkSpace} = useContext(WorkspaceContext)
    return <Redirect noThrow to={'workspaces/' + firstWorkSpace().id} />
}

function App() {
    return (
        <StyledApp>
            <GraphQl>
                <WorkspaceContextProvider>
                    <div className="App">
                        <Router>
                            <EntryRedirect path="/" />
                            <AddWorkspace path="workspaces/add" />
                            <Workspaces path="workspaces" />
                            <Workspace path="workspaces/:workspaceId/">
                                <Home path="/" />
                                <AddTrack path="w/tracks" />
                                <Explore path="w/explore" />
                            </Workspace>
                        </Router>
                    </div>
                </WorkspaceContextProvider>
            </GraphQl>
        </StyledApp>
    )
}

export default App
