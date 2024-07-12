import {
    getAllAuthors, getSingleAuthor, createAuthor, updateAuthor, deleteAuthor,
    getAllBooks, getSingleBook, createBook, updateBook, deleteBook,
    getAllMembers, getSingleMember, createMember, updateMember, deleteMember,
    getAllLoans, getSingleLoan, createLoan, updateLoan, deleteLoan
} from "./database.js";
import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.json());

// Authors Endpoints
app.get('/authors', async (req, res) => {
    try {
        const authors = await getAllAuthors();
        res.status(200).send(authors);
    } catch (err) {
        console.error('Error fetching authors:', err);
        res.status(500).send({ error: 'Error fetching authors' });
    }
});

app.get('/authors/:id', async (req, res) => {
    try {
        const author = await getSingleAuthor(req.params.id);
        res.status(200).send(author);
    } catch (err) {
        console.error('Error fetching author:', err);
        res.status(404).send({ error: 'Author not found' });
    }
});

app.post('/authors', async (req, res) => {
    const { id, firstName, lastName, dateOfBirth } = req.body;
    try {
        const result = await createAuthor(id, firstName, lastName, dateOfBirth);
        res.status(201).send(result);
    } catch (err) {
        console.error('Error creating author:', err);
        res.status(500).send({ error: 'Error creating author' });
    }
});

app.put('/add/authors/:id', async (req, res) => {
    const { id, firstName, lastName, dateOfBirth } = req.body;
    try {
        const result = await updateAuthor(req.params.id, firstName, lastName, dateOfBirth);
        res.status(200).send(result);
    } catch (err) {
        console.error('Error updating author:', err);
        res.status(500).send({ error: 'Error updating author' });
    }
});

app.delete('/remove/authors/:id', async (req, res) => {
    try {
        await deleteAuthor(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting author:', err);
        res.status(404).send({ error: 'Author not found' });
    }
});

// Books Endpoints
app.get('/books', async (req, res) => {
    try {
        const books = await getAllBooks();
        res.status(200).send(books);
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).send({ error: 'Error fetching books' });
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const book = await getSingleBook(req.params.id);
        res.status(200).send(book);
    } catch (err) {
        console.error('Error fetching book:', err);
        res.status(404).send({ error: 'Book not found' });
    }
});

app.post('/books', async (req, res) => {
    const { id, title, genre, publishedDate, authorId } = req.body;
    try {
        const result = await createBook(id, title, genre, publishedDate, authorId);
        res.status(201).send(result);
    } catch (err) {
        console.error('Error creating book:', err);
        res.status(500).send({ error: 'Error creating book' });
    }
});

app.put('/add/books/:id', async (req, res) => {
    const { id, title, genre, publishedDate, authorId } = req.body;
    try {
        const result = await updateBook(req.params.id, title, genre, publishedDate, authorId);
        res.status(200).send(result);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).send({ error: 'Error updating book' });
    }
});

app.delete('/remove/books/:id', async (req, res) => {
    try {
        await deleteBook(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(404).send({ error: 'Book not found' });
    }
});

// Members Endpoints
app.get('/members', async (req, res) => {
    try {
        const members = await getAllMembers();
        res.status(200).send(members);
    } catch (err) {
        console.error('Error fetching members:', err);
        res.status(500).send({ error: 'Error fetching members' });
    }
});

app.get('/members/:id', async (req, res) => {
    try {
        const member = await getSingleMember(req.params.id);
        res.status(200).send(member);
    } catch (err) {
        console.error('Error fetching member:', err);
        res.status(404).send({ error: 'Member not found' });
    }
});

app.post('/members', async (req, res) => {
    const { id, firstName, lastName, membershipDate } = req.body;
    try {
        const result = await createMember(id, firstName, lastName, membershipDate);
        res.status(201).send(result);
    } catch (err) {
        console.error('Error creating member:', err);
        res.status(500).send({ error: 'Error creating member' });
    }
});

app.put('/add/members/:id', async (req, res) => {
    const { id, firstName, lastName, membershipDate } = req.body;
    try {
        const result = await updateMember(req.params.id, firstName, lastName, membershipDate);
        res.status(200).send(result);
    } catch (err) {
        console.error('Error updating member:', err);
        res.status(500).send({ error: 'Error updating member' });
    }
});

app.delete('/remove/members/:id', async (req, res) => {
    try {
        await deleteMember(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting member:', err);
        res.status(404).send({ error: 'Member not found' });
    }
});

// Loans Endpoints
app.get('/loans', async (req, res) => {
    try {
        const loans = await getAllLoans();
        res.status(200).send(loans);
    } catch (err) {
        console.error('Error fetching loans:', err);
        res.status(500).send({ error: 'Error fetching loans' });
    }
});

app.get('/loans/:id', async (req, res) => {
    try {
        const loan = await getSingleLoan(req.params.id);
        res.status(200).send(loan);
    } catch (err) {
        console.error('Error fetching loan:', err);
        res.status(404).send({ error: 'Loan not found' });
    }
});

app.post('/loans', async (req, res) => {
    const { id, bookId, memberId, loanDate, returnDate } = req.body;
    try {
        const result = await createLoan(id, bookId, memberId, loanDate, returnDate);
        res.status(201).send(result);
    } catch (err) {
        console.error('Error creating loan:', err);
        res.status(500).send({ error: 'Error creating loan' });
    }
});

app.put('/add/loans/:id', async (req, res) => {
    const { id, bookId, memberId, loanDate, returnDate } = req.body;
    try {
        const result = await updateLoan(req.params.id, bookId, memberId, loanDate, returnDate);
        res.status(200).send(result);
    } catch (err) {
        console.error('Error updating loan:', err);
        res.status(500).send({ error: 'Error updating loan' });
    }
});

app.delete('/remove/loans/:id', async (req, res) => {
    try {
        await deleteLoan(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting loan:', err);
        res.status(404).send({ error: 'Loan not found' });
    }
});

app.listen(2000, () => {
    console.log('\n  This route is working on port 2000\n|-------------------------------------|');
});