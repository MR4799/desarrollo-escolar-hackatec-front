import {React, createContext, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null)
    const isLogged = () => !!user;

    useEffect(() => {
        isLogin()
    }, [])

    const isLogin = () => {
        const token = localStorage.getItem('token')
        instance.get(`/profesores/islogin`, { headers: { authorization: token }})
        .then((response) => {
            setUser(response.data.data)
        })
        .catch((error) => {
            localStorage.removeItem('token');
            navigate(location.pathname)
        })
    }

    const login = (user, fromLocation) => {
        instance.post(`/users/login`, user)
        .then((response) => {
          setUser(response.data.data);
          localStorage.setItem("token", response.data.data.token);
          if (fromLocation) {
            return navigate(fromLocation.from, { state: { pagina: fromLocation.pagina } });
          }
        })
        .catch((error) => {
            alert('Error')
        });
    }

    const logout = () => {
        const token = localStorage['token']
        instance.put("/users/logouts", { usuario: "prueba" }, 
        { headers: { authorization: token, }})
        .then(() => {
          localStorage.removeItem("token");
          setUser(null);
          navigate();
        })
        .catch((error) => {
            alert('error')
        });
    }

    const signUp = (user) => {
        instance.post(`users/add`, user)
        .then((response)=>{
            if (response.data.info.status === 200) {
                alert('error')
                navigate();
            }
        })
        .catch((error) => {
            if(error.response.data.info.status === 400) {
                alert('el usuario ya existe')
            }
            navigate();
        })
    }

    const contextValue = {
        user,
        isLogged,
        login,
        logout,
        signUp
    }
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
      );
}