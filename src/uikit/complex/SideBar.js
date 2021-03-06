import "./css/sidebar.css";
import Avatar from "../simple/Avatar";
import Typography from "../simple/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "../../icons/HomeIcon";
import PeopleIcon from "../../icons/PeoplIcon";
import ArrowIcon from "../../icons/ArrowIcon";
import { useEffect, useState } from "react";

const SideButtons = ({ svg, title, src, onClick }) => {
  return (
    <>
      {src && (
        <NavLink to={src} className="nav-link">
          <div className="nav-link__icon-wrapper">{svg && svg}</div>
          <div className="nav-link__title-wrapper">{title}</div>
        </NavLink>
      )}
      {!src && (
        <button onClick={onClick} className="nav-link">
          <div className="nav-link__icon-wrapper">{svg}</div>
          <div className="nav-link__title-wrapper">{title}</div>
        </button>
      )}
    </>
  );
};

const SideDropDown = ({ svg, title, children }) => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleDropDown = () => {
    setDropDown((prevValue) => !prevValue);
    if (!dropDown) {
      navigate(children[0].props.src);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="drop-down-wrapper">
      <button className="nav-link" onClick={handleDropDown}>
        <div className="nav-link__icon-wrapper">{svg}</div>
        <div className="nav-link__title-wrapper">{title}</div>
        <div
          className="nav-link__arrow-wrapper"
          style={{ transform: dropDown ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ArrowIcon />
        </div>
      </button>
      {dropDown && (
        <div className="drop-down-wrapper__links-wrapper">{children}</div>
      )}
    </div>
  );
};

const SideBar = ({ name, role, picture }) => {
  return (
    <div className="side-bar-wrapper">
      <div className="side-bar">
        <div className="top-wrapper">
          <Avatar name={name} picture={picture} size="82px" />
          <Typography varient="regular">{name}</Typography>
          <Typography varient="smaller" weight="bold">
            {role}
          </Typography>
        </div>
        <div className="links-wrapper">
          <SideButtons svg={<HomeIcon />} title="????????????????" src="/" />
          <SideDropDown svg={<PeopleIcon />} title="??????????????">
            <SideButtons title="???????? ??????????????" src="customers/all" />
            <SideButtons title="?????????????? ??????????" src="customers/new" />
            <SideButtons title="????????????" src="customers/my" />
            <SideButtons title="?????????? ???????? ????????" src="customers/add" />
            <SideButtons title="?????????????? ??????????" src="customers/import" />
            <SideButtons title="?????????????? ??????????????????" src="customers/late" />
            <SideButtons title="?????????????? ????????????????" src="customers/deleted" />
          </SideDropDown>
          <SideButtons
            svg={<PeopleIcon />}
            title="?????????? ?????????? ????????"
            src="/add-project"
          />
          <SideButtons
            svg={<PeopleIcon />}
            title="???????????? ???????? ????????????????"
            src="/sales"
          />
          <SideButtons svg={<PeopleIcon />} title="????????????????" src="/employees" />
          <SideButtons svg={<PeopleIcon />} title="?????????? ????????????" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
