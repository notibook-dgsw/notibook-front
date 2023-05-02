export type getBookInfoType = { isbn: string };

export type bookDetailResponse = {
  all_pages: number;
  author: string;
  current_page: number;
  isbn: string;
  notes: [];
  progress: number;
  started_at: string;
  summary: string;
  title: string;
};

export type bookHistory = {
  created_at: string;
  page: number;
};
