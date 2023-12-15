"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/${searchTerm}/`);
    setSearchTerm("");
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search..."
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        Submit 
      </button>
    </form>
  );
}
