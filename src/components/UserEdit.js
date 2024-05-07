import React from 'react';
import InputForm from './InputForm';

const UserEdit = ({ user, updateUser, testTypeDropdown }) => {
  return (
    <div>
      <h2>Edit User</h2>
      <InputForm initialData={user} updateUser={updateUser} testTypeDropdown={testTypeDropdown} />
    </div>
  );
};

export default UserEdit;