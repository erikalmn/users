import "./styles/main.css";
import logoImage from "./assets/logo.png";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-4/5 h-1/5 flex justify-center items-center bg-zinc-900 rounded-t-lg">
        <img src={logoImage} alt="" className="w-40" />
      </div>
      <div className="w-4/5 h-3/5 bg-zinc-900 rounded-b-lg scrollbar-thin scrollbar-thumb-zinc-600 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <UsersList />
      </div>
    </div>
  )
}

export default App