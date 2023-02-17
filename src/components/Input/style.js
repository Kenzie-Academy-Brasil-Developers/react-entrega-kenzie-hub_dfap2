import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 265px;

    label {
        color: var(--grey-0);
        font-size: var(--headline);
        font-weight: 400;
    }

    p {
        color: var(--grey-1);
        font-size: 10.15px;
    }

    gap: 10.15px;
    input {
        height: 48px;
        padding-inline: 16.24px;

        color: var(--grey-1);
        border: none;
        border-radius: var(--radius-default);
        outline: none;
        background-color: var(--grey-2);
    }

    input:focus {
        color: var(--grey-0);
        outline: 2px solid var(--grey-0);
    }

    @media (min-width: 769px) {
        width: 325px;
    }
`;

export default StyledContainer;
