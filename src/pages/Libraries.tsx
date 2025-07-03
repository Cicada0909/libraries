import useLibraries from "../hooks/use-libraries.ts";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const ROWS_PER_PAGE = 12;

const Libraries = () => {
  const navigate = useNavigate();

  const { data, isLoading, getMoreData } = useLibraries({
    rowsPerPage: ROWS_PER_PAGE,
  });

  const goToLibraryHandler = (name: string) => {
    navigate(`/library/${name}`);
  };

  return (
    data && (
      <Box sx={{ width: "90%", margin: "auto" }}>
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
                  size={"small"}
                  variant={"contained"}
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
        ) : (
          <Button sx={{ marginTop: 2 }} onClick={getMoreData}>
            Load more
          </Button>
        )}
      </Box>
    )
  );
};

export default Libraries;
