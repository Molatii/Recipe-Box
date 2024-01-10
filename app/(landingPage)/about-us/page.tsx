import AboutComponent from "@/components/app_Components/about";
import CTAComponent from "@/components/app_Components/ctaComponent";
import Footer from "@/components/app_Components/footer";
import Header from "@/components/app_Components/header";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />
     <AboutComponent />
      <CTAComponent />
      <Footer />
    </main>
  );
}
