import Styled from 'styled-components';

export const NavbarStyle = Styled.nav`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;

    ul {
        list-style: none;

        li {
            margin-bottom: 3rem;
            display: flex;
            justify-content: center;

            a {
                font-weight: 700;
                font-size: 1.8rem;
                color: #333;
                text-align: center;
            }
        }
    }

    .closeBtn {
        position: absolute;
        top: 2.5rem;
        left: 6%;
        width: 3rem;
        height: auto;
        cursor: pointer;
    }

    .logo {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: auto;
    }
`;