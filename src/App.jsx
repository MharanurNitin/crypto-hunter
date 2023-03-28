import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

let App = {
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
};

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div style={App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
