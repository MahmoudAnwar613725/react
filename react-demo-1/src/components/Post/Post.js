import {useEffect, useState} from "react";
import axios from "axios";

const Post = (props) => {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: "iphone 13", author: 1100},
            {id: 2, title: "iphone 13", author: 1100},
            {id: 3, title: "iphone 13", author: 1100},
        ]
    )

    const fetchPosts = () => {
        axios.get('http://localhost:8080/api/posts')
            .then(response => setPosts(response.data))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchPosts()
    }, [props.fetchFlag])


    const postsList = posts.map(post => {
        return <Post
            title={post.title}
            author={post.author}
            id={post.id}
            key={post.id}
            setSelected={() => {
                props.setSelected(post.id)
            }}

        />
    })

    return postsList
}

export default Post;



