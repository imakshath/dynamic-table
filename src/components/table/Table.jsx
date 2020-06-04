import React from "react";
import "./Table.scss";

export default function Table({ delimiter = ",", data, numberOfLines }) {
  return (
    <table>
        <tbody>
            {data.slice(0, numberOfLines).map((row, index) => (
                <Row key={`row-r-${index}`} data={row} delimiter={delimiter} />
            ))}
        </tbody>
    </table>
  );
}

function Row({ data, delimiter }) {
    return (
        <tr>
            {/* NOTE:: ',' will be concedred as the default delimiter when the input delimiter is blank space.*/}
            {data
                .split(delimiter || ",")
                .slice(0, 4)
                .map((column) => (
                <td key={column}>{column}</td>
            ))}
        </tr>
    );
}
