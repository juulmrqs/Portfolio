import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #EDDF1C;
    --primary-color-light: #d1e271;
    --secondary-color: #93acc2;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --black-color: #000;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Hepta Slab', serif;
    font-size: 1.1rem;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color)
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 3.5rem;
        color: var(--primary-color);
    }
}


`;

export default GlobalStyle;
