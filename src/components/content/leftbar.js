import React from 'react'
import styled from 'styled-components'
import { BlogAddForm } from './blogAdd/blogAddForm'

export const Leftbar = () => {
    
    const Content = styled.div`
    float: left;
    background: #FFFFFF;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
    width: 40%;
    height: 680px;
    `

    const InnerContent = styled.div`
    margin-left: 30px;
    `

    const Title = styled.div`
    height: 29px;
    width: 250px;
    color: #2B2B2B;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 29px;`

    return (
        <Content>
            <InnerContent>
                <BlogAddForm>

                </BlogAddForm>
            </InnerContent>
        </Content>
    );
}