import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../../Slices/singleUserSlice';

const EditUserForm = ({user, onSaveChanges}) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username
    });

    const handleChange = (event) => {
        setForm({...form,[event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editUser({ id: user.id, ...form }));
        onSaveChanges({ ...form, id: user.id });
    }
    return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
          <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
          <button type="submit">Save Changes</button>
        </form>
      );
}

export default EditUserForm