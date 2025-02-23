import { useState } from "react";
import "./App.css";
import ComplaintCard from "./components/ComplaintCard";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch complaints
  function fetchAllData() {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/complaint")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError("Could not load complaints.");
      })
      .finally(() => setLoading(false));
  }

  // Delete a complaint
  function deleteComplaint(id) {
    fetch(`http://127.0.0.1:8000/api/complaint/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete complaint");
        }
        return response.json();
      })
      .then(() => {
        setData((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <header>
        <h1>Panaszkezelő Rendszer</h1>
        <button className="fetch-button" onClick={fetchAllData}>
          Adatok Betöltése
        </button>
      </header>

      {loading && <p className="loading">Betöltés...</p>}
      {error && <p className="error">{error}</p>}

      <div className="complaint-list">
        {data.length > 0 ? (
          data.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              type={complaint.type}
              name={complaint.name}
              phone={complaint.phone}
              email={complaint.email}
              resolved={complaint.resolved}
              onComplaintDelete={() => deleteComplaint(complaint.id)}
            />
          ))
        ) : (
          <p className="no-data">Nincs elérhető panasz.</p>
        )}
      </div>
    </div>
  );
}

export default App;
