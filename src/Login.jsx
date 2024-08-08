import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CreateSlice";

function Login() {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.count.value);
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count !== 0) {
      dispatch(decrement());
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button onClick={() => handleDecrement()}>-</button>
        {count}
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Login;
