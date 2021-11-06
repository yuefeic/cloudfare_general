import { useState } from 'react';
import './CreateBody.css';

function CreateBody(){
    const [title, setTitle] = useState('');
    const [username, setUserName] = useState('');
    const [content, setContent] = useState('');
    function sendPost() {
        console.log(title, username, content);
        fetch('https://general.yuefeichloechen.workers.dev/posts',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ title: title, username: username, content: content })
        });
    }

    return (
        <div className="createbody">
            <label>Title:</label><br/>
            <input name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br/>
            <label>Username:</label><br/>
            <input name="username" value={username} onChange={(e)=>setUserName(e.target.value)}></input><br/>
            <label>Content:</label><br/>
            <input name="content" value={content} onChange={(e)=>setContent(e.target.value)}></input><br/><br/>
            <button onClick={sendPost}>Create</button>
        </div>
    )
}

export default CreateBody;