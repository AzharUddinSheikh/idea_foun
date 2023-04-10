import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
const News = () => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1">
          Latest News
        </Typography>
      </Container>
    </Box>
  );
};

export default News;
