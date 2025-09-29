import IconCheck from "@/components/icons/icon_check";
import { useState } from "react";

const typeOne = [
  {
    id: 0,
    title: 'Service reconnections to get you back online faster.',
    info: 'Massachusetts customers no longer need two separate logins for their gas and electric service accounts. 1-210-485-2325 Monday - Friday, 7:00 am - 7:00 pm'
  },
  {
    id: 1,
    title: 'Updating your billing information so your account stays accurate and up to date.',
    info: 'Massachusetts customers no longer need two separate logins for their gas and electric service accounts. 1-210-485-2325 Monday - Friday, 7:00 am - 7:00 pm'
  }
]

const typeTwo = [
  {
    id: 0,
    title: 'Easy-to-use tools that put all your options in one place',
    info: 'Massachusetts customers no longer need two separate logins for their gas and electric service accounts. 1-210-485-2325 Monday - Friday, 7:00 am - 7:00 pm'
  },
  {
    id: 1,
    title: 'A seamless path to real savings and smarter energy choices',
    info: 'Massachusetts customers no longer need two separate logins for their gas and electric service accounts. 1-210-485-2325 Monday - Friday, 7:00 am - 7:00 pm'
  }
]

export default function Faq({ type }) {
  const data = type === 1 ? typeOne : typeTwo;

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
          className="border-t border-[#D9D9D9] py-4 cursor-pointer"
        >
          <div className="row gap-3 lg:gap-0 lg:items-center">
            {type === 2 && (
              <IconCheck className='size-3.5 fill-[#61C454] mt-1 lg:mt-0' />
            )}

            <h2 className="mx-auto">
              {title}
            </h2>
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
