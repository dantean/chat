import { ChatEngine } from "react-chat-engine";
import './App.css';

function App() {
  return (
    <div className="App">
     <ChatEngine
     height="100vh"
     projectID="db057f23-dcaf-4482-95d9-5392b6a1d9ec"
     userName="user1"
     userSecret="123"
     />
    </div>
  );
}

export default App;
