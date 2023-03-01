import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import StyledCard from "./styled";

const Cards = ({ title, status, id }) => {
    const { setRemoveIsOpen, setCard } = useContext(TechContext);

    return (
        <StyledCard
            onClick={() => {
                setRemoveIsOpen(true);
                setCard({
                    title: title,
                    status: status,
                    id: id,
                });
            }}
        >
            <h3>{title}</h3>
            <span>{status}</span>
        </StyledCard>
    );
};

export default Cards;
