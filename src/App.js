import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

import InputForm from './components/InputForm';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [testTypeName, setTestTypeName] = useState('');
  const [displayTestForm, setDisplayTestForm] = useState(false);
  const [displayTestTypeForm, setDisplayTestTypeForm] = useState(false);
  const [testTypeDropdown, setTestTypeDropdown] = useState([{id: 1, name: 'PHP'},{id: 2, name: 'Reactjs'}, {id:3, name: 'Nodejs'}])


  // Create a new user
  const addUser = (userData) => {
    userData['id'] = uuid();
      setUsers([...users, userData]);
  };

  // Update an existing user
  const updateUser = (userData) => {
    try {
      const updatedUser = userData;
      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      alert("User updated successfully");
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete a user
  const deleteUser = (userId) => {
    try {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      alert("User deleted successfully.");
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

// To edit User
  const onEditUser = (userData) => {
    setDisplayTestForm(false);
    setDisplayTestTypeForm(false);
    setSelectedUser(userData);
  }

  // To display test name form
  const showDisplayTestForm = () => {
    setDisplayTestForm(true);
    setDisplayTestTypeForm(false);
    setSelectedUser(null);
  }

  // To display test type form
  const showDisplayTestTypeForm = () => {
    setDisplayTestTypeForm(true);
    setDisplayTestForm(false);
    setSelectedUser(null);
  }

  // To add test type data
  const addTestTypeData = () => {
    if(testTypeName === "") {
      return alert("Test type can not be blank");
    }
    let isAvailable = testTypeDropdown.find(data => data.name === testTypeName);
    if(isAvailable) {
      return alert("This test type is already present.");
    } else {
      const dummyObj = {id: testTypeDropdown.length+1, name: testTypeName}
      setTestTypeDropdown([...testTypeDropdown, dummyObj]);
      alert("Test type added");
      setTestTypeName("");
    }
  }

  return ( 
    <div className='formContainer'>
      {/* Buttons for Adding new test name and test type */}
      <button className='buttonClass' onClick={() => showDisplayTestForm()}> Create New Test User</button>
      <button className='buttonClass' onClick={() => showDisplayTestTypeForm()}> Create New Test Type</button>
      {/* For adding new Test User */}
      {displayTestForm && <div><h2>Create New Test User</h2><InputForm addUser={addUser} testTypeDropdown={testTypeDropdown} updateUser={updateUser} initialData={{ id: '', testName: '', testType: '', emailId: '', mobileNumber: '', altMobileNumber: '', creationDate: '', lastUpdationDate: '' }} /></div>}
      {/* For adding new Test type */}
      {displayTestTypeForm && <div>
      <div className="container">
            <h2>Create Test Type Form</h2>
        <input type="text"  placeholder='Create New Test Type' value={testTypeName} onInput={e => setTestTypeName(e.target.value)} />
        <button className='buttonClass' onClick={() => addTestTypeData()}>Add</button>
      </div>
      </div>}
      {/* For editing test name */}
      {selectedUser ? (
        <div>
          <UserEdit user={selectedUser} updateUser={updateUser} testTypeDropdown={testTypeDropdown} />
        </div>
      ) : null}
      {/* For displaying Test name list */}
      <UserList users={users} editUser={onEditUser} deleteUser={deleteUser} />

    </div>
  );
}

export default App;