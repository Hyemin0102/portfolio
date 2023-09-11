import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import { darkTheme, lightTheme } from "./Theme";



export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: ${({ isDark }) => isDark ? darkTheme.bgColor : lightTheme.bgColor};
        color : ${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor};
        border: ${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor};
    }
     p, ul {color :${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor}};
    header div ul {color :${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor}};
    header div ul .contact_box {color :${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor}};
    div {color :${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor}};
    header div ul .contact_box{background-color: ${({ isDark }) => isDark ? darkTheme.contactBgColor : lightTheme.contactBgColor}};
    header .header_theme{color: ${({ isDark }) => isDark ? darkTheme.textColor : lightTheme.textColor}}
    .about_wrapper .about_inner{border-top:${({ isDark }) => isDark ? darkTheme.BorderTop : lightTheme.BorderTop}};
    .about_wrapper .about_inner .about_left{border-right: ${({ isDark }) => isDark ? darkTheme.BorderRight : lightTheme.BorderRight}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile .about_cont .profile_line_wrapper .profile_line{background-color: ${({ isDark }) => isDark ? darkTheme.profileColor : lightTheme.profileColor}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile .about_cont .profile_line_wrapper > span:nth-child(2){color: ${({ isDark }) => isDark ? darkTheme.profileColor : lightTheme.profileColor}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile{box-shadow: ${({ isDark }) => isDark ? darkTheme.profileBoxShadow : lightTheme.profileBoxShadow}};
    .about_wrapper .about_inner .about_right .introduce_bottom .profile:hover{box-shadow:${({ isDark }) => isDark ? darkTheme.profileBoxShadowHover : lightTheme.profileBoxShadowHover}};

    .portfolio_wrapper{
        border-top: ${({ isDark }) => isDark ? darkTheme.BorderTop : lightTheme.BorderTop};
        border-bottom: ${({ isDark }) => isDark ? darkTheme.BorderBottom : lightTheme.BorderBottom};
    }
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list{border-bottom:${({ isDark }) => isDark ? darkTheme.BorderBottom : lightTheme.BorderBottom}};
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list > div:nth-child(1){border-right: ${({ isDark }) => isDark ? darkTheme.BorderRight : lightTheme.BorderRight}};
    .portfolio_wrapper > div:nth-child(1){border-right: ${({ isDark }) => isDark ? darkTheme.BorderRight : lightTheme.BorderRight}};
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list .portfolio_txt_wrap .name{border-bottom: ${({ isDark }) => isDark ? darkTheme.BorderBottom : lightTheme.BorderBottom}};
    .portfolio_wrapper > div:nth-child(2) .portfolio_detail .portfolio_list .portfolio_txt_wrap .txt_btn > div{border: ${({ isDark }) => isDark ? darkTheme.projectCategory : lightTheme.projectCategory}};
    .portfolio_wrapper > div:nth-child(1) .portfolio_title_wrap .portfolio_title_inner .portfolio_title_content .scroll-menu .overlay{background-color: ${({ isDark }) => isDark ? darkTheme.bgColor : lightTheme.bgColor}}
    .portfolio_wrapper > div:nth-child(1) .portfolio_title_wrap .portfolio_title_inner .portfolio_title_content nav ul li .title_line{background-color: ${({ isDark }) => isDark ? darkTheme.projectLine : lightTheme.projectLine}}
    `

/* export const GlobalStyle = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.bgColor};
        color: ${({ theme }) => theme.textColor};
        border: ${({ theme }) => theme.borderColor};
    }
    // 다른 스타일들 ...

    .about_wrapper .about_inner .about_right .introduce_bottom .profile {
        box-shadow: ${({ theme }) => theme.profileBoxShadow};
    }
    .about_wrapper .about_inner .about_right .introduce_bottom .profile:hover {
        box-shadow: ${({ theme }) => theme.profileBoxShadowHover};
    }

    // 다른 스타일들 ...
`; */









