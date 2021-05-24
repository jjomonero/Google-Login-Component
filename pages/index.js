
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export class App extends Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <GoogleLogin
            // that ID you can seek in google cloud in access key oAuth, necessary  make login 
            //for generate a only token... oAuth is an method validation as the JWT ( Javascript Web Token ) 
            //and being thus much used for Social Login, as this case for example.
            clientId=" "
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          >

          </GoogleLogin>
        </main>
      </div>
    )
  }
}

export default App
