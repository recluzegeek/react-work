import React, { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getAdvice();
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once when the component mounts

  return (
    <div>
      {advice && <h2>{advice}</h2>}
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read {count} {count === 1 ? "piece" : "pieces"} of advice today!
      </p>
    </div>
  );
}
