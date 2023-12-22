import { FeaturesCard } from "../cards/featuresCard";
import { TfiWrite } from "react-icons/tfi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";

export default function Features() {
  return (
    <div className="flex flex-col sm:flex-row bg-slate-100 p-4 py-12 gap-4 justify-center lg:pl-20 lg:pr-20">
      <FeaturesCard
        title={"Recipe Revelry"}
        desc={
          "Pen down your kitchen tales! Share your favorite recipes, from homey classics to experimental delights. Let your kitchen adventures unfold on RecipeBox!"
        }
        icon={TfiWrite}
      />
      <FeaturesCard
        title={"Recipe Freedom"}
        desc={
          "Decide the destiny of your recipe – set it free for all or add a touch of exclusivity with our premium option. Your culinary creations, your choice!"
        }
        icon={MdOutlinePayments}
      />
      <FeaturesCard
        title={"Social Sizzle"}
        desc={
          "Don't keep your kitchen triumphs a secret! Share your recipes across social platforms and let the world taste the magic!"
        }
        icon={IoIosShareAlt}
      />
    </div>
  );
}
