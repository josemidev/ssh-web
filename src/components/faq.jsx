import { useState } from "react";
import IconChevron from "./icons/icon_chevron";

const data = [
    { 
        id: 1, 
        title: "What information do I need to have to Start Service?", 
        info: `
              Here is a list of things you will need to have to start service
              Full Address you are moving to (including the house number, street name and Suffix, unit/apartment number, city, state, and zip code)
              Legal Name as shown on SSN Card
              Social Security Number
              Preferred Contact Number
              Email Address
              Date you would like to start service
              Driver’s License (You may be asked to provide information from your Driver’s License)
              

              Please have this information readily available prior to your request for Service
        `
    },
    { 
        id: 2, 
        title: "How do I switch to my gas or electric account?", 
        info: "Massachusetts customers no longer need two separate logins for their gas and electric service accounts. 1-210-892-3660 Monday - Friday, 7:00 am - 7:00 pm" 
    },
    { 
        id: 3, 
        title: "Where can I find information on rebates?  ", 
        info: "call our Customer Service Contact Center at: 1-210-892-3660 Monday - Friday, 7:00 am - 7:00 pm" 
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
