import { RightLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "react", totalQuestions: 5 },
  { _id: 3, name: "next", totalQuestions: 5 },
  { _id: 4, name: "vue", totalQuestions: 2 },
  { _id: 5, name: "redux", totalQuestions: 10 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-3 overflow-y-auto border-2  p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {RightLinks.map((question) => {
            return (
              <Link
                className="flex cursor-pointer items-center justify-between gap-7"
                href={`/questions/${question.id}`}
                key={question.id}
              >
                <p className="body-medium text-dark500_light700">
                  {question.question}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  className="invert-colors"
                  alt="chevron right"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <RenderTags
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
