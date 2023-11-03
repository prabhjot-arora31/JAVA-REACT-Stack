import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Hmm(props) {
  useEffect(() => {
    const abc = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/data");
        props.setmainArray(data);
        return () => {};
      } catch (error) {
        alert("Error while fetching data");
      }
    };
    abc();
  }, []);
  return (
    <div>
      {props.mainArray.length > 0 ? (
        <table border={"black"}>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th className="email">Email</th>
            <th>Operations</th>
          </tr>
          {props.mainArray &&
            props.mainArray.map((ele) => {
              return (
                <tr>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td className="email">{ele.phone}</td>
                  <td>
                    <Link
                      to={`update/${ele.id}`}
                      style={{ color: "black", marginRight: "0.4rem" }}
                    >
                      <i class="fa-solid fa-pen"></i>
                    </Link>
                    <Link style={{ color: "black" }} to={`delete/${ele.id}`}>
                      <i class="fa-solid fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </table>
      ) : (
        <p>There's nothing here.....</p>
      )}
    </div>
  );
}
