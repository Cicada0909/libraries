import { Box, Card, Divider, Skeleton } from "@mui/material";

const LibrarySkeleton = () => {
  return (
    <Card sx={{ padding: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="text" width={50} height={40} />
      </Box>
      <Divider />
      <Skeleton variant="text" width="100%" height={25} />
      <Box>
        <Skeleton variant="text" width={80} height={30} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={60}
              height={24}
              sx={{ borderRadius: 3 }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Skeleton variant="text" width={55} height={25} />
        <Skeleton variant="text" width={100} height={25} />
      </Box>
    </Card>
  );
};

export default LibrarySkeleton;
