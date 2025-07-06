import { Box, Button, Card, Fade, Grid, Typography } from "@mui/material";

interface Library {
  name: string;
  version: string;
}

interface LibraryListItemProps {
  library: Library;
  goToLibraryHandler: (name: string) => void;
}

const LibraryListItem = ({
  library,
  goToLibraryHandler,
}: LibraryListItemProps) => {
  return (
    <Grid size={{ xs: 1, sm: 4, md: 4 }}>
      <Fade in timeout={700}>
        <Card sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={500}>{library.name}</Typography>
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
      </Fade>
    </Grid>
  );
};

export default LibraryListItem;
