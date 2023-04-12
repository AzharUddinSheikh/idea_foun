export type NewsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  isBookMarked:boolean,
};

export type NewsfnTpe = {
  onBookMarked: (id:number, value:boolean) => void;
}

export type NewsListProps = {
  newsList: NewsType[];
};