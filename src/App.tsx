import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {getAuth,onAuthStateChanged} from "firebase/auth"
import LoggedNavigation from './routes/LoggedNavigation'
import  {Auth} from "./pages"
export default function App() {
const [loggedIn, setLoggedIn] = useState<boolean>();
const auth =getAuth();

auth.onAuthStateChanged((user) => {
  if (user) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
});
  return loggedIn? <LoggedNavigation />:<Auth />;
}

