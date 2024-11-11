import { Routes, Route } from "react-router-dom";
import { PostList } from "./pages/PostList";
import { PostPage } from "./pages/PostPage";
import { CreatePost } from "./pages/CreatePost";
import { PostWrapper } from "./PostWrapper";

export function PostRoutes() {
  return (
    <>
      <Routes>
        <Route element={<PostWrapper />}>
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostPage />} />
          <Route path="new" element={<CreatePost />} />          
        </Route>
      </Routes>
    </>
  );
}
