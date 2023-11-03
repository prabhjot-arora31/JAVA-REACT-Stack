import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
  const param = useParams();
  const id = param.id;
  const navigate = useNavigate();
  console.log(id);
  return (
    <>
      <h3>Are you sure you want to delete this user?</h3>
      <button
        onClick={() => {
          async function deleteUser() {
            await axios
              .delete(`http://localhost:8080/delete/${id}`)
              .then(() => {
                navigate("/");
              })
              .catch(() => {
                alert("Error!");
              });
          }
          deleteUser();
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        No.
      </button>
    </>
  );
};

export default Delete;
