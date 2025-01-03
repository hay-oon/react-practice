import { Aside } from "../common/Aside";
import { MissionCard } from "../common/MissionCard";

const mainContainer = {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1080px",
  margin: "0px auto",
};

export function Main() {
  return (
    <div style={mainContainer}>
      <Aside />
      <MissionCard />
    </div>
  );
}
