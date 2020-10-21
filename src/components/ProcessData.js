//npm i react-csv-reader
import CSVReader from "react-csv-reader";

const [rows, setRows] = React.useState([]);
const [columns, setColumns] = React.useState([]);

// process CSV data
export const processData = (dataString) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  const dataStringLines = dataString.split(/\r\n|\n/);
  const headers = dataStringLines[0].split(
    /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
  );

  const list = [];
  for (let i = 1; i < dataStringLines.length; i++) {
    const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    if (headers && row.length == headers.length) {
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        let d = row[j];
        if (d.length > 0) {
          if (d[0] == '"') d = d.substring(1, d.length - 1);
          if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1);
        }
        if (headers[j]) {
          obj[headers[j]] = d;
        }
      }

      // remove the blank rows
      if (Object.values(obj).filter((x) => x).length > 0) {
        list.push(obj);
      }
    }
  }

  // prepare columns list from headers
  const columns = headers.map((c) => ({
    name: c,
    selector: c,
  }));

  setData(list);
  setColumns(columns);
};
