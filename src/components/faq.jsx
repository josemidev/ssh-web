import { useState } from "react";
import IconChevron from "./icons/icon_chevron";

const data = [
    { 
        id: 1, 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        info: "Astro es un framework web..." 
    },
    { 
        id: 2, 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        info: "Astro es un framework web..." 
    },
    { 
        id: 3, 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        info: "Astro es un framework web..." 
    },
];

export default function Faq() {
  const [current, setCurrent] = useState(null);

  const toggle = (id) => {
    setCurrent(current === id ? null : id);
  };

  return (
    <div className="lg:mx-auto lg:w-[700px]">
      {data.map(({ id, title, info }) => (
        <div
          key={id}
          onClick={() => toggle(id)}
          className="border-t border-[#D9D9D9] py-5 cursor-pointer"
        >
          <div className="row items-center justify-between">
            <h2>{title}</h2>
            <IconChevron
              className={`size-6 lg:size-5 fill-black transition-transform duration-300 ${
                current === id ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              current === id ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-500">{info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
