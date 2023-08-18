import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const DEFAULT_DESCRIPTION = "University Radio Nottingham is the multi-award--winning university radio station of the University of Nottingham Students' Union. During term-time we broadcast locally on University Park Campus and worldwide via our website."

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Milocha;
        src: url(/fonts/Milocha.ttf);
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/background.png) repeat;
        color: #fff;
        margin: 30px;
    };
`

const Header = styled.h1`
    font-family: Milocha;
    font-size: 4rem;
    font-weight: normal;
    margin: 0;

    @media (max-width: 850px) {
        text-align: center;
    }
`

const Subheader = styled.h2`
    font-size: 2.5rem;
    margin: 0;
    margin-top: 15px;

    @media (max-width: 900px) {
        text-align: center;
        font-size: 2rem;
    }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <GlobalStyles />
            <Header>University Radio Nottingham</Header>
            <Subheader>Keep up with our daily schedule and meet our hosts!</Subheader>
            {children}
        </>
    )
}

export const createHead = ({ title, description, colour }: { title?: string, description?: string, colour?: string }) => () => <>
    {title ? <title>URN • {title}</title> : <title>University Radio Nottingham</title>}

    <style>
        /* Font imports */
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
    </style>

    <meta name="theme-color" content={colour ?? "#5f2a87"} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
    <meta name="og:description" content={description ?? DEFAULT_DESCRIPTION} />
    <meta name="og:title" content={title ? `URN • ${title}` : "University Radio Nottingham"} />
    <meta name="og:image" content={"/images/icon.png"} />
</>
