import React from 'react'
import { Spinner } from "react-bootstrap";
import "./table.css";

export default function Table({ tableColumns, isLoading, error, data }) {
  return (
    <div className="d-flex justify-content-center my-2">
      {isLoading && <Spinner animation="border" role="status" />}
      {error && <h1 className="danger">Error cargando los datos, recargue</h1>}
      {!error && !isLoading && (
        <>
          {data.length > 0 && (
            <table className="table-container">
              <thead>
                <tr>
                  {tableColumns.map((el) => <th key={el.label}>{el.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {data.map((el) => (
                  <tr key={JSON.stringify(el)}>
                    {tableColumns.map((col) => (
                      <td key={`${JSON.stringify(el)}-${col.key}`}>
                        {col.customComponent ? col.customComponent(el) : el[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {data.length === 0 && <h1>No hay datos</h1>}
        </>
      )}
    </div>
  )
}
