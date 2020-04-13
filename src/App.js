import React, {useContext} from 'react'
import './App.css'
import {Redirect, Router} from '@reach/router'
import AddWorkspace from './pages/add_workspace'
import Workspaces from './pages/workspaces'
import AddTrack from './pages/add_track'
import Explore from './pages/explore'
import Workspace from './pages/workspace'
import {GlobalContext, GlobalContextProvider} from './context/Global'

let EntryRedirect = () => {
    let {firstWorkSpace} = useContext(GlobalContext)
    return <Redirect noThrow to={'workspaces/' + firstWorkSpace().id} />
}

function App() {
    return (
        <GlobalContextProvider>
            <div className="App">
                <Router>
                    <EntryRedirect path="/" />
                    <AddWorkspace path="workspaces/add" />
                    <Workspaces path="workspaces" />
                    <Workspace path="workspaces/:workspaceId" />
                    <AddTrack path="tracks/add" />
                    <Explore path="workspaces/:workspaceId/explore" />
                </Router>
            </div>
        </GlobalContextProvider>
    )
}

export default App
