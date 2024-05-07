import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '.././App.css';

const UserList = ({ users, editUser, deleteUser }) => {
    return (
       users.length > 0 && <div className='tableContainer'>
            <h2>User List</h2> 
            <table>
                <tr>
                    <th>Test Name</th>
                    <th>Test Type</th>
                    <th>Tester Email Id</th>
                    <th>Tester Mobile Number</th>
                    <th>Alternative Mobile Number</th>
                    <th>Creation Date</th>
                    <th>Last Updation Date</th>
                    <th></th>
                    <th></th>
                </tr>
                {users.map((user) => (
                    <>
                        <tr className={user.testType==='PHP' ? 'greenColor' : user.testType==='Nodejs' ? 'yellowColor': 'orangeColor' }>
                            <td>{user.testName}</td>
                            <td>{user.testType}</td>
                            <td>{user.emailId}</td>
                            <td>{user.mobileNumber}</td>
                            <td>{user.altMobileNumber}</td>
                            <td>{user.creationDate}</td>
                            <td>{user.lastUpdationDate}</td>
                            <td><span onClick={() => editUser(user)}><i className="fa fa-edit fa-edit"></i></span></td>
                            <td><span onClick={() => deleteUser(user.id)}><i className="fa fa-trash fa-trash"></i></span></td>
                        </tr></>
                ))}
            </table>
        </div>
    );
};

export default UserList;