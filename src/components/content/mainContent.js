import React from 'react'
import styled from 'styled-components'
import { Leftbar } from './leftbar';
import { Rightbar } from './rightbar'


export const MainContent = () => {

    const Content = styled.html`
    background-color: #F4F4F4;
    min-height: 120vh;`

    return (
        <Content>
        <div>
            <Leftbar/>
            <Rightbar/>
        </div>
        </Content>
    );

}