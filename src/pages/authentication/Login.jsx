import { useState, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validLoginFormChecker } from "./utils";
import { loginHelper } from "../../features/auth/helpers";
import { Loading } from "../../components";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const {
    auth: { error, isLoading },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const changeHandler = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    setFormErrors(() => validLoginFormChecker(userInput));
  }, [userInput, submitted]);

  const formSubmitHandler = e => {
    e.preventDefault();

    const { username, password } = userInput;

    setSubmitted(true);
    if (!(Object.values(formErrors).length > 0)) {
      dispatch(loginHelper({ username, password }));
      setFormErrors({});
    }
  };

  const testUser = { username: "aniketlawaniya", password: "password@123" };

  const loginWithTestCredentials = e => {
    e.preventDefault();
    setUserInput(testUser);
    dispatch(loginHelper(testUser));
  };

  return (
    <div className="text-text-color bg-background-color dark:text-text-color-dm dark:bg-background-color-dm min-h-screen flex justify-center items-center">
      <main className="w-4/5 flex gap-8 justify-center rounded-md xl:shadow-lg shadow-secondary-color-dm-100">
        <div className="flex-1 hidden xl:flex justify-center flex-col gap-2 p-2">
          <div>
            <p className="text-9xl text-center">Social Sphere</p>
            <small className="text-xl text-primary-color-100">Connect, Create, Curate</small>
          </div>
        </div>
        <section className="flex-1 flex items-center">
          <form
            onSubmit={e => e.preventDefault()}
            className="w-full md:w-1/2 xl:w-3/5 m-auto bg-secondary-color-50 dark:bg-secondary-color-dm-50 p-4 rounded-md shadow-md shadow-secondary-color-100 dark:shadow-secondary-color-dm-100"
          >
            
            {error && <p className="text-red-color text-center">{error}</p>}
            <div className="relative mb-4">
              <input
                type="text"
                id="username"
                placeholder="username"
                name="username"
                onChange={changeHandler}
                value={userInput.username}
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              />
              {submitted && (
                <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                  {formErrors.username}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={userInput.password}
                placeholder="password"
                onChange={changeHandler}
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              />
              <button
                className="absolute top-2 right-4 text-2xl text-text-color"
                title={isPasswordVisible ? "Hide Password" : "Show Password"}
                onClick={() => setIsPasswordVisible(prevState => !prevState)}
              >
                {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
              {submitted && (
                <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                  {formErrors.password}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <button
                disabled={isLoading}
                onClick={formSubmitHandler}
                title="Login"
                className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 text-center border-0 py-2 mt-4 px-8 focus:outline-none rounded"
              >
                {isLoading ? (
                  <span className="flex justify-center">
                    <Loading />
                  </span>
                ) : (
                  "Login"
                )}
              </button>
              <button
                onClick={loginWithTestCredentials}
                title="Login as guest"
                className="bg-background-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-primary-color-100 hover:text-secondary-color-100 border-2 py-2 px-8 focus:outline-none rounded"
              >
                Guest Login
              </button>
            </div>
            <div>
              <Link to='/signup' >
                <button
                title="Signup"
                className="bg-green-color w-[70%]  ml-14 active:bg-primary-color-100 text-secondary-color-100 text-center border-0 py-2 mt-4 px-8 focus:outline-none rounded"
              >Create a new Account
              </button></Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export { Login };
