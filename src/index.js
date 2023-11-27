import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return <article>
<Image/>
<Title/>
<Author/>
  </article>
}

const Image = () => (
  <img src='https://images-eu.ssl-images-amazon.com/images/I/91X6Rzd2VvL._AC_UL900_SR900,600_.jpg' alt='Guinness World Records 2024'
  />
)
const Title = () => <h2>Guinness World Records 2024</h2>
const Author = () => <h2>Guinness World Records</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


