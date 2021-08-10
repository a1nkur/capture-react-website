import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* -------------------------------- CSS RESET ------------------------------- */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* ------------------------------ GLOBAL STYLES ----------------------------- */

    html, body {
        font-family: 'Lobster', cursive;
        font-family: 'Inter', sans-serif;
        background-color: #1b1b1b;

        ul li {
            list-style-type: none;
        }

        a {
            text-decoration: none;
            color: #fff;
        }

        h2 {
            font-size: 3rem;
            color: #fff;
            font-weight: 300;
        }

        span {
            color: #23d997;
        }

        p {
            color: #fff;
            font-weight: lighter;
        }

        button {
            border: 1px solid #23d997;
            font-weight: bold;
            padding: 0.8rem 1rem;
            width: 30%;
            background-color: transparent;
            color: #fff;
            transition: all 0.3s ease;
            cursor: pointer;
            &:hover{
                background-color: #23d997;
                color: #000;

            }
        }
    }

    /* ------------------------------ GLOBAL CLASSES ------------------------------ */

`;
