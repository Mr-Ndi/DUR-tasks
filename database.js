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
export async function all_authors() {
    try {
        const [ans] = await pool.query('select first_name, last_name from Authors');
        return [ans];
    } catch (err) {
        console.error('Error fetching all authors:', err);
        throw err;
    }
}

export async function Single_author(id) {
    try {
        const [ans] = await pool.query('SELECT * FROM Authors WHERE author_id = ?', [id]);
        return [ans];
    } catch (err) {
        console.error('Error fetching single author:', err);
        throw err;
    }
}

export async function Create_author(id, fname, lname, dob) {
    if (!id || !fname || !lname || !dob) {
        throw new Error('Invalid input parameters');
    }

    try {
        const [ans] = await pool.query(
            'INSERT INTO Authors (author_id, first_name, last_name, date_of_birth) VALUES (?, ?, ?, ?)',
            [id, fname, lname, dob]
        );
        return [ans];
    } catch (err) {
        console.error('Error creating author:', err);
        throw err;
    }
}

export async function Update_author(id, fname, lname, dob) {
    try {
        const [ans] = await pool.query(
            'UPDATE Authors SET first_name = ?, last_name = ?, date_of_birth = ? WHERE author_id = ?',
            [fname, lname, dob, id]
        );
        return [ans];
    } catch (err) {
        console.error('Error updating author:', err);
        throw err;
    }
}

export async function Deleting_author(id) {
    try {
        const [ans] = await pool.query('DELETE FROM Authors WHERE author_id = ?', [id]);
        return [ans];
    } catch (err) {
        console.error('Error deleting author:', err);
        throw err;
    }
}