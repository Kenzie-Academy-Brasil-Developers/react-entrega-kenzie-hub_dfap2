import StyledDashboard from "./style";
import logo from "../../assets/images/Logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import plus from "../../assets/images/plus.svg";
import CardsList from "../../components/CardsList/index.jsx";
import AddModal from "../../components/AddModal/index.jsx";
import RemoveModal from "../../components/RemoveModal";
import { TechContext } from "../../providers/TechContext";

const DashBoardPage = () => {
    const { navigate, user } = useContext(UserContext);
    const { isOpen, setIsOpen, removeIsOpen, setRemoveIsOpen } =
        useContext(TechContext);

    const logout = () => {
        localStorage.clear("@TOKEN");
        localStorage.clear("@USERID");

        navigate("/");
    };

    return (
        <StyledDashboard>
            <nav>
                <div>
                    <img src={logo} alt="logo" />
                    <button className="logout" onClick={logout}>
                        Sair
                    </button>
                </div>
            </nav>
            <header>
                <h1>Olá, {user.name}</h1>
                <span className="header__span">{user.course_module}</span>
            </header>
            <main>
                <div className="list__title">
                    <h3>Tecnologias</h3>
                    <button onClick={() => setIsOpen(true)}>
                        <img src={plus} alt="plus button" />
                    </button>
                </div>
                <CardsList />
                <AddModal isOpen={isOpen} setIsOpen={setIsOpen} />
                <RemoveModal
                    removeIsOpen={removeIsOpen}
                    setRemoveIsOpen={setRemoveIsOpen}
                />
            </main>
        </StyledDashboard>
    );
};

export default DashBoardPage;
