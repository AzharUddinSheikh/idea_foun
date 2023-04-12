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
  const [isOpen, setIsOpen] = useState<boolean[]>([]);
  const [chunkNews, setChunkNews] = useState<Array<Array<T>>>([]);

  const handleToggle = (index: number) => {
    const newState = [...isOpen];
    newState[index] = !newState[index];
    setIsOpen(newState);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const getPostData = useSelector(({ posts: { list } }: RootState) => list);

  useEffect(() => {
    if (getPostData.length > 1) {
      setChunkNews(chunkPost(getPostData, 3));
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
              {getPostData.length === 0 ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                chunkNews.map((chunkList, index) => (
                  <div
                    style={{ border: "1px solid #ccc", padding: 8 }}
                    key={index}
                  >
                    <Typography variant="subtitle1" component="h3">
                      <Button onClick={() => handleToggle(index)}>
                        {`SubCategory ${index + 1}`}
                      </Button>
                      <Collapse in={isOpen[index]}>
                        <div id="example-collapse-text-1">
                          <NewsList newsList={chunkList} />
                        </div>
                      </Collapse>
                    </Typography>
                  </div>
                ))
              )}
            </Box>
          </div>
          <div style={{ border: "1px solid #ccc", padding: 8 }}></div>
        </Box>
      </Container>
    </Box>
  );
}

export default News;
