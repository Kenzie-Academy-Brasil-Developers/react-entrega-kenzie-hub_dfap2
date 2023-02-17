import styled from "styled-components";

const StyledPrimary = styled.button`
    height: 48px;
    width: 100%;
    box-sizing: border-box;

    border-radius: var(--radius-default);
    text-align: center;
    color: white;
    font-weight: 500;
    background-color: var(
        ${(props) =>
            props.color == "active"
                ? "--color-primary"
                : "--color-primary-negative"}
    );
`;

export default StyledPrimary;
