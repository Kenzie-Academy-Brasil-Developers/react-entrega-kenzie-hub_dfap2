import styled from "styled-components";

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    width: 296px;
    gap: 36px;
    margin-bottom: 25px;
    border-radius: var(--radius-default);

    .header {
        display: flex;
        justify-content: space-between;

        box-sizing: border-box;
        width: 100%;
    }

    .header > button {
        height: 32px;
        padding: 0 16px;

        color: var(--grey-0);
        background-color: var(--grey-3);
        transition: 0.3s;
        border-radius: var(--radius-default);
    }

    .header > button:hover {
        background-color: var(--grey-2);
    }

    img {
        width: 101px;
        height: 14px;
    }

    form {
        display: flex;
        flex-direction: column;

        background-color: var(--grey-3);

        gap: 22px;
        padding: 34px 18px;
        border-radius: var(--radius-default);
    }

    h1 {
        text-align: center;
    }

    label {
        display: block;
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

    label {
        color: var(--grey-0);
        font-size: var(--headline);
        font-weight: 400;
    }

    p {
        color: var(--grey-1);
        font-size: 10.15px;
    }

    @media (min-width: 769px) {
        width: 370px;

        .header {
            width: 370px;
        }

        form {
            padding: 42px 22px;
        }

        img {
            width: 160px;
            height: 20px;
        }
    }
`;

export default Form;
