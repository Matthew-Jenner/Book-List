import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
	{
		author: "Guinness World Records",
		title: "Guinness World Records 2024",
		img: "./images/book-1.jpg",
	},
	{
		author: "Nathan Anthony",
		title: "Bored of Lunch: The Healthy Air Fryer Book",
		img: "https://m.media-amazon.com/images/I/81anCS3GCbL._SY522_.jpg",
	},
];

const BookList = () => {
	return <section className="booklist">
    {books.map((book) => {
      const {img, title, author} = book
      return (
        <Book img ={img} title= {title} author= {author} />
      )
    })}
  </section>;
};
const Book = (props) => {
  const {img, title, author} = props
	return (
		<article className="book">
			<img
				src={img}
				alt={title}
			/>
			<h2>{title}</h2>
			<h4>{author} </h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
