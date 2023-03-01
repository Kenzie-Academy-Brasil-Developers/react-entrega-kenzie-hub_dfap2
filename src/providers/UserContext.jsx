import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [render, setRender] = useState(false);
    const token = localStorage.getItem("@TOKEN");

    const onSubmitFunctionLogin = async (data) => {
        try {
            const res = await api.post("/sessions", data);
            setUser(res.data.user);

            localStorage.setItem("@TOKEN", res.data.token);
            localStorage.setItem("@USERID", user.id);

            toast.success("Login efetuado", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate("/dashboard");
        } catch (error) {
            toast.error("Não foi possível efetuar o login", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const onSubmitFunctionRegister = async (data) => {
        delete data.password_confirm;

        try {
            const res = await api.post("/users", data);

            toast.success("Usuário Cadastrado com sucesso", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate("/");
        } catch (error) {
            toast.error("Não foi possível efetuar o Cadastro", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    useEffect(() => {
        if (token) {
            async function getUser() {
                try {
                    const res = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setUser(res.data);
                } catch (error) {
                    localStorage.clear("@TOKEN");
                }
            }

            getUser();
        } else {
            navigate("/");
        }
    }, [render]);

    return (
        <UserContext.Provider
            value={{
                navigate,
                user,
                setUser,
                setRender,
                render,
                onSubmitFunctionLogin,
                onSubmitFunctionRegister,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
