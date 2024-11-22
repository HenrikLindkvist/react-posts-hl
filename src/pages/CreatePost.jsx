import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPost } from "../state/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function CreatePost() {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();
  const [submitError, setSubmitError] = useState(false);

  const PostSchema = z.object({
    title: z
      .string()
      .min(1, { message: "Title can't be empty" })
      .max(30, { message: "Title can't be more than 30 characters" }),
    text: z
      .string()
      .min(1, { message: "Post can't be empty" })
      .max(400, { message: "Post can't be more than 400 characters" }),
    id: z.union([z.string().length(36), z.number().gt(-1)], {
      message: "Id error",
    }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { title: "", text: "", id: crypto.randomUUID() },
    resolver: zodResolver(PostSchema),
  });

  function onSubmit(newPost) {
    newPost.id = posts.length;
    dispatch(addPost(newPost));
    close();
  }

  function onSubmitError() {
    setSubmitError(true);
  }

  function close() {
    navigate("/post");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onSubmitError)} className="p-4 mb-4">
      <input {...register("id", { required: true })} className="hidden" />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Title
      </label>
      <input
        {...register("title", { required: true })}
        placeholder="Title"
        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      {errors.title?.message && (
        <p className="text-sm text-red-500">{errors.title?.message}</p>
      )}
      <label className="block text-gray-700 text-sm font-bold mb-2">Text</label>
      <textarea
        {...register("text", { required: true })}
        placeholder="Text"
        rows="4"
        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.text?.message && (
        <p className="text-sm text-red-500">{errors.text?.message}</p>
      )}
      <div className="flex mt-3 pt-5">
        <button
          type="button"
          onClick={close}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          className={`${
            submitError && !isValid ? "opacity-50" : "hover:bg-blue-600"
          } bg-blue-500 text-white ml-2 py-2 px-4 rounded`}
          disabled={submitError && !isValid}
        >
          Create post
        </button>
      </div>
    </form>
  );
}
