import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { MissionCard } from "./components/MissionCard";

const flex = {
  display: "flex",
};

function App() {
  return (
    <>
      <Header />
      <div style={flex}>
        <Aside />
        <MissionCard />
      </div>
    </>
  );
}

export default App;
