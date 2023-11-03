import axios from "axios";
import React from "react";
import Hmm from "./hmm";

const Register = (props, { name, email, phone }) => {
  return (
    <>
      {" "}
      <div
        style={{
          border: "2px solid black",
          padding: "0.4rem",
          width: "200px",
          borderRadius: "0.5rem",
          margin: "0 auto",
        }}
      >
        <h3 style={{ margin: 0, marginBottom: "0.85rem" }}>Register</h3>
        <form
          method="post"
          onSubmit={async (e) => {
            e.preventDefault();
            // await fetch("http://localhost:8080/post", fetchOptions);

            await axios
              .post("http://localhost:8080/post", {
                name: props.name,
                email: props.email,
                phone: props.phone,
              })
              .then(() => {
                props.setmainArray([
                  ...props.mainArray,
                  {
                    name: props.name,
                    email: props.email,
                    phone: props.phone,
                  },
                ]);
              })
              .catch(() => {
                alert("error occured");
              });
          }}
        >
          <input
            name="name"
            value={props.name}
            required
            onChange={(e) => {
              props.setname(e.target.value);
            }}
            placeholder="Enter name"
          />
          <input
            required
            name="phone"
            type="number"
            value={phone}
            onChange={(e) => {
              props.setphone(e.target.value);
            }}
            placeholder="Enter phone"
          />
          <input
            required
            name="email"
            type="email"
            value={props.email}
            onChange={(e) => {
              props.setemail(e.target.value);
            }}
            placeholder="Enter email"
          />
          <button
            style={{ marginBottom: "0.6rem" }}
            // onClick={}
          >
            Submit
          </button>
          {/* <input /> */}
        </form>
      </div>
      <Hmm
        setid={props.setid}
        mainArray={props.mainArray}
        setmainArray={props.setmainArray}
      />
    </>
  );
};

export default Register;
