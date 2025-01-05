
import './App.css';
import { BrowserRouter as Router, Route,Link,Routes } from "react-router-dom";

import AddAccount from "./components/AddAccount";
import SyncStatus from "./components/SyncStatus";
import EmailList from "./components/EmailList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Email core system</h1>
        <nav>
          
            <li>
              <Link to="/">Add Account</Link>
            </li>
            <li>
              <Link to="/sync-status">Sync Status</Link>
            </li>
            <li>
              <Link to="/emails">Email List</Link>
            </li>
          
        </nav>

  
        <Routes>
          <Route path="/" element={<AddAccount />} />
          <Route path="/sync-status" element={<SyncStatus />} />
          <Route path="/emails" element={<EmailList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
