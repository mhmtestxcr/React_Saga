import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";
import '../components/styles.css';


console.log("todo");

const UserListPage = () => {

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(Actions.userActions.getUsers());

  }, [dispatch]);

  return (
    <div className="container" >
      <ul className="user-ul">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;
