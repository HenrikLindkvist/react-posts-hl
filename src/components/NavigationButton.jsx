/* eslint-disable react/prop-types */
import { useNavigate, useLocation } from "react-router-dom";

export function NavigationButton({ path, label }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`${
        location.pathname === path ? "font-bold" : "text-slate-800"
      } flex w-32 items-center rounded-md p-3 transition-all bg-slate-100 border border-slate-100 hover:border-gray-400 focus:border-gray-400 active:border-slate-200`}
    >
      <p className="m-auto">{label}</p>
    </button>
  );
}
