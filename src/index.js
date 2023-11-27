import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
};
const Book = () => {
  const author = "Guinness World Records";
	const title = "Guinness World Records 2024";
	return (
		<article className="book">
			<img
				src="./images/book-1.jpg"
				alt="Guinness World Records 2024"
			/>
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
