import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './home.css';
import Book from './Book/Book';
import './Book/Book.css';
const URL="http://localhost:5000/books";

const fetchHandler=async()=>{
  return await axios.get(URL).then((res)=>res.data)

}
const Home = () => {
    const [books,setbooks]=useState();
    useEffect(()=>{

       fetchHandler().then((data)=>{setbooks(data.books)})
    },[]);
    console.log(books);
    return (
        <div>
        <ul>
               {books && books.map((book,i)=>( 
                   <li className='book' key={i}>
                      <Book   book={book}></Book>


                   </li>

               ))}

        </ul>
            
        </div>
    );
};

export default Home;
