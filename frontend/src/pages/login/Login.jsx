import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../features/auth/authsSlice";
import { setCredentials } from "../../features/users/userSlice";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="bg-Hero h-screen  w-screen flex items-center justify-center">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-white">
        <h3 className="text-headingColor text-[16px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor ">Welcome</span> Back ✔
        </h3>
        <form className="flex flex-col gap-5 p-4" onSubmit={submitHandler}>
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Email
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Password
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded w-full py-1 px-2 font-normal"
            ></input>
          </label>
          <div className="text-[12px] ">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[#003580d5] text-white p-2 font-bold hover:bg-[#003580] text-lg "
            >
              Login
            </button>
          </div>
        </form>
        {isLoading && <Loader />}
        <div>
          New Customer?{" "}
          <Link className="underline" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
