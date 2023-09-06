
import { useEffect, useState } from "react"
import './postlist.css'

type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const PostList = ()=> {

    const [posts, setPosts ] = useState([])

    useEffect( ()=> {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(response => response.json())
        .then(json => setPosts(json))
    },[])

    return <div className="posts-area">
        {posts && posts.map((post:PostType) => {
            return <div className='card' key={post.id}>
                <div className="header-card">
                    <h3>
                        {post.title}
                    </h3>
                </div>
                <div className="container">
                    <p>
                        {post.body}
                    </p>
                </div>
            </div>
        })}
    </div>
}

export default PostList