import StyledSecondary from "./styled";

const ButtonSecondary = ({ text, color, onClick }) => {
    return (
        <StyledSecondary color={color} onClick={onClick}>
            {text}
        </StyledSecondary>
    );
};

export default ButtonSecondary;
