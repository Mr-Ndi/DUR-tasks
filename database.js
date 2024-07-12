import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

//  ----------------------------- Authors Endpoint ---------------------------------------------
export async function getAllAuthors() {
    try {
        const [ans] = await pool.query('SELECT author_id, first_name, last_name, date_of_birth FROM Authors');
        return ans;
    } catch (err) {
        console.error('Error fetching all authors:', err);
        throw err;
    }
}

export async function getSingleAuthor(id) {
    try {
        const [ans] = await pool.query('SELECT * FROM Authors WHERE author_id = ?', [id]);
        return ans[0];
    } catch (err) {
        console.error('Error fetching single author:', err);
        throw err;
    }
}

export async function createAuthor(id, firstName, lastName, dateOfBirth) {
    if (!id || !firstName || !lastName || !dateOfBirth) {
        throw new Error('Invalid input parameters');
    }

    try {
        const [ans] = await pool.query(
            'INSERT INTO Authors (author_id, first_name, last_name, date_of_birth) VALUES (?, ?, ?, ?)',
            [id, firstName, lastName, dateOfBirth]
        );
        return ans;
    } catch (err) {
        console.error('Error creating author:', err);
        throw err;
    }
}

export async function updateAuthor(id, firstName, lastName, dateOfBirth) {
    try {
        const [ans] = await pool.query(
            'UPDATE Authors SET first_name = ?, last_name = ?, date_of_birth = ? WHERE author_id = ?',
            [firstName, lastName, dateOfBirth, id]
        );
        return ans;
    } catch (err) {
        console.error('Error updating author:', err);
        throw err;
    }
}

export async function deleteAuthor(id) {
    try {
        const [ans] = await pool.query('DELETE FROM Authors WHERE author_id = ?', [id]);
        return ans;
    } catch (err) {
        console.error('Error deleting author:', err);
        throw err;
    }
}

//  ----------------------------- Books Endpoint ---------------------------------------------
export async function getAllBooks() {
    try {
        const [ans] = await pool.query('SELECT book_id, title, genre, published_date, author_id FROM Books');
        return ans;
    } catch (err) {
        console.error('Error fetching all books:', err);
        throw err;
    }
}

export async function getSingleBook(id) {
    try {
        const [ans] = await pool.query('SELECT * FROM Books WHERE book_id = ?', [id]);
        return ans[0];
    } catch (err) {
        console.error('Error fetching single book:', err);
        throw err;
    }
}

export async function createBook(id, title, genre, publishedDate, authorId) {
    if (!id || !title || !genre || !publishedDate || !authorId) {
        throw new Error('Invalid input parameters');
    }

    try {
        const [ans] = await pool.query(
            'INSERT INTO Books (book_id, title, genre, published_date, author_id) VALUES (?, ?, ?, ?, ?)',
            [id, title, genre, publishedDate, authorId]
        );
        return ans;
    } catch (err) {
        console.error('Error creating book:', err);
        throw err;
    }
}

export async function updateBook(id, title, genre, publishedDate, authorId) {
    try {
        const [ans] = await pool.query(
            'UPDATE Books SET title = ?, genre = ?, published_date = ?, author_id = ? WHERE book_id = ?',
            [title, genre, publishedDate, authorId, id]
        );
        return ans;
    } catch (err) {
        console.error('Error updating book:', err);
        throw err;
    }
}

export async function deleteBook(id) {
    try {
        const [ans] = await pool.query('DELETE FROM Books WHERE book_id = ?', [id]);
        return ans;
    } catch (err) {
        console.error('Error deleting book:', err);
        throw err;
    }
}

//  ----------------------------- Members Endpoint ---------------------------------------------
export async function getAllMembers() {
    try {
        const [ans] = await pool.query('SELECT member_id, first_name, last_name, membership_date FROM Members');
        return ans;
    } catch (err) {
        console.error('Error fetching all members:', err);
        throw err;
    }
}

export async function getSingleMember(id) {
    try {
        const [ans] = await pool.query('SELECT * FROM Members WHERE member_id = ?', [id]);
        return ans[0];
    } catch (err) {
        console.error('Error fetching single member:', err);
        throw err;
    }
}

export async function createMember(id, firstName, lastName, membershipDate) {
    if (!id || !firstName || !lastName || !membershipDate) {
        throw new Error('Invalid input parameters');
    }

    try {
        const [ans] = await pool.query(
            'INSERT INTO Members (member_id, first_name, last_name, membership_date) VALUES (?, ?, ?, ?)',
            [id, firstName, lastName, membershipDate]
        );
        return ans;
    } catch (err) {
        console.error('Error creating member:', err);
        throw err;
    }
}

export async function updateMember(id, firstName, lastName, membershipDate) {
    try {
        const [ans] = await pool.query(
            'UPDATE Members SET first_name = ?, last_name = ?, membership_date = ? WHERE member_id = ?',
            [firstName, lastName, membershipDate, id]
        );
        return ans;
    } catch (err) {
        console.error('Error updating member:', err);
        throw err;
    }
}

export async function deleteMember(id) {
    try {
        const [ans] = await pool.query('DELETE FROM Members WHERE member_id = ?', [id]);
        return ans;
    } catch (err) {
        console.error('Error deleting member:', err);
        throw err;
    }
}

//  ----------------------------- Loans Endpoint ---------------------------------------------
export async function getAllLoans() {
    try {
        const [ans] = await pool.query('SELECT loan_id, book_id, member_id, loan_date, return_date FROM Loans');
        return ans;
    } catch (err) {
        console.error('Error fetching all loans:', err);
        throw err;
    }
}

export async function getSingleLoan(id) {
    try {
        const [ans] = await pool.query('SELECT * FROM Loans WHERE loan_id = ?', [id]);
        return ans[0];
    } catch (err) {
        console.error('Error fetching single loan:', err);
        throw err;
    }
}

export async function createLoan(id, bookId, memberId, loanDate, returnDate) {
    if (!id || !bookId || !memberId || !loanDate || !returnDate) {
        throw new Error('Invalid input parameters');
    }

    try {
        const [ans] = await pool.query(
            'INSERT INTO Loans (loan_id, book_id, member_id, loan_date, return_date) VALUES (?, ?, ?, ?, ?)',
            [id, bookId, memberId, loanDate, returnDate]
        );
        return ans;
    } catch (err) {
        console.error('Error creating loan:', err);
        throw err;
    }
}

export async function updateLoan(id, bookId, memberId, loanDate, returnDate) {
    try {
        const [ans] = await pool.query(
            'UPDATE Loans SET book_id = ?, member_id = ?, loan_date = ?, return_date = ? WHERE loan_id = ?',
            [bookId, memberId, loanDate, returnDate, id]
        );
        return ans;
    } catch (err) {
        console.error('Error updating loan:', err);
        throw err;
    }
}

export async function deleteLoan(id) {
    try {
        const [ans] = await pool.query('DELETE FROM Loans WHERE loan_id = ?', [id]);
        return ans;
    } catch (err) {
        console.error('Error deleting loan:', err);
        throw err;
    }
}