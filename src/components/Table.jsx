import React from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import AddButton from "./AddButton";
import AlterButtons from "./AlterButtons";
import { columns, data } from "./constants/items";

const Table = () => {
  const [records, setRecords] = useState(data);
  const handleSearch = (query) => {
    const newData = data.filter((row) => {
      return row.contest_name
        .toLowerCase()
        .includes(query.target.value.toLowerCase());
    });
    setRecords(newData);
  };
  const handleDelete = (rowId) => {
    const newData = records.filter((row) => {
      return row.id !== rowId;
    });
    setRecords(newData);
  };
  const DeleteButton = ({ row }) => (
    <AlterButtons handleDelete={() => handleDelete(row.id)} />
  );
  const customColumns = [
    ...columns,
    {
      name: "Options",
      cell: (row) => <DeleteButton row={row} />,
    },
  ];
  const dataTable = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
        color: "#798f9f",
      },
    },
    rows: {
      style: {
        border: "2px solid #f0e9ff",
        fontSize: "16px",
        fontWeight: "600",
        color: "#2a106b",
      },
    },
    cells: {
      style: {
        width: "240px",
        height: "60px",
        display: "flex",
        flexWrap: "wrap",
      },
    },
  };
  return (
    <div>
      <div className="utility_bar">
        <div className="sub_utility_bar">
          <div>
            <SearchBar handleSearch={handleSearch} />
          </div>
          <div>
            <Filter />
          </div>
        </div>
        <div>
          <AddButton />
        </div>
      </div>
      <div className="data_table">
        <DataTable
          columns={customColumns}
          data={records}
          pagination
          fixedHeader
          selectableRows
          customStyles={dataTable}
        ></DataTable>
      </div>
    </div>
  );
};

export default Table;
