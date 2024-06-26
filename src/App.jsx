import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { adduser, deleteuser, updateusername } from "./Features/user";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [userId, setUserid] = useState("");
  const [newuserId, setnewUserid] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const handleAddUser = () => {
    if (!name || !userId) {
      alert("Please enter a name and a username.");
      return;
    }
    dispatch(
      adduser({
        id: userList.length ? userList[userList.length - 1].id + 1 : 1,
        name: name,
        userId: userId,
      })
    );
    setName("");
    setUserid("");
  };

  const handleUpdateUser = (id) => {
    if (!newuserId) {
      alert("Please enter a new username.");
      return;
    }
    dispatch(updateusername({ id: id, userId: newuserId }));
    setnewUserid("");
  };

  const handleDeleteUser = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteuser({ id: id }));
    }
  };

  return (
    <div className="container-lg">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-8">
                <h2>
                  Redux - <b>CRUD</b> - React
                </h2>
              </div>
              <div className="container">
                <div className="group">
                  <input
                    placeholder="Enter Name"
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="group">
                  <input
                    placeholder="Enter UserName"
                    type="text"
                    className="input"
                    value={userId}
                    onChange={(e) => {
                      setUserid(e.target.value);
                    }}
                  />
                </div>
                <button className="button" onClick={handleAddUser}>
                  Add
                </button>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Update Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.userId}</td>
                    <td>
                      <div class="group1">
                        <input
                          className="input"
                          type="text"
                          placeholder="Update UserName"
                          onChange={(e) => {
                            setnewUserid(e.target.value);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleUpdateUser(user.id)}
                      >
                        <i className="material-icons">&#xE254;</i>
                      </button>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <button
                        className="delete"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <i className="material-icons">&#xE872;</i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
