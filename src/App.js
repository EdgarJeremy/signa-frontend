import React from 'react';
import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';
import LoadingScreen from 'react-loading-screen';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const socket = io(process.env.REACT_APP_API_URL);
const client = feathers();

client.configure(socketio(socket));
client.configure(authentication({
  storage: localStorage
}));

class App extends React.Component {
  state = {
    ready: false,
    error: false,
    user: null
  }
  componentDidMount() {
    socket.on('connect', async () => {
      let user = null;
      try {
        user = await client.reAuthenticate();
      } catch (e) { };
      this.setState({ ready: true, error: false, user });
    });
    socket.on('connect_error', (e) => {
      this.setState({ ready: false, error: true });
    });
  }
  async login(email, password) {
    try {
      const user = await client.authenticate({
        email, password, strategy: 'local'
      });
      this.setState({ user });
    } catch (e) {
      alert(e.message);
    }
  }
  render() {
    const { ready, error, user } = this.state;
    return ready ? (
      !user ? <Login client={client} onLogin={this.login.bind(this)} /> : <Dashboard client={client} />
    ) : (
      <LoadingScreen
        loading={true}
        bgColor='#f1f1f1'
        spinnerColor='#007bff'
        text={error ? 'Gagal menghubungi server, mencoba lagi..' : 'Menghubungi server...'}
      />
    )
  }
}

export default App;
