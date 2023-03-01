import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import Cards from "../Cards/index.jsx";
import StyledList from "./style.js";

const CardsList = () => {
    const { user } = useContext(UserContext);
    const techs = user.techs;

    return (
        <StyledList>
            {techs?.map((tech) => (
                <Cards
                    title={tech.title}
                    status={tech.status}
                    id={tech.id}
                    key={tech.id}
                />
            ))}
        </StyledList>
    );
};

export default CardsList;
