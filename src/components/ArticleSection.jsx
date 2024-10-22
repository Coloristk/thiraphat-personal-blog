import { Search } from "lucide-react";
import { Input } from "./ui/input";
import * as React from "react";
import { blogPosts } from "./data/blogPost";
import authorImage from "../assets/author-image.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const category = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <div
      className="bg-[#F9F8F6] md:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="text-2xl text-[#26231E] font-semibold mb-4 px-4">
        Latest articles
      </h2>
      <div className="bg-[#EFEEEB] p-4 rounded-md h-44 justify-center items-center mb-5 md:rounded-2xl md:h-28">
        <div className="md:flex md:justify-between md:items-center">
          <div className="hidden md:flex gap-2 font-medium m-3 justify-center items-center">
            <Tabs className="h-12 w-28 px-4 rounded-2xl ">
              <TabsList className=" bg-[#EFEEEB] gap-10 ">
                {category.map((Tabs) => (
                  <TabsTrigger
                    key={Tabs}
                    value={Tabs}
                    className="text-[#75716B] text-base"
                  >
                    {Tabs}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="relative md:mt-3 md:flex">
            <Input
              type="text"
              placeholder="Search"
              className="w-80 mb-4 gap-4"
            />
            <Search
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 md:right-3 md:top-5"
              size={18}
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
              {category.map((cat) => {
                return (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 !md:px-0">
        {blogPosts.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              title={blog.category}
              description={blog.description}
              author={blog.author}
              date={blog.date}
            />
          );
        })}
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
      <a href="" className="relative h-56 sm:h-96 ">
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
          <h2 className="font-semibold text-xl px-1">{title}</h2>
        </a>
        <p className="text-muted-foreground text-[#75716B] text-sm mb-4 flex-grow line-clamp-3 px-1">
          {description}
        </p>
        <div className="flex items-center text-sm mb-5 px-1">
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
