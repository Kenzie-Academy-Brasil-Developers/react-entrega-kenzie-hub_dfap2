import StyledSecondary from "./styled";

const ButtonSecondary = ({ text, color, click }) => {
    return (
        <StyledSecondary color={color} onClick={click}>
            {text}
        </StyledSecondary>
    );
};

export default ButtonSecondary;
