import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
  const param = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const callApi = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/data/${param.id}`
        );
        console.log(data);
        setname(data.name);
        setemail(data.email);
        setphone(data.phone);
      } catch (error) {
        alert("Error occurred 1");
      }
    };
    callApi();
  }, []);
  const id = param.id;
  console.log(id);
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          padding: "0.4rem",
          width: "200px",
          borderRadius: "0.5rem",
          margin: "0 auto",
        }}
      >
        <h3 style={{ margin: 0, marginBottom: "0.85rem" }}>Update</h3>

        <form method="post">
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            name="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <input
            name="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <button
            style={{ marginBottom: "0.6rem" }}
            onClick={async (e) => {
              e.preventDefault();
              // await fetch("http://localhost:8080/post", fetchOptions);
              try {
                await axios.put(`http://localhost:8080/update/${id}`, {
                  name: name,
                  email: email,
                  phone: phone,
                });
                alert("Updated successfully");
                navigate("/");
              } catch (error) {
                alert("Error occurred while updating");
              }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
