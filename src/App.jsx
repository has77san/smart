import "./App.css";
import Home from "./components/Page/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employees from "./components/Page/Managers/employees";
import User from "./components/Page/users/User";
import ListUser from "./components/Page/list_users/ListUser";
import Cars from "./components/Page/carriers/Cars";
import Carrie from "./components/Page/carriers/Carrie";
import Drivers from "./components/Page/carriers/Drivers";
import Delegates from "./components/Page/Delegates/Delegates";
import Shipments from "./components/Page/Shipments/Shipments";
import CreateCustomReport from "./components/Page/Report/CustomReport/CreateCustomReport";
import ListReport from "./components/Page/Report/ListReport/ListReport";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/users" element={<User />} />
          <Route path="/list_users" element={<ListUser />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carrie" element={<Carrie />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/delegates" element={<Delegates />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/create_custom_report" element={<CreateCustomReport />} />
          <Route path="/list_custom_report" element={<ListReport />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
