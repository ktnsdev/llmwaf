"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function L() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(false);

  useEffect(() => {
    (async () => {
      await getData();
      setIsLoading(false);
    })();
  }, []);

  async function getData(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setData(true);
      }, 2000);
    });
  }

  return (
    <div
      id="container"
      className="p-4 w-screen h-screen flex flex-col items-center justify-center"
    >
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
      ) : (
        <p>API fetch complete</p>
      )}
    </div>
  );
}
