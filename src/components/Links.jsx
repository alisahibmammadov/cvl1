import React from "react";
import LinkData from "../data/link";
console.log(LinkData);

function Links() {
  return (
    <main className="w-full  p-2 pb-50 ">
      <div className="to-blue-700 flex flex-col items-center gap-2">
        {LinkData.map((link) => (
          <a
            href={`${link.link}`}
            target="_blank"
            className="bg-white text-black font-semibold md:text-3xl text-[12px] transition-[10s] hover:cursor-pointer hover:bg-green-400  rounded-[5px] md:py-5 py-2  pl-[20px] pr-20 flex items-center  md:w-[570px] w-[270px] justify-between "
          >
            <i className={`fa-brands ${link.linkIcon} text-xl md:text-3xl`}></i>
            <p className="flex items-center justify-center  w-[60%]">
              {link.linkName}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Links;
