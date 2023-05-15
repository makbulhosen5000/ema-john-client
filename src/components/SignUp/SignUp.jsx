import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const SignUp = () => {
    const [error,setError] = useState('');
    const {createUser} = useContext(AuthContext);
 
    const handleRegisterForm = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      console.log(email, password, confirm);

      setError("");
      

      if (password !== confirm) {
        setError("Password Doesn't Match");
      } else if (password.length < 6) {
        setError("Password gives more than 6 Character ");
      }

      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    };

    return (
      <div className="flex justify-center items-center h-screen m-10">
        <div className="border border-gray-300 p-6">
          <h2 className="text-lg font-medium mb-4">Register</h2>
          <form onSubmit={handleRegisterForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                for="email"
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
                for="password"
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
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                for="password"
              >
                Confirm Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                id="confirm"
                type="password"
                name="confirm"
                required
              />
              <Link to="/login">
                Already Have Account?{" "}
                <span className=" link-hover">click here</span>{" "}
              </Link>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                type="submit"
              >
                Register
              </button>
            </div>
            <div>
              <p className="text-red-600">{error}</p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;