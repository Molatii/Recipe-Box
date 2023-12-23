import CTAComponent from "@/components/app_Components/ctaComponent";
import Footer from "@/components/app_Components/footer";
import Header from "@/components/app_Components/header";
import { SiGnuprivacyguard } from "react-icons/si";

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />
      <div className="w-full flex flex-col text-center mb-4 p-4 py-12 lg:pl-20 lg:pr-20">
        <div className="inline-flex gap-2">
          <p className="text-left mb-8 text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <span className="text-green-500">Privacy </span>Policy
          </p>
          <p className="text-gray-600 sm:text-2xl mt-1 text-xl font-bold drop-shadow-md">
            <SiGnuprivacyguard />
          </p>
        </div>
        <div id="terms" className="text-left text-gray-600">
          <h2 className="text-2xl font-bold mb-4">1. Information Collected</h2>
          <p className="mb-2">
            RecipeBox collects data during the user sign-up process, including
            user names, phone numbers, addresses, etc. Additionally, other
            information is collected when users interact with our platform.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
          <p className="mb-2">
            The data collected is used for internal company analysis and to
            enhance the user experience on our platform.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Sharing of Information</h2>
          <p className="mb-2">
            User information may be shared with third-party service providers
            under specific circumstances, such as for advertising purposes.
            RecipeBox ensures that such sharing complies with relevant privacy
            standards.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            4. Updates to the Privacy Policy
          </h2>
          <p className="mb-2">
            RecipeBox notifies clients of any changes or updates to the Privacy
            Policy through email communication. Users are encouraged to review
            these updates to stay informed about how their information is
            handled.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
          <p className="mb-2">
            Clients can reach out to RecipeBox for privacy-related concerns or
            questions by emailing us at contact@recipebox.com. We are committed
            to addressing any inquiries promptly and transparently.
          </p>
        </div>
      </div>
      <CTAComponent />
      <Footer />
    </main>
  );
}
