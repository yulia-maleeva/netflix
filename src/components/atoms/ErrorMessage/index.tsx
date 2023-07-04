import React, { FC } from "react";

interface IErrorMessage {
  status: number | string;
  message: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ status, message }) => (
  <div className="h-40 flex justify-center items-center">
    <div className="flex justify-center items-center gap-2">
      <img
        src="/public/assets/images/error.png"
        alt="Error!"
        className="w-12 h-12"
      />
      <div className="text-red-650 text-center text-lg">
        <p>
          {status ? <b>{status}: </b> : null}
          {message ? `${message}` : "Oops! Something went wrong!"}
        </p>
        <p>Please try again later.</p>
      </div>
    </div>
  </div>
);

export default ErrorMessage;
