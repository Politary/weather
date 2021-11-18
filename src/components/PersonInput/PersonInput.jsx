import React, { useState } from 'react';
import axios from 'axios';

export const PersonInput = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: name,
        };
        axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Person Name:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <button type="submit">Add</button>
        </form>
    );
};
