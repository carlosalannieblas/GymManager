import { Button } from 'semantic-ui-react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import {Home, Artists,Artist,Albums,Album,Profile, Clients} from "../pages";
import {LoggedLayout} from "../layouts"

function LoggedNavigation(){

  return(
 <BrowserRouter>
 <LoggedLayout>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Artists />} />
  <Route path="/user/:id" element={<Artist />} />
  <Route path="/gyms" element={<Albums />} />
  <Route path="/gym/:id" element={<Album />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/clients" element={<Clients />} />
 </Routes>
 </LoggedLayout>
 </BrowserRouter>
  );}   
  

export default LoggedNavigation;

