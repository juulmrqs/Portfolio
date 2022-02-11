import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


.dark-theme{
    --primary-color: #EDDF1C;
    --primary-color-light: #203759;
    --secondary-color: #375683;
    --background-dark-color: #0A101A;
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


.light-theme{
    --primary-color: #EDDF1C;
    --primary-color-light: #007bff;
    --secondary-color: #057FFF;
    --background-dark-color: #eeeded;
    --background-dark-grey: #cfc6c6;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #c2bdbd;
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

body::-webkit-scrollbar{
    width: 9px;
    background-color: #202020;
}

body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}

body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

a{
    text-decoration: none;
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

ul ,ol{
    padding: 0;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: 0.6rem;
}

.light-dark-mode{
    position: fixed;
    right: 0;
    top: 40%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

  .ham-burger-menu{
      position: absolute;
      right: 5%;
      top: 3%;
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
          color: var(--primary-color);
      }
  }
  .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }
`;

export default GlobalStyle;
