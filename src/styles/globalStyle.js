import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --success: #3FE864;
        --negative: #E83F5B;

        --headline: 0.75rem;

        --radius-default: 4px;
    }

    body {
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;

        color: white;
        background-color: var(--grey-4);
    }

    h1, h2, h3 {
        font-weight: 700;

        font-size: 1rem;
    }

    button {
        all: unset;

        cursor: pointer;
    }
`;
