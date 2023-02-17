import StyledDashboard from "./style";
import logo from "../../assets/images/Logo.svg";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
    const token = localStorage.getItem("@TOKEN");
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUser() {
            try {
                const res = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setData(res.data);

                return data;
            } catch (error) {
                console.error(error);
            }
        }

        getUser();
    }, []);

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
                <h1>Olá, {data.name}</h1>
                <span className="header__span">{data.course_module}</span>
            </header>
            <main>
                <h2>Que pena estamos em desenvolvimento :(</h2>
                <p>
                    Nossa aplicação está em desenvolvimento, em breve teremos
                    novidades
                </p>
            </main>
        </StyledDashboard>
    );
};

export default DashBoardPage;
