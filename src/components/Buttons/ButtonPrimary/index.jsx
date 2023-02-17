import StyledPrimary from "./style.js";

const ButtonPrimary = ({ text, color }) => {
    return <StyledPrimary color={color}>{text}</StyledPrimary>;
};

export default ButtonPrimary;
