import React from "react";

const Counter = ({ count, setCount }) => {
  const decreaseCount = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={decreaseCount}
        id="decrement-button"
        className={`${
          count <= 0 ? "cursor-not-allowed" : ""
        } inline-flex h-8 w-8  shrink-0 items-center rounded-sm justify-center border border-gray-300 bg-[#f4f4f4] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100`}
      >
        <svg
          className="h-2.5 w-2.5 text-gray-900"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <p className="text-md p-3">{count}</p>
      <button
        type="button"
        id="increment-button"
        onClick={increaseCount}
        data-input-counter-increment="counter-input"
        className="inline-flex h-8 w-8 shrink-0 items-center rounded-sm justify-center border border-gray-300 bg-[#f4f4f4] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
      >
        <svg
          className="h-2.5 w-2.5 text-gray-900"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
