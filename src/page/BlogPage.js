import React from 'react';
import { Navbar } from '../components/navbar/navbar';
import styled from 'styled-components';
import { SingleBlog } from '../components/content/blogs/singleblog';

export const BlogPage = () => {
    
    const Content = styled.html`
    background-color: #F4F4F4;
    min-height: 120vh;
`

    return (
        <Content>
            <Navbar/>
            <SingleBlog/>
        </Content>
    );
}