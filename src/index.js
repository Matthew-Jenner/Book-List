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

const names = ["john", "peter", "susan"];

const BookList = () => {
	return <section className="booklist">{books}</section>;
};
const Book = (props) => {
  const {img, title, author} = props
  console.log(props);
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
