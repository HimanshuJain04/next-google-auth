"use client";
export const Button = () => {
  const buttonHandler = () => {};
  return (
    <button
      onClick={buttonHandler}
      className="bg-blue-500 text-white rounded-full px-10 py-3 font-bold"
    >
      Signup With Google
    </button>
  );
};
