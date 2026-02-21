import { useNavigate } from "react-router-dom";

function History() {
    const nav = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h2>History Section</h2>
      <button onClick={() => nav("/quiz")}>Assam History</button>
<br/><br/>
      <button>Modern History</button>
    </div>
  );
}

export default History;
