import React from 'react';

export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <center> <h5>Signup</h5></center>
            <div className="form-popup">
                <p>Get weekly destination content right over to your inbox. Please confirm your e-mail address to receive updates.</p>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit">
                        Submit
                    </button>

                </div>

            </div>
            <p>By clicking on submit, you agree to our Privacy Policy and Terms of use</p>
        </form >
    );
};
export default Form;