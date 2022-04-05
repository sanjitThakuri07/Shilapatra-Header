import React from "react";

import "./styles.css";
const Index = ({ data = [] }) => {
  const columns = data[0] && Object.keys(data[0]).slice(0, 8);
  return (
    <div className="table__container">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {data[0] &&
              columns.map((heading) => {
                return <th>{heading}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
