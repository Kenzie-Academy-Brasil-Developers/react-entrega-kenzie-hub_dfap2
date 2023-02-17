import styled from "styled-components";

const StyledDashboard = styled.div`
    nav > div {
        height: 72px;
        max-width: 1440px;
        margin-inline: 25px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav > img {
        width: 106px;
        height: 15px;
    }

    .logout {
        height: 32px;
        padding-inline: 10.15px;

        border-radius: var(--radius-default);
        background-color: var(--grey-3);
        color: var(--grey-0);
        font-size: var(--headline);
    }

    header {
        max-width: 1440px;
        margin-inline: 25px;
        min-height: 118px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__span {
        font-size: var(--headline);
        color: var(--grey-1);
    }

    main > h2 {
        margin-bottom: 25px;
    }

    @media (min-width: 769px) {
        nav > div {
            margin-inline: 100px;
        }
        header {
            margin-inline: 100px;
        }
        main {
            margin-inline: 100px;
        }
    } ;
`;

export default StyledDashboard;
