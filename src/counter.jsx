import React, { useState } from "react";

function counter() {
  const { count, setcount } = useState(0);
  const { showcount, setshowcount } = useState(false);

  return (
    <div>
      <button onClick={() => setshowcount(!showcount)}>
        {" "}
        {showcount ? "Hide show count" : "show count "}
      </button>
      {showcount ? (
        <>
          <h2> counter show open </h2>
          <h3>counter is - {count} </h3>
          <button onClick={() => setcount(count - 1)}>Decrement</button>
        </>
      ) : null}
    </div>
  );
}
export default counter;
