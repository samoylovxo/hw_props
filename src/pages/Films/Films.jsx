import { useState } from "react";
import Stars from "../../components/Stars/Stars";

const PageFilms = () => {
  const [count, setCount] = useState(5);

  return (
    <div>
      <Stars count={count} />

      <button onClick={() => setCount(1)}>1</button>
      <button onClick={() => setCount(2)}>2</button>
      <button onClick={() => setCount(3)}>3</button>
      <button onClick={() => setCount(4)}>4</button>
      <button onClick={() => setCount(5)}>5</button>
    </div>
  );
};

export default PageFilms;
