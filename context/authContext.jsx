import { createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext();

export const Auth = ({ children }) => {

    const [token, setToken] = useState(null);

    useEffect(()=>{
        checkToken();
    },[])


    const login = async (email, password) => {
        setToken();
        try{
            await AsyncStorage.setItem('token', 'blablatoken')
        }catch(e){
            console.log('saving failed')
        }
    }

    const logout = () => {
        setToken(null)
    }

    const checkToken = async () => {
        try{
            const value_token = await AsyncStorage.getItem('token');
            if(value_token !== null){
                // do?
            }
        }catch(e){
            // do?
        }
    }

    return(
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}