import React from "react";

const Book = props => {
	return (
		<div>
			<div>
				<h2>{props.book.title}</h2>
				<img
					src={props.book.img}
					alt={props.book.title}
					onClick={e => props.onClick(props.book)}
				/>
			</div>
		</div>
	);
};

export default Book;
