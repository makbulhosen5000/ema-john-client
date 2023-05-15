import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);
    const location  = useLocation();
    console.log(location);
   
    const handleLoginForm = (e) => {
      e.preventDefault();

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
    };

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate('/')
      })
      .then((error) => {
        console.log(error);
      });


    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border border-gray-300 p-6">
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <form onSubmit={handleLoginForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="email"
                type="text"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="password"
                type="password"
                name="password"
                required
              />
              <Link to="/sign-up">
                Don't Have Account?{" "}
                <span className=" link-hover">sign-up here</span>{" "}
              </Link>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;