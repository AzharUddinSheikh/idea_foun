export type NewsType = {
  userId: number;
  it: number;
  title: string;
  body: string;
};

export type NewsListProps = {
  newsList: NewsType[];
};