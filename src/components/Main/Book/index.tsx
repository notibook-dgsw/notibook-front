const Book = ({ data }: any) => {
  return (
    <>
      <div>제목 : {data.title}</div>
      <div>저자 :{data.author}</div>
      <div>{data.started_at}시작 • </div>
      <div>{data.progress}%</div>
      <div>{data.current_page} / </div>
      <div>{data.all_pages}</div>
    </>
  );
};

export default Book;
