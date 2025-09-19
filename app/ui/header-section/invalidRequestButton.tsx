"use client";

import { useFetch } from "@/app/lib/customHooks";
import { Post } from "@/app/lib/definitions";
import { useState } from "react";
import Popup from "../error-popup/popup";

export default function InvalidRequestButton() {
  const { error } = useFetch<Post>("/posts/none");
  const [errorMessage, setError] = useState<string | null>(null);
  function makeInvalidRequest() {
    setError(error);
  }
  function closePopup() {
    setError(null);
  }
  return (
    <div>
      <button
        className="text-sm md:text-base border w-24 md:w-fit bg-blue-500 text-white rounded-md cursor-pointer md:p-3"
        onClick={makeInvalidRequest}
      >
        Make invalid request
      </button>
      <Popup error={errorMessage} closePopup={closePopup} />
    </div>
  );
}
