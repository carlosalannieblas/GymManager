import { Button } from 'semantic-ui-react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import {Home, Artists,Artist,Albums,Album,Profile} from "../pages";

function LoggedNavigation(){

  return(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/artists" element={<Artists />} />
  <Route path="/artist/:id" element={<Artist />} />
  <Route path="/albums" element={<Albums />} />
  <Route path="/albums/:id" element={<Album />} />
  <Route path="/profile" element={<Profile />} />
 </Routes>
 </BrowserRouter>
  );}   
  

export default LoggedNavigation;

