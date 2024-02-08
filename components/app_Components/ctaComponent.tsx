import CtaForm from "./ctaForm";

export default function CTAComponent() {
  return (
    <div className="w-full flex flex-col text-center mb-4 p-4 py-12 lg:pl-20 lg:pr-20">
      <div className="flex flex-col">
        <p className="sm:text-4xl text-2xl mb-2 font-bold text-gray-600 italic leading-normal">
          Get <span className="text-green-500">recipe.com</span> updates
        </p>
        <p
          className="text-base font-normal
           leading-normal not-italic text-gray-600"
        >
          Subscribe and be updated on any changes to our services.
        </p>
      </div>
      <div className="flex justify-center">
        <CtaForm />
      </div>
    </div>
  );
}
