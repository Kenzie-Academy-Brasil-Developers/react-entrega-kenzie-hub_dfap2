import styled from "styled-components";

const StyledSecondary = styled.button`
    height: 48px;
    width: 100%;
    box-sizing: border-box;

    border-radius: var(--radius-default);
    text-align: center;
    color: white;
    font-weight: 500;
    background-color: var(--grey-1);
    transition: 0.3s;

    &:hover {
        background-color: var(--grey-2);
    }
`;

export default StyledSecondary;
