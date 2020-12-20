import React from 'react'
import { createSlice, nanoid, createAction, createAsyncThunk } from '@reduxjs/toolkit'

/*export function fetchBlogItems() {
    const url = "http://178.62.198.162/api/posts";
    return fetch(url, {method: 'GET'})
    .then( Response => Promise.all([response, response.json()]));
}*/

const initialState = /*blog => {
        const token = "pj11daaQRz7zUIH56B9Z";
        return fetch("http://178.62.198.162/api/posts", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'token': `${token}`
            },
            body: JSON.stringify({blog})
        }).then(resp => resp.json());
}*/
[
    {
        "id": 1,
        "created_at": "06-05-2019",
        "updated_at": "06-05-2019",
        "title": "Bericht 2",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": null,
        "img_url": "https://picsum.photos/200/300?random",
        "category": null
    },
    {
        "id": 2,
        "created_at": "06-05-2019",
        "updated_at": "06-05-2019",
        "title": "Bericht 3",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": 1,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 1,
            "name": "Tech",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 3,
        "created_at": "06-05-2019",
        "updated_at": "06-05-2019",
        "title": "Bericht 56",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": 1,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 1,
            "name": "Tech",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 4,
        "created_at": "06-05-2019",
        "updated_at": "06-05-2019",
        "title": "Bkjekjernfjkn",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": 1,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 1,
            "name": "Tech",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 5,
        "created_at": "2019-05-07 15:23:29",
        "updated_at": "2019-05-07 15:23:29",
        "title": "Test titel",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": 3,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 3,
            "name": "Sports",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 6,
        "created_at": "2019-05-07 15:23:48",
        "updated_at": "2019-05-07 15:23:48",
        "title": "nog een test",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": 2,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 2,
            "name": "Nieuws",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 7,
        "created_at": "2019-05-07 15:24:14",
        "updated_at": "2019-05-07 15:24:14",
        "title": "nog een test",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "category_id": 2,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 2,
            "name": "Nieuws",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 8,
        "created_at": "2019-05-13 11:34:50",
        "updated_at": "2019-05-13 11:34:50",
        "title": "NynkeTest1",
        "content": "Testtesttest",
        "category_id": 2,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 2,
            "name": "Nieuws",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 9,
        "created_at": "2019-05-13 11:54:41",
        "updated_at": "2019-05-13 11:54:41",
        "title": "NynkeTest2",
        "content": "Testtestest",
        "category_id": 2,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 2,
            "name": "Nieuws",
            "created_at": null,
            "updated_at": null
        }
    },
    {
        "id": 10,
        "created_at": "2019-05-13 13:23:58",
        "updated_at": "2019-05-13 13:23:58",
        "title": "Title",
        "content": "assadgadssd",
        "category_id": 1,
        "img_url": "https://picsum.photos/200/300?random",
        "category": {
            "id": 1,
            "name": "Tech",
            "created_at": null,
            "updated_at": null
        }
    }
]



/*export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () =>{
    const response = fetch("http://178.62.198.162/api/posts", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'token': `pj11daaQRz7zUIH56B9Z`
        },
        body: JSON.stringify({blog})
    }).then(resp => resp.json());
    return response.blog;
})
export const data = createAsyncThunk('http://178.62.198.162/api/posts', async () => { 
    const response = await fetch('http://178.62.198.162/api/posts', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'token': `pj11daaQRz7zUIH56B9Z`
      }
    }).then(resp => resp.json());
    console.log(response);
    return response;
});
console.log([data.fulfilled]);*/

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(blogTitle,categoryId, updatedAt, blogContent, imgUrl){
                return {
                    payload: {
                        id: nanoid(),
                        created_at: Date.now(),
                        updatedAt,
                        blogTitle,
                        blogContent,
                        categoryId,
                        imgUrl
                    }
                }
            }
        }
    },
    extraReducers: {

    }
});

export const { blogAdded } = blogSlice.actions;

export default blogSlice.reducer;