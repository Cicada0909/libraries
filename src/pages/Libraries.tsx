import useLibraries from "../hooks/use-libraries.ts";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFieldsModal from "../components/SearchFieldsModal.tsx";

const ROWS_PER_PAGE = 12;

const Libraries = () => {
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    getMoreData,
    search,
    setSearch,
    searchFields,
    setSearchFields,
  } = useLibraries({
    rowsPerPage: ROWS_PER_PAGE,
  });

  const [tempSearch, setTempSearch] = useState(search);
  const [open, setOpen] = useState(false);

  const goToLibraryHandler = (name: string) => {
    navigate(`/library/${name}`);
  };

  const searchSubmitHandler = () => {
    setSearch(tempSearch);
  };

  return (
    data && (
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginTop: 4,
            marginBottom: 4,
            alignItems: "center",
          }}
        >
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Filters
          </Button>
          <SearchFieldsModal
            open={open}
            onClose={() => setOpen(false)}
            searchFields={searchFields}
            setSearchFields={setSearchFields}
          />
          <Input
            onChange={(e) => setTempSearch(e.target.value)}
            placeholder="Search"
            value={tempSearch}
          />
          <Button onClick={searchSubmitHandler} variant="contained">
            Find
          </Button>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {data?.results.map((library, index) => (
            <Grid key={index} size={{ xs: 1, sm: 4, md: 4 }}>
              <Card sx={{ padding: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{library.name}</Typography>
                  <Typography>v{library.version}</Typography>
                </Box>
                <Button
                  sx={{ marginTop: 3 }}
                  size="small"
                  variant="contained"
                  onClick={() => goToLibraryHandler(library.name)}
                >
                  More information
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
        {isLoading ? (
          <CircularProgress />
        ) : data?.available ? (
          <Button sx={{ marginTop: 2 }} onClick={getMoreData}>
            Load more
          </Button>
        ) : (
          <Typography>Not found</Typography>
        )}
      </Box>
    )
  );
};

export default Libraries;
