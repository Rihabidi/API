import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserTable from './UserTable';

function UserList() {
    const [user, setuser] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setuser(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div>
         {loading ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="details"
        />
      ) : (
        user.map((user) =><UserTable user={user}/> )
      )}

    </div>
  )
}

export default UserList