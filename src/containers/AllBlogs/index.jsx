import { useState, useEffect } from 'react'
import { Card } from '../../components/cards'

import './styles.css'


const API = "https://jsonplaceholder.org/posts"
export const AllBlogs = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {

        fetch(API)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });




    }, [])



const [start, setStart] = useState(0);
const [end, setEnd] = useState(6)

const NextPagination = ()=>{
    
    setStart(start + 6)
    setEnd(end+6)
}
const BackPagination = ()=>{
    if(end=== 6)return
    setStart(start - 6)
    setEnd(end+-6)
}
    return (
        <div className="allBlogs">
            <h2  className="title-section" >All blog posts</h2>

            <div className="container-all-post">
                {
                    posts.slice(start, end).map(post => (
                        <Card
                            key={post.id}
                            title={post.title}
                            image={post.image}
                            publishedAt={post.publishedAt}
                            content={post.content}
                            category={post.category}
                            slug={post.slug}

                        />
                    ))
                }
                 <div className='pagination'>
                <button className='pagination-btn' onClick={()=> BackPagination() }> {"<-Back"} </button>
                <button className='pagination-btn' onClick={()=> NextPagination() }> {"Next ->"} </button>

            </div>


            </div>
           




        </div>
    )
}
