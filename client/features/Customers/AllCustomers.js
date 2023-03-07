import React from 'react'
import { NavLink } from 'react-router-dom'
import { deleteUser , selectUsers } from '../../Slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
    const isAdmin = useSelector((state) => state.auth.me.isAdmin)
    const dispatch = useDispatch();
    const users = useSelector(selectUsers)

    const handleDelete = (user) => {
        if(window.confirm("Are you sure you want to delete this User")){
            dispatch(deleteUser(user.id))
        }
    };
    return(
        <div>
            <div id='users'>
                {isAdmin ? users.map((user)=>(
                    <div className="user" key={`All Users ${user.id}`}>
                        <NavLink to={`/users/${users.id}`}>
                            <h3 id='userName'>
                                {user.firstName} {user.lastName}
                            </h3>
                            <p>Username: {user.username}</p>
                        </NavLink>
                        <button onClick={() => handleDelete(user)}>Delete</button>
                        </div>
                )):null}
            </div>
        </div>
    )
}

export default Users