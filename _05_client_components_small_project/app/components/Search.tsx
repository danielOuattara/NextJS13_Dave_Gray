"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { serialize } from "v8";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };
  return <div></div>;
}
