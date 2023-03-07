import React , {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { deleteUser , selectUsers, fetchUsersAsync } from '../../Slices/userSlice'
import { useDispatch, useSelector} from 'react-redux'

const Users = () => {
    const isAdmin = useSelector((state) => state.auth.me.isAdmin);
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
   
    useEffect(() => {
        dispatch(fetchUsersAsync());
      }, [dispatch]);
  
    const handleDelete = (user) => {
      if (window.confirm("Are you sure you want to delete this User")) {
        dispatch(deleteUser(user.id));
      }
    };
  
    return (
        <div>
          <div id="user-header">Active Users</div>
          <div id="users">
          {isAdmin ?
            users.map((user) => {
            return (
            <div className="user" key={`All Users ${user.id}`}>
            <NavLink to={`/users/${user.id}`}>
            <h1>{user.username}</h1>
              <h3 id="userName">
                {user.firstName} {user.lastName}
              </h3>   
            </NavLink>
         <button onClick={() => handleDelete(user)}>Delete</button>
         </div>
         );
        }):'Was not meant for you'}
          </div>
        </div>
      );
    };

export default Users