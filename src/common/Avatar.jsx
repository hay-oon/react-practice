import corddy from "../image/corddy1.png";
import "./Avatar.css";

const imageStyle = {
  width: "211px",
};

export function Avatar() {
  return (
    <aside className="avatar">
      <img src={corddy} style={imageStyle} alt="Avatar"></img>
      <p>Lv.1 Baby Corddy Status</p>
    </aside>
  );
}
