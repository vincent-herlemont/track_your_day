import React, {useContext} from 'react';
import {useParams} from "@reach/router";
import {DataWorkspacesContext} from "../../data";

let Workspace = () => {
 let params = useParams();
 let data_workspace = useContext(DataWorkspacesContext);
 let current_workspace = data_workspace.workspaces.find((el) => el.id === params.workspaceId);
 return (
  <div>
   <div>Workspace id : {current_workspace.name}</div>
  </div>
 )
}

export default Workspace;