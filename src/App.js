// // import React, { useState } from 'react';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import './App.css';
// import Homepage from './Homepage';

// function App() {
//   const [username, setUsername] = useState('kijjo');
//   const [password, setPassword] = useState('COSMAS62');

//   const handleLogin = () => {
//     // You can add your login validation logic here
//     // For simplicity, let's just check if both fields are filled
//     if (username && password) {
//       alert('Login successful!');
//     } else {
//       alert('Please enter both username and password.');
//     }
//     // window.location.href = '/home';
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           {}
//           <Route path="/login">
//             <div className="login-container">
//               <h2>Login</h2>
//               <form>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <button type="button" onClick={handleLogin}>
//                   Login
//                 </button>
//               </form>
//             </div>
//           </Route>
//           <Route path="/home">
//             <HomePage />
//           </Route>
//         </Switch>
      
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js

import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast} from 'react-taostify';
import 'react-toastiy/dist/ReactToastify.css';
import './App.css';
import Homepage from './Homepage';
import NotificationsPage from './notifications';

function App() {
  const [notifications, setNotifications] = useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    // Assuming successful login, redirect to home page
    // You may want to use a state management solution for authentication status
    setNotifications([...notifications, {message: 'Welcome! You are logged in.'}]);
    window.location.href = '/home';
  };

  const handleGoogleLogin = async () => {
    // Your Google login logic here
    // Assuming successful login, redirect to home page
    // You may want to use a state management solution for authentication status
    window.location.href = '/home';
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Login Route */}
          <Route path="/login">
            <div className="login-container">
              <h2>Login</h2>
              <form>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
                <button type="button" onClick={handleGoogleLogin}>
                  Login with Google
                </button>
              </form>
            </div>
          </Route>

          {/* Home Route */}
          <Route path="/home">
            <Homepage />
          </Route>

          {/* Notification route */}
          <Route path="/notifications">
            <NotificationsPage />
          </Route>
        </Switch>

        <ToastContainer autoClose={3000} position="bottom-right" />

        <link to="notifications">View notifications</link>
      </div>
    </Router>
  );
}

export default App;
