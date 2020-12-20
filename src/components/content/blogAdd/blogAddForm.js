import React from 'react'
import styled from 'styled-components'
import { Form } from './form'

export const BlogAddForm = () => {

    const Content = styled.div`
    margin-top: 30px;
    `

    const Title = styled.h2`
    color: #2B2B2B;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 29px;
    `

    return(
    <Content>
        <Title>
            Plaats een blog bericht
        </Title>
        <Form/>
    </Content>
    );
}