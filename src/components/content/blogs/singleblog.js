import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const SingleBlog = () => {

    const Blog = styled.div`
    margin-top: 30px;
    float: left;
    margin-left: 5%;
    margin-right: 5%;
    width: 40%;
    height: 40%;
    background-color: #FFFFFF;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    `

    const BlogHeader = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    `

    const HeaderDatum = styled.div`
    position: absolute;
    bottom: 10px;
    left: 16px;
    font-size: 9px;
    color:#FFFFFF`

    const HeaderCategory = styled.div`
    position: absolute;
    bottom: 10px;
    right: 16px;
    font-size: 9px;
    color:#FFFFFF`

    const BlogTitle = styled.div`
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 5px;
    color: #262626;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 29px;
    `

    const BlogContent = styled.div`
    color: #868686;
    font-family: "Proxima Nova";
    font-size: 12px;
    letter-spacing: 0;
    line-height: 19px;    margin-top: 8px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 12px;
    `

    const blogs = useSelector(state => state.blogs);

    const renderedBlog = blogs.map(blog => (
    <Blog key={blog.id}>
        <BlogHeader><img src={blog.img_url} height="100%" width="100%" alt="foto" />
    <HeaderDatum>{blog.created_at}</HeaderDatum>
    </BlogHeader>
        <BlogTitle>{blog.title}</BlogTitle>
        <BlogContent>{blog.content}</BlogContent>
    </Blog>
    ));

    return (
        <div>
            {renderedBlog}
        </div>
    );
}