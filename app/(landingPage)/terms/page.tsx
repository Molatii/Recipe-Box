import CTAComponent from "@/components/app_Components/ctaComponent";
import Footer from "@/components/app_Components/footer";
import Header from "@/components/app_Components/header";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />

      <div className="w-full flex flex-col text-center mb-4 p-4 py-12 lg:pl-20 lg:pr-20">
        <div className="inline-flex gap-2">
          <p className="text-left mb-8 text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <span className="text-green-500">Terms </span>& Conditions
          </p>
          <p className="text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <BsFillFileEarmarkRuledFill />
          </p>
        </div>
        <div id="terms" className="text-left text-gray-600">
          <p className="mb-8">
            Welcome to RecipeBox! These terms and conditions outline the rules
            and regulations for the use of the RecipeBox website. By accessing
            this website, we assume you accept these terms and conditions in
            full. Do not continue to use RecipeBox if you do not accept all of
            the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. The Platform</h2>
          <p className="mb-2">
            1.1. RecipeBox is a platform designed for users to share their food
            recipes with the community.
            <br />
            1.2. The platform includes categories such as breakfast recipes,
            quick home recipes, dessert recipes, and more to facilitate easy
            navigation and discovery.
            <br />
            1.3. Users have the option to make their recipes freely accessible
            to the community or choose a paid option before posting their
            recipes.
          </p>
          <h2 className="text-2xl font-bold mb-4">2. Recipe Posting</h2>
          <p className="mb-2">
            2.1. Users are responsible for the content they post on RecipeBox,
            ensuring it complies with our community guidelines and applicable
            laws.
            <br />
            2.2. Recipes can be categorized based on their type, making it
            easier for users to find and explore a variety of culinary
            creations.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            3. Paid Subscription Option
          </h2>
          <p className="mb-2">
            3.1. RecipeBox offers a paid recipe option for users who wish to
            monetize their recipes.
            <br />
            3.2. Users can choose to make their recipes available for free or
            set a price for access. 3.3. Payments
            <br />
            and transactions related to the paid subscription option will be
            processed securely through our designated payment gateways.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            4. Display of Popular Recipes
          </h2>
          <p className="mb-2">
            4.1. The landing page of RecipeBox will showcase popular recipes,
            providing users with a curated selection of trending culinary
            creations.
          </p>
          <h2 className="text-2xl font-bold mb-4">5. Categories Section</h2>
          <p className="mb-2">
            5.1. A dedicated section on the website will display available
            categories, allowing users to explore recipes based on their
            preferences and interests.
          </p>
          <h2 className="text-2xl font-bold mb-4">6. User Conduct</h2>
          <p className="mb-2">
            6.1. Users are expected to engage with RecipeBox in a respectful and
            lawful manner.
            <br />
            6.2. Any form of harassment, discrimination, or violation of these
            terms and conditions will result in appropriate actions, including
            account suspension or termination.
          </p>
          <h2 className="text-2xl font-bold mb-4">7. Privacy Policy</h2>
          <p className="mb-2">
            7.1. RecipeBox respects user privacy and complies with all relevant
            data protection laws. Please refer to our Privacy Policy for
            detailed information.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            8. Modifications to Terms and Conditions
          </h2>
          <p className="mb-2">
            8.1. RecipeBox reserves the right to modify these terms and
            conditions at any time. Users will be notified of significant
            changes.
          </p>
          <p className="mb-2 mt-4">
            By using RecipeBox, you acknowledge and agree to these terms and
            conditions. If you have any questions or concerns, please contact us
            at contact@recipebox.com.
          </p>
        </div>
      </div>
      <CTAComponent />
      <Footer />
    </main>
  );
}
