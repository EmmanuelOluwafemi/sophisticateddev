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
    flex-direction: column;
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

    .socialIcons {
        display: none;

        @media (max-width: 768px) {
            display: block;
            margin-top: 3rem;

            a {
                margin-left: 2.5rem;
                position: relative;

                &::after {
                    content: attr(data-name);
                    position: absolute;
                    bottom: -1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #000;
                    font-weight: 400;
                    font-size: 1rem;
                    text-transform: capitalize;
                    opacity: 0;
                    pointer-events: none;
                    transition: all .5s ease-in-out;
                }

                &:hover {
                    &::after {
                        opacity: 1;
                    }
                }

                &:first-child {
                    margin-left: 0;
                }
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