export type getBooksType = {
  books: BookType[];
  login_id: string;
  name: string;
};

export type BookType = {
  all_page: number;
  author: string;
  current_page: number;
  isbn: string;
  progress: number;
  started_at: string;
  title: string;
  book: string;
};
