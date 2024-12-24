import { Search } from "lucide-react";
import { Input } from "../ui/input";
import * as React from "react";
import { blogPosts } from "../data/blogPost";
import authorImage from "/src/assets/author-image.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=${category}`
        );
        if (page === 1) {
          setPost(response.data.posts);
        } else {
          setPost((prevPost) => [...prevPost, ...response.data.posts]);
        }

        setIsLoading(false);
        if (response.data.currentPage >= response.data.totalPages) {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, category]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div
        className="bg-[#F9F8F6] md:px-32"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <h2 className="text-2xl text-[#26231E] font-semibold mb-4 px-4">
          Latest articles
        </h2>
        <div className="bg-[#EFEEEB] p-4 rounded-md h-44 justify-center items-center md:rounded-2xl md:h-28">
          <div className="md:flex md:justify-between md:items-center h-16">
            <div className="hidden md:flex gap-2 font-medium m-3 justify-center items-center">
              <Tabs>
                <TabsList className="bg-[#EFEEEB] gap-10">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className={`text-[#75716B] text-base py-3 px-4 rounded-xl
                      ${
                        category === cat
                          ? "bg-[#DAD6D1] text-black"
                          : "hover:bg-[#F9F6F8]"
                      }`}
                      onClick={() => {
                        setCategory(cat),
                          setPost([]),
                          setPage(1),
                          setHasMore(true);
                      }}
                    >
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div className="relative md:mt-6 md:flex">
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
            <Select
              value={category}
              onValueChange={(value) => {
                setCategory(value), setPost([]), setPage(1), setHasMore(true);
              }}
            >
              <SelectTrigger className="w-80">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => {
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
        <article className="grid grid-cols-1 px-4 !md:px-0 mt-8 md:grid-cols-2 gap-8 ">
          {post
            .filter(
              (blog) => category === "Highlight" || blog.category === category
            )
            .map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  id={blog.id}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  description={blog.description}
                  author={blog.author}
                  date={new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                />
              );
            })}
        </article>
        {hasMore && (
          <div className="text-center mt-8 pb-8">
            <button
              onClick={handleLoadMore}
              className="hover:text-muted-foreground font-medium underline"
            >
              {isLoading ? "Loading..." : "View more"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function BlogCard({ image, id, category, title, description, author, date }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <a
        onClick={() => navigate(`/post/${id}`)}
        className="relative h-[212px] sm:h-[360px] cursor-pointer"
      >
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full text-green-700 px-3 py-1 mb-4">
            {category}
          </span>
        </div>
        <a
          onClick={() => navigate(`/post/${id}`)}
          className="no-underline cursor-pointer"
        >
          <h2 className="font-bold text-xl text-black mb-2 line-clamp-2 hover:underline ">
            {title}
          </h2>
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
