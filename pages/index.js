import { useState } from "react";

export default function Home() {
  const [pin, setPin] = useState("");

  return (
    <main style={{ padding: 20 }}>
      <h1>India PIN Code Finder</h1>

      <input
        type="number"
        placeholder="Enter PIN Code"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />

      <br /><br />

      <a href={`/pincode/${pin}`}>
        <button>Search</button>
      </a>
    </main>
  );
}
