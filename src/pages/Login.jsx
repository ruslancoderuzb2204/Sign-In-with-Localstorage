import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/");
  };
  const userData = JSON.parse(localStorage.getItem("formData"));
  console.log(userData);
  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={email}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={password}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 shadow-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex gap-3 justify-center items-center mt-10">
            <p className="text-center text-sm text-gray-500">Not a member?</p>
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
