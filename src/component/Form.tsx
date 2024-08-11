import React, { useState } from "react";
import Style from "./form.module.scss";

interface IType {
  email: string;
}

const Form = () => {
  const [data, setData] = useState({
    email: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e: any) => {
    const newData: IType = { ...data, [e.target.id]: e.target.value };
    setData(newData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.email.trim() === "") {
      setError("Please fill Email");
      return;
    } else {
      setError("");
    }

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    };
    fetch("http://localhost:5000/post", options)
      .then((value) => value.json())
      .then((res) => {
        if (res.message) {
          setMessage(res.message);
          setData({ email: "" });
        } else {
          setMessage(res.message);
        }
      });
  };
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.text}>
          <h2>Sign up for our newsletter</h2>
          <p>
            Join 70,000+ builders and stay up to date with our latest updates
            and news.
          </p>
        </div>
        <div className={Style.formbox}>
          <form onSubmit={handleSubmit}>
            <div className={Style.form}>
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                value={data.email}
                onChange={handleChange}
              />
              <span className={Style.error} style={{ color: "#fff" }}>
                {error}
              </span>
              <span className={Style.message} style={{ color: "#fff" }}>
                {message}
              </span>
            </div>

            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
