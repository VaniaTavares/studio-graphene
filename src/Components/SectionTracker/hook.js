import { useEffect, useState } from "react";
import axios from "axios";

export const hook = (query, pageNumber) => {
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://openlibrary.org/search.json", {
        signal: controller.signal,
        params: {
          q: query,
          page: pageNumber,
        },
      })
      .then((res) => {
        console.table(res.data.docs);
      })
      .catch((error) => {
        if (axios.isCancel(e)) return;
        else console.error(error);
      });
    return () => controller.abort();
  }, [query, pageNumber]);
  return null;
};
