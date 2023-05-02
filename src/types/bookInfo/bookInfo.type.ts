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

export type postBookNoteType = { isbn: string; content: string; page: number };

export type postBookHistoryType = {
  page: number;
  isbn: string;
};
