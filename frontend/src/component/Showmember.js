import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import './Showmember.css';
import { Link } from 'react-router-dom';

const Showmember = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get('http://localhost:8000/api/member')
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Do you want delete?',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
      }
    });
  };
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((response) => {
        Swal.fire({
          title: 'Delete Success!',
          icon: 'success',
        });
        fetchData();
      })
      .catch((err) => {
        Swal.fire({
          title: 'Delete Fail!',
          icon: 'error',
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>Navbar</header>
      <section>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Nickname</th>
                <th>Contact</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.nickname}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to={`/edit/${item.id}`}>
                        <i className="fa-solid fa-user-pen"></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => confirmDelete(item.id)}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="create">
          <a href="/create" className="create">
            +create
          </a>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};
export default Showmember;
