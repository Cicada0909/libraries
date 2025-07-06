import { useNavigate, useParams } from "react-router-dom";
import useLibrary from "../hooks/use-library.ts";
import { Box, Button } from "@mui/material";
import LibrarySkeleton from "../components/LibrarySkeleton.tsx";
import LibraryCard from "../components/LibraryCard.tsx";

const Library = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useLibrary({ name });

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 1000,
        margin: "auto",
        padding: 4,
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        sx={{ alignSelf: "start", marginBottom: 2 }}
      >
        Go back
      </Button>
      {isLoading || !data ? <LibrarySkeleton /> : <LibraryCard data={data} />}
    </Box>
  );
};

export default Library;
