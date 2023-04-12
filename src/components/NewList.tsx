import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NewsType, NewsListProps, NewsfnTpe } from "../types";
import { useState } from "react";

function NewsCard({
  id,
  title,
  body,
  userId,
  isBookMarked,
  onBookMarked,
}: NewsType & NewsfnTpe) {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <div className="d-flex flex-row bd-highlight">
          <Card.Title>{`User Id ${userId} Post Id ${id}`}</Card.Title>
          {isBookMarked && (
            <i
              style={{ cursor: "pointer" }}
              className="bi bi-bookmark-fill px-3"
              onClick={() => onBookMarked(id, isBookMarked)}
            ></i>
          )}
        </div>
        {!isBookMarked && <Card.Text>{body}</Card.Text>}

        {!isBookMarked && (
          <Button
            variant="primary"
            onClick={() => onBookMarked(id, isBookMarked)}
          >
            Read Later
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

const NewsList = ({ newsList: oldNews }: NewsListProps) => {
  const [newsList, setNewsList] = useState(oldNews);
  const handleBookmarked = (id: number, value: boolean) => {
    const updatedNewsList = [...newsList];
    const index = updatedNewsList.findIndex((news) => news.id === id);
    updatedNewsList[index] = {
      ...updatedNewsList[index],
      isBookMarked: !value,
    };
    setNewsList(updatedNewsList);
  };
  return (
    <ListGroup>
      {newsList?.map((news) => (
        <ListGroup.Item key={`${news.id}`}>
          <NewsCard
            title={news.title}
            body={news.body}
            userId={news.userId}
            id={news.id}
            isBookMarked={news.isBookMarked}
            onBookMarked={handleBookmarked}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export { NewsList };
