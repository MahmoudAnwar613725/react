import axios from "axios";
import {useRef} from "react";

const NewPost = (props) => {

const newPostForm = useRef();
const addButtonClick = ()=>{
    const form = newPostForm.current;
    const data = {
        title: form['title'].value,
        author: form['author'].value
    }

    axios.post('http://localhost:8080/api/posts',data)
        .then(response=>{
            props.changeFetchFlag();
        }).catch()
}

    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h1> Add Post</h1>

                <label>Title</label>
                <input type="text" label={'title'} name={'title'} />

                <label>Author</label>
                <input type="text" label={'author'} name={'author'} />
            </form>

            <button onClick={addButtonClick} > Add Post</button>

        </div>
    );

}

export default NewPost;