import "./App.css";
import { Box } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import InputTextComponent from "./components/Input/InputTextComponent";
import TableComponent from "./components/TableComponent";
import TitleComponent from "./components/TitleComponent";
import getRandomUser from "./services/getRandomUser";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { results, info } = await getRandomUser();
      console.log(results);
      console.log(info);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

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
          />
          <ButtonComponent
            title="Search"
            variant="contained"
            sx={{
              marginLeft: "1rem",
            }}
          />
          <InputTextComponent
            label="Gender"
            marginType="normal"
            variant="outlined"
            size="small"
            sx={{
              marginLeft: "1rem",
            }}
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
          <TableComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
