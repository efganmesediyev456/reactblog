import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';


const Blog = () => {

    const [blogs, setBlogs] = useState([])


    useEffect(()=>{

        fetch("http://195.26.245.27/az/api/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Veri çekilirken hata oluştu.");
          }
          return response.json();
        })
        .then((data) => {
            console.log(data)
          setBlogs(data);
        //   setLoading(false);
        })
        .catch((error) => {
        //   setError(error.message);
        //   setLoading(false);
        });

    }, [ ])

    return (
        <>
          <motion.div
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '-100vw' }}
    transition={{ duration: 0.5 }}
  >
    <h1>Blog list</h1>


    {
        blogs.map((blog)=>(
            <h1 key={blog.id}>{blog.id}. {blog.title}</h1>
        ))
    }

  </motion.div>



        </>
    )
}

export default Blog