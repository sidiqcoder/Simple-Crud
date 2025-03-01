import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddUser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            name,
            email,
            gender
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Nama"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value="Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
