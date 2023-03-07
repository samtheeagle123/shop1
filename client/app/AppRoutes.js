import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import ProductList from "./ProductList";
<<<<<<< HEAD
import Contact from "../features/Contact/contact"
=======
import { fetchUsersAsync } from "../Slices/userSlice";
import Users from "../features/Customers/AllCustomers";
import User from "../features/Customers/SingleCustomer";
>>>>>>> main

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
    dispatch(fetchUsersAsync)
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
<<<<<<< HEAD
          <Route path="/contact" element={<Contact />} />
=======
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User userId={userId} />} />
>>>>>>> main
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products" element={<ProductList />} />
<<<<<<< HEAD
          <Route path="/about" />
          <Route path="/contact" />
          <Route path="/cart" />
=======
       
         
>>>>>>> main
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
