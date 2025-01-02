import corddy from "../image/corddy1.png";

const imageStyle = {
  width: "211px",
  fontWeight: "bold",
};

const fontStyle = {
  fontWeight: "bold",
};

export function Avatar() {
  return (
    <aside>
      <img src={corddy} style={imageStyle} alt="Avatar"></img>
      <p style={fontStyle}>Lv.1 Baby Corddy Status</p>
    </aside>
  );
}
