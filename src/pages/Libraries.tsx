import useLibraries from "../hooks/use-libraries.ts";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFieldsModal from "../components/SearchFieldsModal.tsx";
import TuneIcon from "@mui/icons-material/Tune";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import LibraryListItem from "../components/LibraryListItem.tsx";

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
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" onClick={() => setOpen(true)}>
            <TuneIcon />
          </Button>

          <SearchFieldsModal
            open={open}
            onClose={() => setOpen(false)}
            searchFields={searchFields}
            setSearchFields={setSearchFields}
          />
          <Input
            onChange={(e) => setTempSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSubmitHandler();
              }
            }}
            placeholder="Search"
            value={tempSearch}
          />
          <Button
            onClick={searchSubmitHandler}
            variant="contained"
            sx={{ width: "6.5rem" }}
          >
            Find
          </Button>
        </Box>
        <Box>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : data?.results?.length ? (
            <>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
              >
                {data.results.map((library, index) => (
                  <LibraryListItem
                    key={index}
                    library={library}
                    goToLibraryHandler={goToLibraryHandler}
                  />
                ))}
              </Grid>

              {data.available > data.results.length && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  <Button onClick={getMoreData}>Load more</Button>
                </Box>
              )}
            </>
          ) : (
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 5, gap: 1 }}
            >
              <PlaylistRemoveIcon />
              <Typography>Not found</Typography>
            </Box>
          )}
        </Box>
      </Box>
    )
  );
};

export default Libraries;
