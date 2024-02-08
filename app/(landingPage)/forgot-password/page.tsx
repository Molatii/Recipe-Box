import { PiBoundingBoxThin } from "react-icons/pi";
import Link from "next/link";
import ForgotPasswordForm from "@/components/app_Components/forgotpassword";


export default function ForgotPassword() {
  return (
    <main className="flex w-full min-h-screen flex-col lg:flex-row">
      <div className="w-full lg:w-[40%] bg-green-500">
        <div className="w-[100%] p-10 justify-center text-center">
          <Link
            href="/"
            className="w-full flex flex-row gap-2 mt-0 lg:mt-[245px] justify-center text-4xl font-semibold whitespace-nowrap text-center"
          >
            <div className="bg-white text-green-500 font-extrabold p-2 mt-1 rounded">
              <PiBoundingBoxThin size={30} />
            </div>
            <span className="text-white mt-2 -mr-2">
              <p className="text-primary">Recipe</p>
            </span>
            <p className="text-gray-500 mt-2">.com</p>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[60%] bg-white justify-center">
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
