import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/posts";
import { RootState } from "../store/reducer";

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const getPostData = useSelector(({ posts: { list } }: RootState) => list);

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
