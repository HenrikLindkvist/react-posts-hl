import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../state/posts/postsSlice";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();
  const { /* reset,*/ handleSubmit, register } = useForm({
    defaultValues: { text: "", title: "", id: crypto.randomUUID() },
  });

  function onSubmit(newPost) {
    newPost.id = posts.length;
    dispatch(addPost(newPost));
    // reset();
    close()
  }

  function close () {
    navigate("/post")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Title
      </label>
      <input
        {...register("title", { required: true })}
        placeholder="Title"
        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">Text</label>
      <textarea
        {...register("text", { required: true })}
        placeholder="Text"
        rows="4"
        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="flex mt-3 pt-5">
        <button
          type="button"
          onClick={close}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create post
        </button>
      </div>
    </form>
  );
}
