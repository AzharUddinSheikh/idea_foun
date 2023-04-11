import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/posts";
import { RootState } from "../store/reducer";
import chunkPost from "../helper";
import { NewsList } from "../components/NewList";
import { NewsType } from "../types";
import Spinner from "react-bootstrap/Spinner";

function News<T extends NewsType>() {
  const dispatch = useDispatch();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [chunkNews, setChunkNews] = useState<Array<Array<T>>>([]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const getPostData = useSelector(({ posts: { list } }: RootState) => list);

  useEffect(() => {
    if (getPostData.length > 1) {
      setChunkNews(chunkPost(getPostData, 3));
      setIsLoading(false);
    }
  }, [getPostData]);

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
                  <Button
                    disabled={isLoading}
                    onClick={() => setIsOpen1(!isOpen1)}
                  >
                    {isLoading ? "Loading…" : "SubCategory 1"}
                  </Button>
                  <Collapse in={isOpen1}>
                    <div id="example-collapse-text-1">
                      <NewsList newsList={chunkNews[0]} />
                    </div>
                  </Collapse>
                </Typography>
              </div>
              <div style={{ border: "1px solid #ccc", padding: 8 }}>
                <Typography variant="subtitle1" component="h3">
                  <Button
                    disabled={isLoading}
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    {isLoading ? "Loading…" : "SubCategory 2"}
                  </Button>
                  <Collapse in={isOpen2}>
                    <div id="example-collapse-text-1">
                      <NewsList newsList={chunkNews[1]} />
                    </div>
                  </Collapse>
                </Typography>
              </div>
              <div style={{ border: "1px solid #ccc", padding: 8 }}>
                <Typography variant="subtitle1" component="h3">
                  <Button
                    disabled={isLoading}
                    onClick={() => setIsOpen3(!isOpen3)}
                  >
                    {isLoading ? "Loading…" : "SubCategory 3"}
                  </Button>
                  <Collapse in={isOpen3}>
                    <div id="example-collapse-text-1">
                      <NewsList newsList={chunkNews[2]} />
                    </div>
                  </Collapse>
                </Typography>
              </div>
            </Box>
          </div>
          <div style={{ border: "1px solid #ccc", padding: 8 }}></div>
        </Box>
      </Container>
    </Box>
  );
}

export default News;
