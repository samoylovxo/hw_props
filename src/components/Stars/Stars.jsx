import Star from "../Star";
import styled from "./Stars.module.css";

const Stars = (props) => {
  const { count = 0 } = props;

  if (count < 1 || count > 5 || typeof count !== "number") return null;

  return (
    <ul className={styled.list}>
      {[...Array(count)].map((_, idx) => (
        <li key={idx}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
