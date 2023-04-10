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
    <Box>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1">
          Latest News
        </Typography>
        <Box sx={{ paddingTop: 2 }}>
          <div style={{ border: "1px solid #ccc", padding: 8 }}>
            <Typography variant="h6" component="h2">
              Category 1
            </Typography>
            <Box sx={{ paddingLeft: 2 }}>
              <div style={{ border: "1px solid #ccc", padding: 8 }}>
                <Typography variant="subtitle1" component="h3">
                  Subcategory 1-1
                </Typography>
              </div>
              <div style={{ border: "1px solid #ccc", padding: 8 }}>
                <Typography variant="subtitle1" component="h3">
                  Subcategory 1-2
                </Typography>
              </div>
              <div style={{ border: "1px solid #ccc", padding: 8 }}>
                <Typography variant="subtitle1" component="h3">
                  Subcategory 1-3
                </Typography>
              </div>
            </Box>
          </div>
          <div style={{ border: "1px solid #ccc", padding: 8 }}></div>
        </Box>
      </Container>
    </Box>
  );
};

export default News;
