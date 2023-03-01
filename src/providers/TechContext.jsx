import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api.js";
import { UserContext } from "./UserContext.jsx";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [removeIsOpen, setRemoveIsOpen] = useState(false);
    const [card, setCard] = useState("");
    const { render, setRender } = useContext(UserContext);

    const token = localStorage.getItem("@TOKEN");

    const onSubmitFunction = async (data) => {
        try {
            const res = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setIsOpen(false);
            setRender(!render);
        } catch (error) {
            toast.error("Não foi possível adicionar", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setRemoveIsOpen(false);
        }
    };

    const onSubmitRemove = async () => {
        try {
            const res = await api.delete(`/users/techs/${card.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setRemoveIsOpen(false);
            setRender(!render);
        } catch (error) {
            toast.error("Não foi possível remover", {
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

    const onSubmitUpdate = async (data) => {
        try {
            const res = await api.put(`/users/techs/${card.id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setRemoveIsOpen(false);
            setRender(!render);
        } catch (error) {
            toast.error("Não foi possível atualizar", {
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

    return (
        <TechContext.Provider
            value={{
                onSubmitFunction,
                isOpen,
                setIsOpen,
                removeIsOpen,
                setRemoveIsOpen,
                card,
                setCard,
                onSubmitRemove,
                onSubmitUpdate,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};
