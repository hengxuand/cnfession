import "./style.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
    </div>
  );
}
