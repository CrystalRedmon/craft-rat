import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <center>
        <h2>Welcome</h2>
      </center>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn"
          onClick={() => {
            history.push('/login');
          }}
        >
         Already a CraftRat? Log In
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
