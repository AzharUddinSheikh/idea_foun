import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NewsType, NewsListProps } from "../types";

function NewsCard({ title, description, userId, ...rest }: NewsType) {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{`This News is From User With Id ${userId}`}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Read Later</Button>
      </Card.Body>
    </Card>
  );
}

const NewsList = ({ newsList }: NewsListProps) => {
  return (
    <ListGroup>
      {newsList?.map((news, ind) => (
        <ListGroup.Item key={`${news.it}-${ind}`}>
          <NewsCard
            title={news.title}
            description={news.description}
            userId={news.userId}
            it={news.it}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export { NewsList };
