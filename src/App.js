import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
	state = {
		books: [],
		bookShelf: [],
		newBook: {
			id: "",
			title: "",
			author: "",
			img: ""
		},
		displayStatus: true
	};
	captureId = () => {
		let lastID = this.props.books[this.props.books.length - 1].id;
		return lastID;
	};

	fetchData = () => {
		fetch("http://localhost:3005/books")
			.then(res => res.json())
			.then(bookData => this.setState({ books: bookData }))
			.catch(err => console.error(err));
	};
	addBookToShelf = currentBook => {
		console.log(this.state.bookShelf.includes(currentBook));
		if (this.state.bookShelf.includes(currentBook)) {
			this.setState({
				bookShelf: this.state.bookShelf
			});
		} else {
			this.setState({
				bookShelf: [...this.state.bookShelf, currentBook]
			});
		}
	};

	removeBookFromShelf = chosenBook => {
		console.log("Hello");
		const deletedBook = this.state.bookShelf.filter(
			book => book.id !== chosenBook.id
		);
		console.log(deletedBook);
		this.setState({
			bookShelf: [...this.state.bookShelf, deletedBook],
			displayStatus: !this.state.displayStatus
		});
	};

	handleChange = evt => {
		this.setState({
			newBook: { ...this.state.newBook, [evt.target.name]: evt.target.value }
		});
	};

	addNewBookToBookList = event => {
		event.preventDefault();
		this.setState({
			books: [...this.state.books, this.state.newBook]
		});
		fetch(`http://localhost:3005/books`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				title: this.state.newBook.title,
				author: this.state.newBook.author,
				img: this.state.newBook.img
			})
		})
			.then(res => res.json())
			.then(newBookData => console.log(newBookData))
			.catch(err => console.log(err));

		this.setState({
			newBook: {
				id: "",
				title: "",
				author: "",
				img: ""
			}
		});
	};
	render() {
		return (
			<div className="book-container">
				{this.fetchData()}
				<BookList
					books={this.state.books}
					onClick={this.addBookToShelf}
					handleChange={this.handleChange}
					newBook={this.state.newBook}
					handleSubmit={this.addNewBookToBookList}
					displayStatus={this.state.displayStatus}
				/>
				<Bookshelf
					bookShelf={this.state.bookShelf}
					onClick={this.removeBookFromShelf}
					displayStatus={this.state.displayStatus}
				/>
			</div>
		);
	}
}

export default App;
