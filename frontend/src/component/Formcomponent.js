import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const Formcomponent = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    nickname: '',
    contact: '',
  });
  const { name, surname, nickname, contact } = data;
  const inputlogin = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };
  const handleData = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/additem', {
        name,
        surname,
        nickname,
        contact,
      })
      .then((response) => {
        if (response) {
          Swal.fire('Success', response.data.message, 'success');
        } else {
          Swal.fire('Error', 'error');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleData}>
        {JSON.stringify(data)}
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={inputlogin('name')} />
        </div>
        <div>
          <label>Surname</label>
          <input type="text" value={surname} onChange={inputlogin('surname')} />
        </div>
        <div>
          <label>Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={inputlogin('nickname')}
          />
        </div>
        <div>
          <label>Contact</label>
          <input type="text" value={contact} onChange={inputlogin('contact')} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
export default Formcomponent;
