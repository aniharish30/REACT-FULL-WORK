import React, { useMemo, useState } from "react";

const Expensive = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const ExpensiveCalculation = useMemo(() => {
    console.log("Running...");

    let total = 0;

    for (let i = 0; i < 200000; i++) {
      total += count;
    }

    return total;
  }, [count]);

  //   const ExpensiveCalculation = () => {
  //     console.log("Running...");

  //     let total = 0;

  //     for (let i = 0; i < 200000; i++) {
  //       total += count;
  //     }

  //     return total;
  //   };

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Change the Count</button>

        <div>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setText(e.target.value)}
            className="py-2 px-5 rounded-lg border"
          />
        </div>

        <h1>Heavy Result: ${ExpensiveCalculation}</h1>
      </div>
    </div>
  );
};

export default Expensive;
