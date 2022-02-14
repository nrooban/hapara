import { useEffect, useState } from "react";
import Dropdown from "../library/dropdown/Dropdown";
import Nav from "../library/nav/Nav";
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";

function Header({ logo }) {
  const [currrentUserRole, setCurrrentUserRole] = useState(data.userRole);
  const [userLinks, setUserLinks] = useState();
  const [appLinks, setAppLinks] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    generateUserBasedData(currrentUserRole.role);
  }, []);

  function handleClick(e) {
    if (e.role) {
      setCurrrentUserRole({
        role: e.role,
        email: e.label,
      });

      generateUserBasedData(e.role);
      navigate("/classes");
      return;
    }
    navigate(e.link);
  }

  function generateUserBasedData(role) {
    setUserLinks(data.userLinks.filter((item) => item.role !== role));
    setAppLinks(data.Applinks.filter((item) => item.role === role));
  }

  return (
    <>
      {userLinks && (
        <div className="App-header">
          <div className="Left-panel">
            <img className="Logo" data-testid="logo" src={logo} />
            <Nav data={appLinks} data-testid="nav" />
          </div>
          <Dropdown
            data-testid="dropdown"
            label={currrentUserRole.email}
            data={userLinks}
            onItemClick={handleClick}
          />
        </div>
      )}
    </>
  );
}

export default Header;
