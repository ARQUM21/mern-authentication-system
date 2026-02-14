import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContent = createContext()

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(false)

    const getAuthState = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
            if(data.success){
                setIsLoggedin(true)
              await getUserData()
            }
        } catch (error) {   
            console.log("Auth check failed:", error.response?.data?.message || error.message) 
        }
    }
    
    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data')
            if (data.success) {
                setUserData(data.userData)
            } else {
                setUserData(false)  
            }
            } catch (error) {
                console.log("Error fetching user data:", error.message)    
        }
    }

    useEffect(() => {
    getAuthState();
    }, []);
 

    const value = {
       backendUrl,
       isLoggedin, setIsLoggedin,
       userData, setUserData,
       getUserData
    }

    return (
        <AppContent.Provider value ={value}>
            {props.children}
        </AppContent.Provider>
    )
}
