export function About() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl text-gray-900 dark:text-white self-center">
          Basic static react example
        </h1>
        <div className="self-center">
          <h2 className="text-3xl text-gray-900 dark:text-white mt-6">
            Uses the following components:
          </h2>
          <ul className="mt-6 list-disc list-inside dark:text-gray-400">
            <li className="text-2xl text-gray-900 dark:text-white">
              reduxjs/toolkit
            </li>
            <li className="text-2xl text-gray-900 dark:text-white">
              react-router-dom
            </li>
            <li className="text-2xl text-gray-900 dark:text-white">
              react-hook-form
            </li>
            {/* TODO <li>zod form validation</li> */}
            <li className="text-2xl text-gray-900 dark:text-white">Tailwind</li>
          </ul>
        </div>
      </div>
    </>
  );
}
