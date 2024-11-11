import { useSelector } from "react-redux";
import { deletePost } from "../state/posts/postsSlice";
import { useDispatch } from "react-redux";

export function PostList() {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-3 p-2">
        <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          PostList
        </h1>
        <ul className="space-y-4 overflow-auto">
          {posts.map((post) => (
            <li
              key={post.id}
              className="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <header className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                <div className="w-full flex">
                  <button
                    onClick={() => dispatch(deletePost(post.id))}
                    className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 ml-auto"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                <h2 className="mb-3 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  {post.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
