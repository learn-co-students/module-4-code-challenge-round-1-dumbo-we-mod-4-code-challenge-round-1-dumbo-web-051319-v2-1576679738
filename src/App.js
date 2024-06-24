import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
	state = {
		books: [],
		bookShelf: [],
		newBook: {
			title: "",
			author: "",
			img: ""
		}
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

	componentDidMount() {
		this.fetchData();
	}
	addBookToShelf = book => {
		if (!this.state.bookShelf.includes(book)) {
			this.setState({
				bookShelf: [...this.state.bookShelf, book]
			});
		}
	};

	removeFromBookShelf = book => {
		const filteredBook = this.state.bookShelf.filter(
			chosenBook => chosenBook.id !== book.id
		);
		this.setState({
			bookShelf: filteredBook
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
			.then(newBookData => this.fetchData())
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
				<BookList
					books={this.state.books}
					handleClick={this.addBookToShelf}
					handleChange={this.handleChange}
					newBook={this.state.newBook}
					handleSubmit={this.addNewBookToBookList}
					displayStatus={this.state.displayStatus}
				/>
				<Bookshelf
					bookShelf={this.state.bookShelf}
					onClick={this.removeFromBookShelf}
					displayStatus={this.state.displayStatus}
				/>
			</div>
		);
	}
}

export default App;
