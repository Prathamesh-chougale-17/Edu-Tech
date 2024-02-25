"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { formUrlQuery } from "@/sanity/buildQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
          value: "",
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);
  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="w-full md:w-[300px] pl-9  rounded-full  focus-visible:ring-slate-200"
        placeholder="Search for a course"
      />
    </div>
  );
};

export default SearchForm;
