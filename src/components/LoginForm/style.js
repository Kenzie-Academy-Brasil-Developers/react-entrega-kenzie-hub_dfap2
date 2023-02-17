import styled from "styled-components";

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    max-width: fit-content;
    gap: 36px;
    margin-bottom: 25px;
    border-radius: var(--radius-default);

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

    .footer > span {
        display: block;
        margin-top: 12px;
        margin-bottom: 34px;

        text-align: center;
        font-weight: 700;
        font-size: var(--headline);
        color: var(--grey-1);
    }

    @media (min-width: 769px) {
        width: 370px;
        padding: 42px 22px;

        img {
            width: 160px;
            height: 20px;
        }
    }
`;

export default Form;
