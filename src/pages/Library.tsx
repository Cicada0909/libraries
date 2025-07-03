import { useParams } from "react-router";

const Library = () => {
  const params = useParams();

  console.log(params);

  return <div>Library</div>;
};

export default Library;
