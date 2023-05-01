import useBookInfo from "./hook/useBookInfo";

const BookInfo = () => {
  const { bookInfodata } = useBookInfo();
  return <div>my</div>;
};

export default BookInfo;
