import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }
    :root{
        --grey0:#F8F9FA;
        --grey1:#868E96;
        --grey2:#343B41;
        --grey3:#212529;
        --grey4:#121214;
        --negative:#E83F5B;
        --white:#ffffff;
    }
    body {
        background:var(--grey4);
        color:var(--grey0);
        display:flex;
        justify-content: center;
        align-items: center;
    }
    body, input, button {
        font-family:"Anton", sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;
