import "./App.scss";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { NewTransaction } from "./components/NewTransaction";
import { History } from "./components/History";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <div>
        <Balance />
        <NewTransaction />
      </div>
      <History />
      </div>
      
    </div>
  );
}

export default App;
