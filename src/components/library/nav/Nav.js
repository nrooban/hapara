import { Link } from "react-router-dom";
import css from "./Nav.module.css";

function Nav({ data }) {
  return (
    <nav className={css.nav}>
      <ul className={css.links}>
        {data?.map((item, key) => (
          <Link key={key} to={item.link}>
            {item.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
