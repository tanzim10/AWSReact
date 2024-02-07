import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./component/post/index";
import PostDetails from "./component/post/view";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Service from "./component/service";
import AppLayout from "./layout/application";
import Users from "./component/users";
import UserDetails from "./component/users/view";
import AWS from "./component/aws_api/index";
import CreateAWS from "./component/aws_api/create";
import UpdateAWS from "./component/aws_api/update";
import DeleteItemAWS from "./component/aws_api/delete";
import FilterUser from "./component/users/filteruser";



function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />}/>
            <Route path ="/users" element={<Users />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route path="/filteruser" element={<FilterUser />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
            <Route path="aws" element={<AWS />} />
            <Route path ="create_aws" element={<CreateAWS />} />
            <Route path="update_aws/:EMPNO" element={<UpdateAWS />} />
            <Route path="delete_aws/:EMPNO" element={<DeleteItemAWS />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
