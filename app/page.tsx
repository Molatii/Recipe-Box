import Categories from "@/components/app_Components/categories";
import CTAComponent from "@/components/app_Components/ctaComponent";
import Features from "@/components/app_Components/features";
import Footer from "@/components/app_Components/footer";
import Header from "@/components/app_Components/header";
import HeroComponent from "@/components/app_Components/hero";
import PopularComponent from "@/components/app_Components/popularComponent";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />
      <HeroComponent />
      <PopularComponent />
      <Features />
      <Categories />
      <CTAComponent />
      <Footer />
    </main>
  );
}
