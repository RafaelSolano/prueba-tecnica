import { createContext, useEffect, useState } from "react";

export const BlogPostsContext = createContext([]);

const API = "https://jsonplaceholder.org/posts"

export const BlogPostsContextProvider = ({ children })=>{
    const [posts, setPosts] = useState([])



    //consumo de la api 
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
    console.log("posts:", posts)
    

    return(
        <BlogPostsContext.Provider value={{
            posts,
            setPosts,
        }}>
            { children }
        </BlogPostsContext.Provider>
    );
};