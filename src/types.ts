export type NewsType = {
  userId: number;
  it: number;
  title: string;
  description: string;
};

export type NewsListProps = {
  newsList: NewsType[];
};