import "./App.css";
import UserCard from "./components/userCard";
import Mockdata from "./MOCKDATA.json"

function App() {
  return (
    <div className="App">
      {
        Mockdata.map((val) => (
          <UserCard key={val.id} firstName={val.first_name} lastName={val.last_name}/>
        ))
      }
      <UserCard firstName="John" lastName="Doe"/>
    </div>
  );
}

export default App;
