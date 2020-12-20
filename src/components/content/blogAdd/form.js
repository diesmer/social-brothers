import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {blogAdded} from '../../../slice/blogSlice'
import { unwrapResult, nanoid } from '@reduxjs/toolkit'

export const Form = () => {

    const Label = styled.h1`
    color: #404040;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0;
    line-height: 15px;
    `

    const Input = styled.input`
    height: 40px;
    width: 90%;
    background-color: #FAFAFA;
    border: #FAFAFA;
    color: #C5C5C5;`

    const Textarea = styled.textarea`
    height: 150px;
    width: 90%;
    background-color: #FAFAFA;
    border: #FAFAFA;
    color: #C5C5C5;`

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

    const [title, setTitle] = useState('Geen Titel')
    const [content, setContent] = useState('Geen Bericht')
    const [categoryId, setCategoryId] = useState('Geen Category')

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories);

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onCategoryChanged = (e) => setCategoryId(e.target.value)

    const canSave = [title,content].every(Boolean)

    const onSaveBlogClicked = async () => {
        if(canSave) {
            try {
                const resultAction = await dispatch(
                    blogAdded({title, content })
                )
                unwrapResult(resultAction)
            } catch (err){
                console.log(err);
            }
        }
    }

    const categoryOptions = categories.map((category) => (
        <option key={category.id} value={category.id}>
            {category.name}
        </option>
    ))

    return(
        <div>
            <form>
                <Label>Berichtnaam</Label>
                <Input
                type="text"
                id="blognaam"
                name="blognaam"
                value={title}
                onChange={onTitleChanged}/>
                <Label>Categorie</Label>
                <select id="categorie" value={categoryId} onChange={onCategoryChanged}>
                    <option value="Geen Category"></option>
                    {categoryOptions}
                </select>
                <Label>Bericht</Label>
                <Textarea
                type="text"
                id="content"
                name="content"
                value={content}
                onChange={onContentChanged}/>
                <Button onClick={onSaveBlogClicked} disabled={!canSave}><ButtonText>Bericht aanmaken</ButtonText></Button>
            </form>
        </div>
    );
}