import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { MissionCard } from "./components/MissionCard";
import { Footer } from "./components/Footer";
const mainContainer = {
  display: "flex",
  justifyContent: "space-between",
  width: "1080px",
  margin: "0px auto",
};

function App() {
  return (
    <>
      <Header />
      <div style={mainContainer}>
        <Aside />
        <MissionCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
