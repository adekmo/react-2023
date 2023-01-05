import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile';
import Homescreen2 from './pages/Homescreen2';
import Detail from './pages/Detail';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //login
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else{
        // logout
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : (<Routes>
          <Route exact path="/" element={<Homescreen2 />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>)}
        

        {/* <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Homescreen2 />} />
        </Routes> */}
      </Router>
    </div>
  )
}

export default App
