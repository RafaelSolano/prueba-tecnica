import axios from "axios"
import  { useState, useEffect } from 'react'
import { Card } from '../../components/cards'


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
    

   console.log(posts)
    
  return (
    <>
    <div>
        {
            posts.map(post =>(
                <Card 
                key={post.id} 
                title={post.title}
                image={post.image} 
                publishedAt= {post.publishedAt}
                content= {post.content}
                category={post.category}
                slug={post.slug}

                />
            ))
        }
   

    </div>

   
    
   
    </>
  )
}
