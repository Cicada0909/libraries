import {
  Fade,
  Card,
  Box,
  Typography,
  Divider,
  Chip,
  Link,
} from "@mui/material";

interface LibraryCardProps {
  data: {
    name?: string;
    version?: string;
    homepage?: string;
    description?: string;
    keywords?: string[];
    author?: string;
  };
}

const LibraryCard = ({ data }: LibraryCardProps) => {
  return (
    <Fade in timeout={300}>
      <Card
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link underline="hover" href={data?.homepage} target="_blank">
            <Typography variant="h5" fontWeight={600}>
              {data?.name}
            </Typography>
          </Link>
          <Typography sx={{ fontSize: 16 }}>v{data?.version}</Typography>
        </Box>
        <Divider />
        {data?.description && (
          <Typography color="text.secondary">{data.description}</Typography>
        )}
        {(data?.keywords?.length ?? 0) > 0 && (
          <Box>
            <Typography fontWeight={500} gutterBottom>
              Keywords:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {data?.keywords?.map((kw, idx) => (
                <Chip key={idx} label={kw} size="small" />
              ))}
            </Box>
          </Box>
        )}
        {data?.author && (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Typography fontWeight={500} gutterBottom>
              Author:
            </Typography>
            <Typography>{data.author}</Typography>
          </Box>
        )}
      </Card>
    </Fade>
  );
};

export default LibraryCard;
