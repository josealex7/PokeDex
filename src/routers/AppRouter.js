import React,{useState,useEffect} from "react";
import {
    // HashRouter
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import NavBarInicio from "../components/NavBarInicio";
import Footer from "../components/Footer";


export default function AppRouter() {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }
        setChecking(false)
    })
}, [setIsLoggedIn,setChecking])

if(checking){
  return(
      <h1>Espere...</h1>
  )
}

  return (
    <Router>
            <Routes>
                <Route path="/login" element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <NavBarInicio/>  
                            <Login/> 
                        </PublicRoute>
                    } />

                <Route path="/registro" element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <NavBarInicio/>
                            <Registro/>
                        </PublicRoute>
                    } />

                    
                <Route path="/*" element={
                        <PrivateRoute isAuthenticated={isLoggedIn}>
                            <DashboardRoutes/>
                        </PrivateRoute>
                    }/>
            </Routes>
        <Footer/>
    </Router>
  );
}