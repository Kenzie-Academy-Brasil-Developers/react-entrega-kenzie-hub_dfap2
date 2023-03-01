import styled from "styled-components";

const StyledDialog = styled.dialog`
    color: white;
    background-color: var(--grey-3);
    box-sizing: border-box;

    padding: 0;
    max-width: 296px;
    width: 100%;

    border: none;

    .modal__header {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        width: 100%;
        padding: 15px;

        background-color: var(--grey-2);
    }

    .modal__header > span {
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;

        padding: 20px;
        gap: 25px;
    }

    div {
        width: 100%;
    }

    select {
        height: 48px;
        padding-inline: 16.24px;

        color: var(--grey-1);
        border: none;
        border-radius: var(--radius-default);
        outline: none;
        background-color: var(--grey-2);
        cursor: pointer;
    }

    select:focus {
        color: var(--grey-0);
        outline: 2px solid var(--grey-0);
    }

    select:hover {
        color: var(--grey-0);
        outline: 2px solid var(--grey-0);
    }

    @media (min-width: 769px) {
        max-width: 369px;
    }
`;

export default StyledDialog;
