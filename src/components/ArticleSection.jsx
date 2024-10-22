import { Search } from "lucide-react";
import { Input } from "./ui/input";
import * as React from "react";
import { blogPosts } from "./data/blogPost";
import authorImage from "../assets/author-image.jpg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ArticleSection() {
  return (
    <div
      className="bg-[#F9F8F6] md:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="text-2xl text-[#26231E] font-semibold mb-4 px-1">
        Latest articles
      </h2>
      <div className="bg-[#EFEEEB] p-4 rounded-md h-44 justify-center items-center mb-5 md:rounded-2xl">
        <div className="md:flex md:justify-between md:items-center">
          <div className="hidden md:flex gap-2 font-medium m-3 justify-center items-center">
            <button className="text-[#75716B] h-12 px-4 py-2 rounded-2xl  bg-[#DAD6D1]">
              Highlight
            </button>
            <button className="text-[#75716B] h-12 px-4 py-2 rounded-2xl">
              Cat
            </button>
            <button className="text-[#75716B] h-12 px-4 py-2 rounded-2xl">
              Inspiration
            </button>
            <button className="text-[#75716B] h-12 px-4 py-2 rounded-2xl">
              General
            </button>
          </div>
          <div className="md:mt-3 md:flex">
            <Input
              type="text"
              placeholder="Search"
              className="w-80 mb-4 gap-4"
            />
          </div>
        </div>
        <div className="md:hidden w-full">
          <h6 className="px-1 text-[#75716B] font-medium">Category</h6>
          <Select>
            <SelectTrigger className="w-80">
              <SelectValue placeholder="Highlight" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select category</SelectLabel>
                <SelectItem value="Cat">Cat</SelectItem>
                <SelectItem value="Inspiration">Inspiration</SelectItem>
                <SelectItem value="General">General</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].title}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].title}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].title}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </article>
    </div>
  );
}

export function BlogCard({
  image,
  category,
  title,
  description,
  author,
  date,
}) {
  return (
    <div className="flex flex-col gap-4">
      <a href="" className="relative h-56 sm:h-[360px] ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full text-green-700 px-3 py-1 mb-2">
            {category}
          </span>
        </div>
        <a>
          <h2 className="font-semibold text-xl ">{title}</h2>
        </a>
        <p className="text-muted-foreground text-[#75716B] text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm mb-5">
          <img
            src={authorImage}
            alt={author}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-[#75716B]">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;
