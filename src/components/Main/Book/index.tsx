import * as B from "./style";

const Book = ({ data }: any) => {
  return (
    <B.Container onClick={() => window.location.href = `/books/${data.isbn}`}>
      <B.Title>{data.title}</B.Title>
      <B.Started_at>{data.started_at} 시작 • </B.Started_at>
      <B.Progress>진행도 {data.progress}%</B.Progress>
      <B.Page>
        {data.current_page} / {data.all_pages}
      </B.Page>
    </B.Container>
  );
};

export default Book;
