import { LoginButton } from "../common/LoginButton";
import { NavButton } from "../common/NavButton";
import "./Header.css";

const flex = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
};

export function Header() {
  return (
    <header className="header">
      <div style={flex}>
        <NavButton>🎯 Today's mission</NavButton>
        <NavButton>💡 Topic ideas</NavButton>
        <NavButton>🌊 Cozy ocean</NavButton>
        <NavButton>📚 Concepts study</NavButton>
      </div>
      <div style={flex}>
        <div>name</div>
        <LoginButton />
      </div>
    </header>
  );
}
