import { FeaturesDataProps } from "@/utils/types";

export const FeaturesCard = ({ title, desc, icon }: FeaturesDataProps) => {
  //`icon` prop to render the icon
  const Icon = icon;

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:w-[30%] w-full">
      <div className="bg-green-500 text-center text-white p-2 rounded-full mb-3">
        <p className="text-4xl p-1">
          <Icon />
        </p>
      </div>
      <p className="text-lg text-center not-italic font-bold text-gray-600 mb-2">
        {title}
      </p>
      <p className="text-base text-slate-500 text-center not-italic mb-2">
        {desc}
      </p>
    </div>
  );
};
