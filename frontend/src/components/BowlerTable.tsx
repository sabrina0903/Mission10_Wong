import { useEffect, useState } from "react";

function BowlerTable() {
  const [bowlers, setBowlers] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44325/api/Bowling")
      .then((response) => response.json())
      .then((data) => setBowlers(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {bowlers.map((b: any) => (
          <tr key={b.bowlerId}>
            <td>
              {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
            </td>
            <td>{b.team.teamName}</td>
            <td>{b.bowlerAddress}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BowlerTable;