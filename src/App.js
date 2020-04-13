import React, {useContext} from 'react'
import './App.css'
import {Redirect, Router} from '@reach/router'
import AddWorkspace from './pages/add_workspace'
import Workspaces from './pages/workspaces'
import AddTrack from './pages/add_track'
import Explore from './pages/explore'
import Workspace from './pages/workspace'
import {WorkspaceContext, WorkspaceContextProvider} from './context/WorkSpace'
import {TrackContextProvider} from './context/Track'
import UseWorkspace from './components/route'

let EntryRedirect = () => {
    let {firstWorkSpace} = useContext(WorkspaceContext)
    return <Redirect noThrow to={'workspaces/' + firstWorkSpace().id} />
}

function App() {
    return (
        <WorkspaceContextProvider>
            <TrackContextProvider>
                <div className="App">
                    <Router>
                        <EntryRedirect path="/" />
                        <AddWorkspace path="workspaces/add" />
                        <Workspaces path="workspaces" />
                        <UseWorkspace path="workspaces/:workspaceId/">
                            <Workspace path="/" />
                            <AddTrack path="tracks/add" />
                            <Explore path="explore" />
                        </UseWorkspace>
                    </Router>
                </div>
            </TrackContextProvider>
        </WorkspaceContextProvider>
    )
}

export default App
