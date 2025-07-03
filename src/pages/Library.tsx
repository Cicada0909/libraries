import { useNavigate, useParams } from "react-router-dom";
import useLibrary from "../hooks/use-library.ts";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Link,
  Typography,
} from "@mui/material";

const Library = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useLibrary({ name });

  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 4,
      }}
    >
      {isLoading ? (
        <CircularProgress sx={{ margin: "auto" }} />
      ) : (
        <>
          <Button
            onClick={() => navigate(-1)}
            sx={{ alignSelf: "start", marginBottom: 2 }}
          >
            Go back
          </Button>
          <Card
            sx={{
              padding: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link underline={"none"} href={data?.homepage} target={"_blank"}>
                <Typography
                  sx={{ fontSize: 20, fontWeight: 500 }}
                  variant={"h1"}
                >
                  {data?.name}
                </Typography>
              </Link>
              <Typography sx={{ fontSize: 16 }} variant={"h5"}>
                v{data?.version}
              </Typography>
            </Box>
            <Typography variant={"caption"}>
              Description: {data?.description}
            </Typography>
            <Typography variant={"caption"}>
              Keywords: {data?.keywords.join(", ")}
            </Typography>
            <Typography variant={"caption"}>Author: {data?.author}</Typography>
          </Card>
        </>
      )}
    </Box>
  );
};

export default Library;
