import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { BlogList } from './blogs/bloglist'

export const Rightbar = () => {
    
    const Content = styled.div`
    float: left;
    background: #FFFFFF;
    margin-left: 5%;
    margin-top: 5%;
    width: 40%;
    height: fit-content;
    `

    const InnerContent = styled.div`
    vertical-align: middle;
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

    const Button = styled.button`
    height: 31px;
    width: 40%;
    margin-top: 50px;
    margin-left: 30%;
    margin-bottom: 50px;
    border-radius: 18px;
    border-color: #F27623;
    background-color: #F27623;
    `

    const ButtonText = styled.text`
    height: 15px;
    width: 62px;
    color: #FFFFFF;
    font-family: "Proxima Nova";
    font-size: 12px;
    font-weight: bold;
    `

    const blogs = useSelector(state => state.blogs);

    const renderedBlogs = blogs.map(blog => (
        <article>
            <h3>{blog.title}</h3>
        </article>
    ));

    return (
        <Content>
            <InnerContent>
                <BlogList></BlogList>
                <Button><ButtonText>Meer Laden</ButtonText></Button>
            </InnerContent>
        </Content>
    );
}