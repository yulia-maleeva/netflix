import React, { FC } from "react";

interface IFormErrorMessage {
  errorMessage?: string;
}

const FormErrorMessage: FC<IFormErrorMessage> = ({ errorMessage }) => (
  <p className="text-xs text-orange-550">{errorMessage}</p>
);

export default FormErrorMessage;
