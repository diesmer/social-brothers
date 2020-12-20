import React from 'react';
import { Navbar } from '../components/navbar/navbar';
import { MainContent} from '../components/content/mainContent'
import styled from 'styled-components';

export const MainPage = () => {
    
    const Content = styled.html`
    background-color: #F4F4F4;
`

    return (
        <Content>
            <Navbar/>

            <MainContent/>
        </Content>
    );
}