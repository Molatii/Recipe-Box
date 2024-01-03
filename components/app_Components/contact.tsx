import { GrContact } from "react-icons/gr";
import Image from "next/image";

export default function ContactUSComponent() {
  return (
    <div className="w-full flex flex-col text-center mb-4 pt-0 p-4 pb-12 lg:pl-20 lg:pr-20">
      <div
        className="w-full h-[310px] relative mb-8"
        style={{
          backgroundImage: "url('/c.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      ></div>
      <div className="flex flex-col">
        <div className="inline-flex justify-center mt-2 gap-2">
          <p className="text-center text-gray-600 sm:text-3xl text-xl font-bold drop-shadow-md">
            <span className="text-green-500">Contact </span>Us
          </p>
          <p className="text-gray-600 sm:text-2xl text-xl mt-1 font-bold drop-shadow-md">
            <GrContact />
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
        <div className="flex  items-center">
          <Image
            src="/c.svg"
            alt="Image 1"
            width={55}
            height={55}
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center text-green-500 text-xl font-semibold mb-4">
            Our Contact details
          </p>
          <ul className="text-left m-8 gap-2">
            <li>
              <span className="font-semibold">Email Address: </span>
              contact@recipebox.com.
            </li>
            <br />
            <li>
              <span className="font-semibold">Phone Number: </span>+266 59911982
            </li>
            <br />
            <li>
              <span className="font-semibold">Physical Address: </span>
              Lesotho,Maseru
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
