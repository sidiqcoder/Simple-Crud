import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const AddEdit = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("male");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getUserById();
  }, [])

  const editUser = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/users/${id}`, {
            name,
            email,
            gender
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
  }

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setname(response.data.name);
    setemail(response.data.email);
    setgender(response.data.gender);
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={editUser}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
