import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
	return (
		<div>
			<h1>Book Shelf</h1>
			<ul>
				{props.bookShelf.map(book => (
					<li key={book.id} style={{ listStyle: "none" }}>
						<Book
							book={book}
							onClick={props.onClick}
							displayStatus={props.displayStatus}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Bookshelf;
