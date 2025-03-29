import React, { useState } from "react";

function App() {
  // State for the form inputs
  const [serialNumber, setSerialNumber] = useState("");
  const [hasEquipment1, setHasEquipment1] = useState(false);
  const [hasEquipment2, setHasEquipment2] = useState(false);
  const [hasEquipment3, setHasEquipment3] = useState(false);

  // Array of preset serial numbers
  const serialNumbers = [
    "SN001",
    "SN002",
    "SN003",
    "SN004",
    "SN005",
    "SN006",
    "SN007",
    "SN008",
    "SN009",
    "SN010",
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      serialNumber,
      hasEquipment1,
      hasEquipment2,
      hasEquipment3,
    });
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
    marginTop: "40px",
  };

  const headerStyle = {
    textAlign: "center",
    fontSize: "22px",
    color: "#333",
    marginBottom: "20px",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    fontSize: "16px",
    color: "#333",
    display: "block",
    marginBottom: "5px",
  };

  const selectStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    backgroundColor: "#fafafa",
  };

  const checkboxStyle = {
    marginRight: "10px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Submit Your Daily Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="serialNumber" style={labelStyle}>
            Serial Number:
          </label>
          <select
            id="serialNumber"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            required
            style={selectStyle}
          >
            <option value="" disabled>
              Select a serial number
            </option>
            {serialNumbers.map((sn, index) => (
              <option key={index} value={sn}>
                {sn}
              </option>
            ))}
          </select>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={hasEquipment1}
              onChange={() => setHasEquipment1(!hasEquipment1)}
              style={checkboxStyle}
            />
            Do you have Equipment 1?
          </label>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={hasEquipment2}
              onChange={() => setHasEquipment2(!hasEquipment2)}
              style={checkboxStyle}
            />
            Do you have Equipment 2?
          </label>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={hasEquipment3}
              onChange={() => setHasEquipment3(!hasEquipment3)}
              style={checkboxStyle}
            />
            Do you have Equipment 3?
          </label>
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
