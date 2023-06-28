import React, { FC } from "react";

const ErrorMessage: FC = () => (
  <div className="h-40 flex justify-center items-center">
    <div className="flex justify-center items-center gap-2">
      <img
        src="/public/assets/images/error.png"
        alt="Error!"
        className="w-12 h-12"
      />
      <p className="text-red-650 text-center text-lg">
        Oops! Something went wrong.
        <br />
        Please try again later.
      </p>
    </div>
  </div>
);

export default ErrorMessage;
