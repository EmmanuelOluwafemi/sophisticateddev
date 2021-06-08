import React from 'react';
import { FooterStyled } from '../style/components/footer';

import Emoji from '../assets/icons/Emoji.svg';

const Footer = () => {
    return (
        <FooterStyled id="footer">
            <div className="grid">
                <div className="logo">

                    <svg width="248" height="51" viewBox="0 0 248 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 19846">
                            <g id="Sophicticateddev">
                                <path d="M35.8326 38.5713C35.5388 38.2775 35.4864 37.9627 35.6752 37.6269L36.8084 35.6753C36.9343 35.4654 37.1127 35.35 37.3436 35.329C37.5744 35.287 37.7528 35.329 37.8787 35.4549L38.0361 35.5494C38.141 35.6333 38.2564 35.7172 38.3823 35.8012C38.5292 35.8851 38.7076 35.9901 38.9175 36.116C39.1273 36.2419 39.3372 36.3678 39.547 36.4937C39.7569 36.5986 39.9982 36.714 40.271 36.84C40.5438 36.9449 40.8062 37.0393 41.058 37.1233C41.3098 37.2072 41.5721 37.2807 41.8449 37.3436C42.1177 37.3856 42.3801 37.4066 42.6319 37.4066C43.4503 37.4066 44.1323 37.1757 44.678 36.714C45.2236 36.2314 45.4964 35.6543 45.4964 34.9828C45.4964 34.2063 45.1711 33.5243 44.5206 32.9367C43.87 32.3281 42.8627 31.751 41.4987 31.2054C39.7359 30.4919 38.3089 29.6 37.2176 28.5297C36.1264 27.4595 35.5808 26.0849 35.5808 24.4061C35.5808 22.8112 36.1789 21.4052 37.375 20.188C38.5922 18.9709 40.355 18.3623 42.6634 18.3623C44.9927 18.3623 47.0913 19.0653 48.959 20.4713C49.1059 20.5553 49.2003 20.7127 49.2423 20.9435C49.2843 21.1743 49.2528 21.3632 49.1479 21.5101L47.9517 23.3044C47.6159 23.808 47.2487 23.9339 46.85 23.6821C45.0032 22.5279 43.5447 21.9508 42.4745 21.9508C41.6351 21.9508 40.9635 22.1817 40.4599 22.6433C39.9562 23.105 39.7044 23.6087 39.7044 24.1543C39.7044 24.8888 39.9982 25.5288 40.5858 26.0744C41.1734 26.6201 42.1177 27.1552 43.4188 27.6798C44.3212 28.0366 45.0977 28.4038 45.7482 28.7816C46.4197 29.1383 47.1018 29.6 47.7943 30.1666C48.5078 30.7122 49.0534 31.3838 49.4312 32.1812C49.8089 32.9577 49.9978 33.8286 49.9978 34.7939C49.9978 36.4937 49.3262 37.9627 47.9832 39.2008C46.6401 40.418 44.8983 41.0265 42.7578 41.0265C41.5616 41.0265 40.4179 40.8482 39.3267 40.4914C38.2564 40.1347 37.4905 39.8094 37.0288 39.5156C36.5671 39.2008 36.1684 38.886 35.8326 38.5713Z" fill="#fff"/>
                                <path d="M51.8906 34.3847C51.8906 32.6009 52.5202 31.0585 53.7793 29.7574C55.0594 28.4563 56.5809 27.8057 58.3436 27.8057C60.1064 27.8057 61.6174 28.4563 62.8765 29.7574C64.1566 31.0585 64.7967 32.6009 64.7967 34.3847C64.7967 36.1894 64.1671 37.7528 62.908 39.0749C61.6488 40.376 60.1274 41.0265 58.3436 41.0265C56.5599 41.0265 55.0384 40.376 53.7793 39.0749C52.5202 37.7528 51.8906 36.1894 51.8906 34.3847ZM55.3217 34.3847C55.3217 35.287 55.6155 36.053 56.2031 36.6826C56.7907 37.3121 57.5042 37.6269 58.3436 37.6269C59.1831 37.6269 59.8966 37.3121 60.4842 36.6826C61.0717 36.053 61.3655 35.287 61.3655 34.3847C61.3655 33.5033 61.0717 32.7583 60.4842 32.1497C59.8966 31.5202 59.1831 31.2054 58.3436 31.2054C57.5042 31.2054 56.7907 31.5202 56.2031 32.1497C55.6155 32.7583 55.3217 33.5033 55.3217 34.3847Z" fill="#fff"/>
                                <path d="M71.4629 40.334V49.5571C71.4629 49.9558 71.2111 50.1552 70.7074 50.1552H68.1892C68.0423 50.1552 67.9059 50.0922 67.7799 49.9663C67.654 49.8404 67.5911 49.704 67.5911 49.5571V28.7186C67.5911 28.5507 67.6435 28.4143 67.7485 28.3094C67.8744 28.1835 68.0213 28.1205 68.1892 28.1205H69.4168C69.6686 28.1205 69.847 28.2464 69.9519 28.4983L70.3611 29.537C70.6549 29.1383 71.1691 28.7501 71.9036 28.3723C72.659 27.9946 73.4985 27.8057 74.4218 27.8057C76.1426 27.8057 77.5801 28.4563 78.7343 29.7574C79.9095 31.0375 80.4971 32.5904 80.4971 34.4161C80.4971 36.2629 79.8885 37.8263 78.6714 39.1064C77.4542 40.3865 75.9852 41.0265 74.2644 41.0265C73.2152 41.0265 72.2813 40.7957 71.4629 40.334ZM71.3055 36.9029C71.8931 37.3856 72.7115 37.6269 73.7608 37.6269C74.6422 37.6269 75.3662 37.3226 75.9328 36.714C76.5204 36.0845 76.8142 35.3185 76.8142 34.4161C76.8142 33.5138 76.5414 32.7583 75.9957 32.1497C75.4501 31.5202 74.7471 31.2054 73.8867 31.2054C73.1732 31.2054 72.5961 31.4152 72.1554 31.8349C71.7147 32.2546 71.4314 32.6848 71.3055 33.1255V36.9029Z" fill="#fff"/>
                                <path d="M83.3301 40.1137V19.2752C83.3301 19.1283 83.3931 18.9919 83.519 18.866C83.6449 18.74 83.7813 18.6771 83.9282 18.6771H86.6039C86.7717 18.6771 86.9081 18.74 87.0131 18.866C87.139 18.9919 87.2019 19.1283 87.2019 19.2752V28.8445C88.1253 28.152 89.2375 27.8057 90.5386 27.8057C92.4063 27.8057 93.8123 28.4143 94.7567 29.6315C95.701 30.8276 96.1732 32.3071 96.1732 34.0699V40.1137C96.1732 40.2606 96.1102 40.397 95.9843 40.5229C95.8584 40.6488 95.722 40.7118 95.5751 40.7118H93.0254C92.8575 40.7118 92.7106 40.6593 92.5847 40.5544C92.4798 40.4285 92.4273 40.2816 92.4273 40.1137V34.0384C92.4273 33.178 92.1965 32.496 91.7348 31.9923C91.2941 31.4677 90.696 31.2054 89.9405 31.2054C89.248 31.2054 88.6604 31.4152 88.1778 31.8349C87.6951 32.2337 87.3698 32.7688 87.2019 33.4403V40.1137C87.2019 40.5124 86.9816 40.7118 86.5409 40.7118H83.9282C83.7813 40.7118 83.6449 40.6488 83.519 40.5229C83.3931 40.397 83.3301 40.2606 83.3301 40.1137Z" fill="#fff"/>
                                <path d="M101.541 23.6506C100.954 23.6506 100.45 23.4408 100.03 23.0211C99.6105 22.6014 99.4007 22.0872 99.4007 21.4786C99.4007 20.8701 99.6105 20.3559 100.03 19.9362C100.45 19.5165 100.954 19.3066 101.541 19.3066C102.15 19.3066 102.664 19.5165 103.084 19.9362C103.524 20.3559 103.745 20.8701 103.745 21.4786C103.745 22.0872 103.524 22.6014 103.084 23.0211C102.664 23.4408 102.15 23.6506 101.541 23.6506ZM99.684 40.1137V28.7186C99.684 28.5507 99.7365 28.4143 99.8414 28.3094C99.9673 28.1835 100.114 28.1205 100.282 28.1205H102.895C103.063 28.1205 103.199 28.1835 103.304 28.3094C103.43 28.4143 103.493 28.5507 103.493 28.7186V40.1137C103.493 40.2606 103.43 40.397 103.304 40.5229C103.199 40.6488 103.063 40.7118 102.895 40.7118H100.282C100.135 40.7118 99.9988 40.6488 99.8729 40.5229C99.7469 40.397 99.684 40.2606 99.684 40.1137Z" fill="#fff"/>
                                <path d="M106.301 34.4161C106.301 32.5904 106.973 31.0375 108.316 29.7574C109.659 28.4563 111.222 27.8057 113.006 27.8057C114.874 27.8057 116.426 28.5507 117.665 30.0407C117.916 30.3765 117.864 30.6702 117.507 30.9221L116.059 32.3071C115.828 32.496 115.566 32.4645 115.272 32.2127C114.685 31.5411 113.961 31.2054 113.1 31.2054C112.261 31.2054 111.537 31.5202 110.928 32.1497C110.32 32.7793 110.015 33.5348 110.015 34.4161C110.015 35.3185 110.309 36.0845 110.897 36.714C111.484 37.3226 112.208 37.6269 113.069 37.6269C113.489 37.6269 113.877 37.5535 114.234 37.4066C114.59 37.2597 114.832 37.1338 114.958 37.0288C115.083 36.9239 115.293 36.7245 115.587 36.4307C115.839 36.1789 116.101 36.1474 116.374 36.3363L117.728 37.501C118.084 37.7948 118.158 38.0886 117.948 38.3824C116.815 40.1452 115.157 41.0265 112.974 41.0265C111.17 41.0265 109.606 40.397 108.284 39.1379C106.962 37.8578 106.301 36.2838 106.301 34.4161Z" fill="#fff"/>
                                <path d="M121.341 36.9659V31.4257H120.27C120.124 31.4257 119.987 31.3733 119.861 31.2683C119.756 31.1424 119.704 30.9955 119.704 30.8276V28.7186C119.704 28.5507 119.756 28.4143 119.861 28.3094C119.966 28.1835 120.103 28.1205 120.27 28.1205H121.341V24.6264C121.341 24.4796 121.393 24.3431 121.498 24.2172C121.624 24.0913 121.771 24.0284 121.939 24.0284L124.52 23.9969C124.667 23.9969 124.793 24.0598 124.898 24.1858C125.024 24.2907 125.087 24.4271 125.087 24.595V28.1205H127.857C128.255 28.1205 128.455 28.3199 128.455 28.7186V30.8276C128.455 30.9955 128.392 31.1424 128.266 31.2683C128.161 31.3733 128.025 31.4257 127.857 31.4257H125.087V36.4622C125.087 37.1338 125.412 37.4695 126.062 37.4695C126.461 37.4695 126.975 37.3541 127.605 37.1233C127.962 36.9974 128.192 37.1128 128.297 37.4695L128.927 39.4526C129.074 39.8094 128.958 40.0612 128.581 40.2081C128.497 40.2501 128.266 40.334 127.888 40.4599C127.531 40.5859 127.049 40.7118 126.44 40.8377C125.832 40.9636 125.296 41.0265 124.835 41.0265C122.505 41.0265 121.341 39.673 121.341 36.9659Z" fill="#fff"/>
                                <path d="M133.388 23.6506C132.801 23.6506 132.297 23.4408 131.877 23.0211C131.458 22.6014 131.248 22.0872 131.248 21.4786C131.248 20.8701 131.458 20.3559 131.877 19.9362C132.297 19.5165 132.801 19.3066 133.388 19.3066C133.997 19.3066 134.511 19.5165 134.931 19.9362C135.371 20.3559 135.592 20.8701 135.592 21.4786C135.592 22.0872 135.371 22.6014 134.931 23.0211C134.511 23.4408 133.997 23.6506 133.388 23.6506ZM131.531 40.1137V28.7186C131.531 28.5507 131.583 28.4143 131.688 28.3094C131.814 28.1835 131.961 28.1205 132.129 28.1205H134.742C134.91 28.1205 135.046 28.1835 135.151 28.3094C135.277 28.4143 135.34 28.5507 135.34 28.7186V40.1137C135.34 40.2606 135.277 40.397 135.151 40.5229C135.046 40.6488 134.91 40.7118 134.742 40.7118H132.129C131.982 40.7118 131.846 40.6488 131.72 40.5229C131.594 40.397 131.531 40.2606 131.531 40.1137Z" fill="#fff"/>
                                <path d="M138.148 34.4161C138.148 32.5904 138.82 31.0375 140.163 29.7574C141.506 28.4563 143.069 27.8057 144.853 27.8057C146.721 27.8057 148.273 28.5507 149.512 30.0407C149.763 30.3765 149.711 30.6702 149.354 30.9221L147.906 32.3071C147.675 32.496 147.413 32.4645 147.119 32.2127C146.532 31.5411 145.808 31.2054 144.947 31.2054C144.108 31.2054 143.384 31.5202 142.775 32.1497C142.167 32.7793 141.862 33.5348 141.862 34.4161C141.862 35.3185 142.156 36.0845 142.744 36.714C143.331 37.3226 144.055 37.6269 144.916 37.6269C145.336 37.6269 145.724 37.5535 146.081 37.4066C146.437 37.2597 146.679 37.1338 146.805 37.0288C146.93 36.9239 147.14 36.7245 147.434 36.4307C147.686 36.1789 147.948 36.1474 148.221 36.3363L149.575 37.501C149.931 37.7948 150.005 38.0886 149.795 38.3824C148.662 40.1452 147.004 41.0265 144.821 41.0265C143.017 41.0265 141.453 40.397 140.131 39.1379C138.809 37.8578 138.148 36.2838 138.148 34.4161Z" fill="#fff"/>
                                <path d="M151.614 36.714C151.614 35.5598 152.065 34.6155 152.967 33.881C153.87 33.1255 155.097 32.7478 156.65 32.7478C157.028 32.7478 157.406 32.7793 157.783 32.8422C158.161 32.8842 158.445 32.9367 158.633 32.9996L158.948 33.0941C158.969 32.2966 158.843 31.7405 158.57 31.4257C158.319 31.09 157.899 30.9221 157.311 30.9221C155.989 30.9221 154.814 31.0795 153.786 31.3942C153.387 31.5202 153.146 31.3313 153.062 30.8276L152.778 29.1908C152.695 28.7921 152.841 28.5297 153.219 28.4038C153.345 28.3619 153.597 28.2989 153.975 28.215C154.352 28.131 154.877 28.0471 155.549 27.9631C156.241 27.8582 156.892 27.8057 157.5 27.8057C159.368 27.8057 160.638 28.2569 161.309 29.1593C162.002 30.0407 162.348 31.4152 162.348 33.2829V40.1137C162.348 40.2606 162.285 40.397 162.159 40.5229C162.033 40.6488 161.897 40.7118 161.75 40.7118H160.617C160.386 40.7118 160.207 40.5649 160.081 40.2711L159.704 39.4212C158.528 40.4914 157.248 41.0265 155.863 41.0265C154.583 41.0265 153.555 40.6383 152.778 39.8619C152.002 39.0854 151.614 38.0361 151.614 36.714ZM155.076 36.714C155.076 37.1967 155.223 37.5954 155.517 37.9102C155.832 38.204 156.231 38.3509 156.713 38.3509C157.175 38.3509 157.616 38.204 158.035 37.9102C158.476 37.6164 158.759 37.3541 158.885 37.1233V35.392C158.319 35.1401 157.731 35.0142 157.122 35.0142C156.514 35.0142 156.021 35.1716 155.643 35.4864C155.265 35.8012 155.076 36.2104 155.076 36.714Z" fill="#fff"/>
                                <path d="M166.621 36.9659V31.4257H165.551C165.404 31.4257 165.268 31.3733 165.142 31.2683C165.037 31.1424 164.984 30.9955 164.984 30.8276V28.7186C164.984 28.5507 165.037 28.4143 165.142 28.3094C165.247 28.1835 165.383 28.1205 165.551 28.1205H166.621V24.6264C166.621 24.4796 166.674 24.3431 166.779 24.2172C166.905 24.0913 167.051 24.0284 167.219 24.0284L169.801 23.9969C169.947 23.9969 170.073 24.0598 170.178 24.1858C170.304 24.2907 170.367 24.4271 170.367 24.595V28.1205H173.137C173.536 28.1205 173.735 28.3199 173.735 28.7186V30.8276C173.735 30.9955 173.672 31.1424 173.546 31.2683C173.441 31.3733 173.305 31.4257 173.137 31.4257H170.367V36.4622C170.367 37.1338 170.692 37.4695 171.343 37.4695C171.742 37.4695 172.256 37.3541 172.885 37.1233C173.242 36.9974 173.473 37.1128 173.578 37.4695L174.207 39.4526C174.354 39.8094 174.239 40.0612 173.861 40.2081C173.777 40.2501 173.546 40.334 173.169 40.4599C172.812 40.5859 172.329 40.7118 171.721 40.8377C171.112 40.9636 170.577 41.0265 170.115 41.0265C167.786 41.0265 166.621 39.673 166.621 36.9659Z" fill="#fff"/>
                                <path d="M175.867 34.4161C175.867 32.6114 176.476 31.0585 177.693 29.7574C178.91 28.4563 180.442 27.8057 182.289 27.8057C183.926 27.8057 185.311 28.3619 186.444 29.4741C187.598 30.5863 188.175 31.9818 188.175 33.6607C188.175 33.9335 188.154 34.2168 188.112 34.5106C188.07 34.8673 187.871 35.0457 187.514 35.0457H179.456C179.498 35.7592 179.791 36.3993 180.337 36.9659C180.904 37.5115 181.617 37.7843 182.478 37.7843C183.38 37.7843 184.198 37.522 184.933 36.9973C185.29 36.7875 185.562 36.7875 185.751 36.9973L187.042 38.4768C187.336 38.7706 187.325 39.0434 187.01 39.2953C185.772 40.4495 184.209 41.0265 182.32 41.0265C180.452 41.0265 178.91 40.3865 177.693 39.1064C176.476 37.8263 175.867 36.2629 175.867 34.4161ZM179.739 32.8422H184.492C184.45 32.2546 184.198 31.751 183.737 31.3313C183.296 30.9116 182.782 30.7017 182.194 30.7017C181.565 30.7017 181.019 30.9116 180.557 31.3313C180.096 31.73 179.823 32.2337 179.739 32.8422Z" fill="#fff"/>
                                <path d="M189.885 34.4161C189.885 32.5484 190.462 30.985 191.616 29.7259C192.77 28.4458 194.271 27.8057 196.117 27.8057C197.02 27.8057 197.954 27.9946 198.919 28.3723V19.2752C198.919 19.1283 198.971 18.9919 199.076 18.866C199.202 18.74 199.349 18.6771 199.517 18.6771H202.193C202.34 18.6771 202.476 18.74 202.602 18.866C202.728 18.9919 202.791 19.1283 202.791 19.2752V40.1137C202.791 40.2606 202.728 40.397 202.602 40.5229C202.476 40.6488 202.34 40.7118 202.193 40.7118H200.965C200.671 40.7118 200.472 40.5124 200.367 40.1137L200.052 39.1379C199.947 39.2848 199.779 39.4631 199.549 39.673C199.339 39.8828 198.877 40.1661 198.164 40.5229C197.45 40.8587 196.705 41.0265 195.929 41.0265C194.229 41.0265 192.791 40.3865 191.616 39.1064C190.462 37.8053 189.885 36.2419 189.885 34.4161ZM194.386 32.1497C193.82 32.7583 193.536 33.5138 193.536 34.4161C193.536 35.3185 193.809 36.0845 194.355 36.714C194.9 37.3226 195.582 37.6269 196.401 37.6269C197.135 37.6269 197.723 37.4171 198.164 36.9973C198.604 36.5567 198.898 36.0845 199.045 35.5808V31.9294C198.457 31.4467 197.639 31.2054 196.59 31.2054C195.708 31.2054 194.974 31.5202 194.386 32.1497Z" fill="#fff"/>
                                <path d="M205.624 34.4161C205.624 32.5484 206.201 30.985 207.355 29.7259C208.509 28.4458 210.01 27.8057 211.856 27.8057C212.759 27.8057 213.693 27.9946 214.658 28.3723V19.2752C214.658 19.1283 214.711 18.9919 214.815 18.866C214.941 18.74 215.088 18.6771 215.256 18.6771H217.932C218.079 18.6771 218.215 18.74 218.341 18.866C218.467 18.9919 218.53 19.1283 218.53 19.2752V40.1137C218.53 40.2606 218.467 40.397 218.341 40.5229C218.215 40.6488 218.079 40.7118 217.932 40.7118H216.704C216.41 40.7118 216.211 40.5124 216.106 40.1137L215.791 39.1379C215.686 39.2848 215.518 39.4631 215.288 39.673C215.078 39.8828 214.616 40.1661 213.903 40.5229C213.189 40.8587 212.444 41.0265 211.668 41.0265C209.968 41.0265 208.53 40.3865 207.355 39.1064C206.201 37.8053 205.624 36.2419 205.624 34.4161ZM210.125 32.1497C209.559 32.7583 209.275 33.5138 209.275 34.4161C209.275 35.3185 209.548 36.0845 210.094 36.714C210.639 37.3226 211.321 37.6269 212.14 37.6269C212.874 37.6269 213.462 37.4171 213.903 36.9973C214.343 36.5567 214.637 36.0845 214.784 35.5808V31.9294C214.196 31.4467 213.378 31.2054 212.329 31.2054C211.447 31.2054 210.713 31.5202 210.125 32.1497Z" fill="#fff"/>
                                <path d="M221.363 34.4161C221.363 32.6114 221.971 31.0585 223.189 29.7574C224.406 28.4563 225.938 27.8057 227.784 27.8057C229.421 27.8057 230.806 28.3619 231.94 29.4741C233.094 30.5863 233.671 31.9818 233.671 33.6607C233.671 33.9335 233.65 34.2168 233.608 34.5106C233.566 34.8673 233.367 35.0457 233.01 35.0457H224.951C224.993 35.7592 225.287 36.3993 225.833 36.9659C226.399 37.5115 227.113 37.7843 227.973 37.7843C228.876 37.7843 229.694 37.522 230.429 36.9973C230.785 36.7875 231.058 36.7875 231.247 36.9973L232.538 38.4768C232.831 38.7706 232.821 39.0434 232.506 39.2953C231.268 40.4495 229.705 41.0265 227.816 41.0265C225.948 41.0265 224.406 40.3865 223.189 39.1064C221.971 37.8263 221.363 36.2629 221.363 34.4161ZM225.235 32.8422H229.988C229.946 32.2546 229.694 31.751 229.232 31.3313C228.792 30.9116 228.278 30.7017 227.69 30.7017C227.06 30.7017 226.515 30.9116 226.053 31.3313C225.591 31.73 225.319 32.2337 225.235 32.8422Z" fill="#fff"/>
                                <path d="M240.385 40.7118L234.656 28.876C234.552 28.6661 234.541 28.4878 234.625 28.3409C234.709 28.194 234.866 28.1205 235.097 28.1205H237.836C238.088 28.1205 238.276 28.2359 238.402 28.4668L240.952 34.3217H241.015L243.722 28.4668C243.827 28.2359 244.079 28.1205 244.478 28.1205H246.933C247.164 28.1205 247.321 28.194 247.405 28.3409C247.489 28.4878 247.479 28.6661 247.374 28.876L241.613 40.7118C241.487 40.9216 241.309 41.0265 241.078 41.0265H240.921C240.69 41.0265 240.511 40.9216 240.385 40.7118Z" fill="#fff"/>
                            </g>
                            <g id="Vector">
                                <path d="M11.3274 0C8.32315 1.31318e-07 5.442 1.19341 3.3177 3.3177C1.19341 5.442 9.54931e-08 8.32315 0 11.3274C-9.54931e-08 14.3316 1.19341 17.2127 3.3177 19.337C5.442 21.4613 8.32315 22.6547 11.3274 22.6547V0Z" fill="#F11C1C"/>
                                <path d="M11.3267 22.6538C14.9318 22.6538 18.3891 24.0859 20.9383 26.635C23.4874 29.1842 24.9195 32.6416 24.9195 36.2466C24.9195 39.8516 23.4874 43.309 20.9383 45.8582C18.3891 48.4073 14.9318 49.8394 11.3267 49.8394V22.6538Z" fill="#F11C1C"/>
                            </g>
                        </g>
                    </svg>
                </div>

                <div className="content">
                    <img src={Emoji} alt="Smile Emoji" />
                    <p>I am currently open to opportunities. Do you have a project you need to get off the ground? Hit me up!</p>
                    <a href="mailto:hi@sophisticateddev.com">hi@sophisticateddev.com</a>
                </div>
            </div>

            <div className="foot_note">
                Designed by <a href="https://twitter.com/kingsleyiheonye">@kingsleyiheonye</a> • Developed by <a href="https://twitter.com/emaz4me">@emaz4me</a>
            </div>
        </FooterStyled>
    )
}

export default Footer;