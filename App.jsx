import React, { useState } from "react";

export default function App() {
  const [page] = useState("dashboard");

  return (
    <div style={{color:"white", padding:20}}>
      Sistema Oficina rodando ✔
    </div>
  );
}