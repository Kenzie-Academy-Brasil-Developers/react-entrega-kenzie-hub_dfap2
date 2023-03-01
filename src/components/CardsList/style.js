import styled from "styled-components";

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;

    gap: 15px;
    padding: 20px 20px;
    margin-bottom: 30px;
    max-width: 780px;
    width: 100%;
    box-sizing: border-box;

    background-color: var(--grey-3);
    border-radius: var(--radius-default);

    @media (min-width: 769px) {
    }
`;

export default StyledList;
