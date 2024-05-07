import React, { useState } from 'react';

const InputForm = ({ addUser, updateUser, initialData, testTypeDropdown }) => {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.id) {
            formData['lastUpdationDate'] = new Date().toLocaleString();
            updateUser(formData);
        } else {
            formData['creationDate'] = new Date().toLocaleString();
            addUser(formData);
        }
        setFormData({ id: '', testName: '', testType: '', emailId: '', mobileNumber: '', altMobileNumber: '', creationDate: '', lastUpdationDate: '' });
    };

    return (<>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label for="fname"> Test Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="testName" value={formData.testName} onChange={handleInputChange} name="testName" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="testType">Test Type</label>
                    </div>
                    <div className="col-75">
                        <select id="testType" value={formData.testType} name="testType" onChange={handleInputChange}>
                            <option disabled value=""></option>
                            {testTypeDropdown.map(test => <option value={test['name']}>{test['name']}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="test_email_id">Tester Email Id</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="emailId" name="emailId" value={formData.emailId} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="mobileNumber">Tester Mobile Number</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="altMobileNumber">Alternative Mobile Number</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="altMobileNumber" name="altMobileNumber" value={formData.altMobileNumber} onChange={handleInputChange} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <button className='buttonClass' type="submit">Submit</button>
                </div>
            </form>
        </div></>
    );
};

export default InputForm;