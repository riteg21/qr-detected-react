import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <Link to="/generate">Create your own QR</Link>
      <Link to="/scan">Scan QR</Link>
      <Link to="/generate-history">History of created QR's</Link>
      <Link to="/scan-history">History of scanned QR's</Link>
    </nav>
  );
};

export default Navigation;
