import ListBook from "../constants/listBooks/listBooks";
import BookCollections from "./BookCollections";
const ScreenPage = () => {
  return (
    <div>
      <BookCollections books={ListBook} />
    </div>
  );
};

export default ScreenPage;