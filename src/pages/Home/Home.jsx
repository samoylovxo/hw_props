import { Link } from "react-router-dom";
import styled from "./Home.module.css";

const PageHome = () => {
  return (
    <div className={styled.links}>
      <Link className={styled.link} to="/films">
        HW Films
      </Link>
      <Link className={styled.link} to="/listing">
        HW Listing
      </Link>
    </div>
  );
};

export default PageHome;
