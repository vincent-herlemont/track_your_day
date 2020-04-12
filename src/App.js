import React, {useContext} from 'react';
import './App.css';
import {Redirect, Router} from "@reach/router"
import AddWorkspace from "./pages/add_workspace";
import Workspaces from "./pages/workspaces";
import AddTrack from "./pages/add_track";
import Explore from "./pages/explore";
import Workspace from "./pages/workspace";
import {DataWorkspaces, DataWorkspacesContext} from "./data";


let EntryRedirect = () => {
 let data_workspaces = useContext(DataWorkspacesContext);
 let current_workspace = data_workspaces.workspaces[0];
 return (
  <Redirect noThrow to={"workspaces/" + current_workspace.id} />
 )
}

function App() {
 
  return (
    <div className="App">
     <DataWorkspacesContext.Provider value={DataWorkspaces}>
      <Router>
       <EntryRedirect path="/" />
       <AddWorkspace path="workspaces/add" />
       <Workspaces path="workspaces" />
       <Workspace path="workspaces/:workspaceId" />
       <AddTrack path="tracks/add" />
       <Explore path="workspaces/:workspaceId/explore" />
      </Router>
     </DataWorkspacesContext.Provider>
    </div>
  );
}

export default App;
