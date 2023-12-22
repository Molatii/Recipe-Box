import CTAComponent from "@/components/ctaComponent";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroComponent from "@/components/hero";
import PopularComponent from "@/components/popularComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />
      <HeroComponent />
      <PopularComponent />
      <Features />
      <div className="p-4 lg:pl-20 lg:pr-20 mt-12">
        <p className="mb-8">
          Special file conventions are used to create UI for each routeThe most
          common are pages to show UI unique to a and layouts to show UI that is
          shared across multiple routes. For example, to create your first page,
          add a page.js file inside the app directory and export a React
          component:
        </p>
      </div>
      <CTAComponent />
      <Footer />
    </main>
  );
}
