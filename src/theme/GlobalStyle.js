import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: ${({ theme }) => theme.bgColor};
        color : ${({ theme }) => theme.textColor};
        border: ${({ theme }) => theme.textColor};
    }
    p {color : ${({ theme }) => theme.textColor}};
    ul {color : ${({ theme }) => theme.textColor}};

    header div ul {color : ${({ theme }) => theme.textColor}};
    header div ul .contact_box {color : ${({ theme }) => theme.textColor}};
    div {color : ${({ theme }) => theme.textColor}};
    header div ul .contact_box{background-color: ${({ theme }) => theme.contactBgColor}};

    .about_wrapper .about_inner{border-top:${({ theme }) => theme.BorderTop} };
    .about_wrapper .about_inner .about_left{border-right: ${({ theme }) => theme.BorderRight}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile .about_cont .profile_line_wrapper .profile_line{background-color: ${({ theme }) => theme.profileColor}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile .about_cont .profile_line_wrapper > span:nth-child(2){color: ${({ theme }) => theme.profileColor}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile{box-shadow:${({ theme }) => theme.profileBoxShadow}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile:hover{box-shadow:${({ theme }) => theme.profileBoxShadowHover}};

    .portfolio_wrapper{
        border-top: ${({ theme }) => theme.BorderTop};
        border-bottom: ${({ theme }) => theme.BorderBottom};
    }
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list{border-bottom: ${({ theme }) => theme.BorderBottom}};
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list > div:nth-child(1){border-right: ${({ theme }) => theme.BorderRight}};
    .portfolio_wrapper > div:nth-child(1){border-right: ${({ theme }) => theme.BorderRight}};
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list .portfolio_txt_wrap .name{border-bottom: ${({ theme }) => theme.BorderBottom}};
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list .portfolio_txt_wrap .txt_btn > div{border: ${({ theme }) => theme.projectCategory}};
    .portfolio_wrapper > div:nth-child(1) .portfolio_title_wrap .portfolio_title_inner .portfolio_title_content .scroll-menu .overlay{background-color: ${({ theme }) => theme.bgColor}}
    .portfolio_wrapper > div:nth-child(1) .portfolio_title_wrap .portfolio_title_inner .portfolio_title_content nav ul li .title_line{background-color: ${({ theme }) => theme.projectLine}}
`;