import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button';

export default function SignIn() {
  return (
    <div className="Landing">
      <h1>Newzies</h1>
      <a href="/auth/google">
        <GoogleButton />
      </a>
    </div>
  );
}
