import { useState } from "react";
import { useRouter } from "next/router";
import classes from './Edit.module.css';

const Edit = (props) => {
    const [text, setText] = useState(props.text);
    const router = useRouter();
    
    const editTextHandler = (e) => {
        setText(e.target.value);
    }

    const updateHandler = async() => {
        await fetch('/api/update-comment', {
            method: 'PATCH',
            body: JSON.stringify({
                updateContent: text,
                id: props.id
            }),
            headers: {
                "Content-Type": "application/json",
                'Accept':'application/json'
              }
        })
        router.replace("/");
        props.setIsEditing(false);
    }

    return (<div className={classes.edit}>
        <textarea  onChange={editTextHandler} value={text} />  
        <br/>
        <button onClick={updateHandler} >Update</button>
    </div>)
}

export default Edit;