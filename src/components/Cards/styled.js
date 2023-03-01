import styled from "styled-components";

const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;

    padding: 15px 20px;

    color: white;
    background-color: var(--grey-4);
    border-radius: var(--radius-default);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: var(--grey-2);
    }

    span {
        font-size: var(--headline);
        color: var(--grey-1);
    }
`;

export default StyledCard;
