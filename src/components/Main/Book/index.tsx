import * as B from "./style";

const Book = ({ data }: any) => {
  return (
    <B.Container>
      <div style={{ display: "flex" }}>
        <B.Title>{data.title}</B.Title>
        <B.Started_at>{data.started_at} ~ </B.Started_at>
      </div>
      <div>
        <B.Progress>
          진행도 {data.progress}% ({data.current_page} / {data.all_pages})
        </B.Progress>

        <B.Hr />
      </div>
    </B.Container>
  );
};

export default Book;
