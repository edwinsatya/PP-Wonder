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
  const [gender, setGender] = useState("all");
  const [keyword, setKeyword] = useState("");

  const handleSearchKeyword = async () => {
    const { results, info } = await getRandomUser(page, gender, keyword);
    console.log(results);
    console.log(info);
    setDataTable(results);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { results, info } = await getRandomUser(page, gender, keyword);
      console.log(results);
      console.log(info);
      setDataTable(results);
    };

    fetchData().catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [page, gender]);

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
          />
        </Box>
        <div>
          <TableComponent tableRows={tableRows} dataTable={dataTable} />
          <PaginationComponent
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "1rem",
            }}
            count={10}
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
