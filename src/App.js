import "./App.css";
import { Box } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import InputTextComponent from "./components/Input/InputTextComponent";
import TableComponent from "./components/TableComponent";
import TitleComponent from "./components/TitleComponent";
import PaginationComponent from "./components/PaginationComponent";
import getRandomUser from "./services/getRandomUser";
import { useEffect, useState } from "react";

function App() {
  const genderItems = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Male",
      value: "male",
    },
  ];

  const tableRows = ["Username", "Name", "Email", "Gender", "Registered Date"];

  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [gender, setGender] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [internalKeyword, setInternalKeyword] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearchKeyword = async () => {
    setInternalKeyword(keyword);
  };

  const handleResetFilter = () => {
    setPage(1);
    setGender("all");
    setKeyword("");
    setInternalKeyword("");
    setSortDirection("asc");
  };

  const handleSortTable = (e) => {
    const newSort = `${sortDirection === "asc" ? "desc" : "asc"}`;
    setSortDirection(newSort);
  };

  useEffect(() => {
    const currentDataTable = [...dataTable];

    if (sortDirection === "asc") {
      currentDataTable.sort((a, b) => {
        let fa = new Date(a.registered.date);
        let fb = new Date(b.registered.date);

        return fa - fb;
      });
      setDataTable(currentDataTable);
    } else {
      currentDataTable.sort((a, b) => {
        let fa = new Date(a.registered.date);
        let fb = new Date(b.registered.date);

        return fb - fa;
      });
      console.log(currentDataTable);
      setDataTable(currentDataTable);
    }
    // eslint-disable-next-line
  }, [sortDirection]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getRandomUser(page, gender, internalKeyword);

      setDataTable(results);
      setTotalPage(10); //hardcode totalpage=10 , cause in object info no have key for setTotalPage
    };

    fetchData().catch((err) => console.log(err));
  }, [page, gender, internalKeyword]);

  return (
    <div className="App">
      <header>
        <TitleComponent title="Example With Search and Filter" />
      </header>
      <main>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <InputTextComponent
            label="Search"
            marginType="normal"
            variant="outlined"
            size="small"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <ButtonComponent
            title="Search"
            variant="contained"
            sx={{
              marginLeft: "1rem",
            }}
            onClick={handleSearchKeyword}
          />
          <InputTextComponent
            label="Gender"
            marginType="normal"
            variant="outlined"
            size="small"
            sx={{
              marginLeft: "1rem",
            }}
            select
            items={genderItems}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <ButtonComponent
            title="Reset Filter"
            variant="contained"
            sx={{
              marginLeft: "1rem",
            }}
            onClick={handleResetFilter}
          />
        </Box>
        <div>
          <TableComponent
            tableRows={tableRows}
            dataTable={dataTable}
            onClick={handleSortTable}
            sortDirection={sortDirection}
          />
          <PaginationComponent
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "1rem",
            }}
            count={totalPage}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
