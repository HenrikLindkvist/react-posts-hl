import { Link, Outlet } from "react-router-dom";

export function PostWrapper() {
  return (
    <>
      <header className="ml-4">
        <Link
          className="p-2 relative flex w-fit rounded-lg text-white bg-blue-500 shadow-sm border border-blue-200 hover:border-blue-800"
          to="/post/new"
        >
          New post
        </Link>
      </header>
      <Outlet />
    </>
  );
}
