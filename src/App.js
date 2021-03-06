import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import UserContext from "./context/userContext";
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Notices from './pages/Notices';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Login from './auth/Login';
import AdminRoute from './auth/AdminRoute';
import StudentRoute from './auth/StudentRoute';
import Adminpanel from './pages/Adminpanel';
import Studentpanel from './pages/Studentpanel';
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
import AddNotice from './components/AddNotice';
import AddFile from './components/AddFile';

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      let role = localStorage.getItem("role");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      if (role === null) {
        localStorage.setItem("role", "");
        role = "";
      }
      const tokenRes = await axios.post(
        "https://tutorial-website-backend.herokuapp.com/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );


      if (tokenRes.data) {
        const userId = tokenRes.data.userId;
        //console.log(userId);
        const userRes = await axios.get(`https://tutorial-website-backend.herokuapp.com/user/${userId}`);
        // , {
        //   headers: { "x-auth-token": token },
        // });
        //console.log(userRes.data.user.role);
        setUserData({
          token,
          role,
          user: userRes.data,
        });
        // : userRes.data.user.role
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/notices" component={Notices} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/login" component={Login} />
            <AdminRoute exact path="/admin" component={Adminpanel} isAuthenticated={userData.role} />
            <AdminRoute exact path="/admin/viewStudent/:id" component={ViewStudent} isAuthenticated={userData.role} />
            <AdminRoute exact path="/admin/editStudent/:id" component={EditStudent} isAuthenticated={userData.role} />
            <AdminRoute exact path="/admin/addStudent" component={AddStudent} isAuthenticated={userData.role} />
            <AdminRoute exact path="/admin/addNotice" component={AddNotice} isAuthenticated={userData.role} />
            <AdminRoute exact path="/admin/addFile" component={AddFile} isAuthenticated={userData.role} />
            <StudentRoute exact path="/student" component={Studentpanel} isAuthenticated={userData.role} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
