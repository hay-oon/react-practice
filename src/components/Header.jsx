import { LoginButton } from "../common/LoginButton";
import { NavButton } from "../common/NavButton";
import "../styles/Header.css";

export function Header() {
  return (
    <header className="headerContainer">
      <div className="headerContents">
        <NavButton>🎯 Today's mission</NavButton>
        <NavButton>💡 Topic ideas</NavButton>
        <NavButton>🌊 Cozy ocean</NavButton>
        <NavButton>📚 Concepts study</NavButton>
      </div>
      <div className="headerContents">
        <div>name</div>
        <LoginButton />
      </div>
    </header>
  );
}
