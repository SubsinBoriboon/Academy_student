import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Editcomponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    surname: '',
    nickname: '',
    contact: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/member/${id}`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const inputUpdate = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/api/update/${id}`, data)
      .then((response) => {
        console.log(response.data.message);
        navigate('/member');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        {JSON.stringify(data)}
        <div>
          <label>Name</label>
          <input type="text" value={data.name} onChange={inputUpdate('name')} />
        </div>
        <div>
          <label>Surname</label>
          <input
            type="text"
            value={data.surname}
            onChange={inputUpdate('surname')}
          />
        </div>
        <div>
          <label>Nickname</label>
          <input
            type="text"
            value={data.nickname}
            onChange={inputUpdate('nickname')}
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            value={data.contact}
            onChange={inputUpdate('contact')}
          />
        </div>
        <button type="submit">Update</button>
        <button onClick={() => navigate('/member')}>Back</button>
      </form>
    </div>
  );
};
export default Editcomponent;
