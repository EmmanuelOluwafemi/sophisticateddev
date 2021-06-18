import Styled, {keyframes} from 'styled-components';

const animate = keyframes`
    from {
        transform: scale(.9);
    }

    to {
        transform: scale(1)
    }
`;

const HeaderStyle = Styled.header`
    width: 100%;
    max-width: 100vw;
    padding: 1.5rem 0;

    &.sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #FAFAFA;
        z-index: 90;
        padding: 20px 0%;
    }

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }

    nav {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu {
            cursor: pointer;
            animation: ${animate} 1s ease-in-out infinite;

            img {
                width: 3rem;
                height: auto;
                transition: all .3s ease-in-out;

                @media (max-width: 768px) {
                    width: 2rem;
                }
            }
        }

        .logo {
            position: absolute;
            left: 45%;
            transform: translateX(-50%);

            img {
                @media (max-width: 768px) {
                    width: 150px;
                }
            }
        }

        .socialIcons {

            @media (max-width: 768px) {
                display: none;
            }

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
`;

export default HeaderStyle;