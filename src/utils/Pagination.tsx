// import React, { useState } from "react";

type PaginationProp = {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: (activePage:number) => void;
    currentPage: number;
}

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProp) => {
  const pages = [];
  // setPages(pages)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-end mt-10">
      <div className="flex gap-8 items-center">
        <p
          className={
            currentPage <= 1
              ? "hidden"
              : "block text-xs text-[#585858] cursor-pointer"
          }
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </p>

        {pages &&
          pages.map((page, index) => {
            return (
              <p
                key={index}
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "text-xs bg-[#d7e1fb] rounded-full py-3 px-4 text-center text-[#595959]"
                    : "text-xs cursor-pointer"
                }
              >
                {page}
              </p>
            );
          })}

        <p
          className={
            currentPage === pages[pages.length - 1]
              ? "hidden"
              : "block text-xs text-[#585858] cursor-pointer"
          }
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </p>
      </div>
    </div>
  );
};

export default Pagination;
