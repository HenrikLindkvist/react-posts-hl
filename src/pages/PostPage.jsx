import { useParams /* useOutletContext */} from "react-router-dom";

export function PostPage() {
  const { id } = useParams();
  // const { hello } = useOutletContext();
  return (
    <h1>
      Post {id}
    </h1>
  );
}
