import ContactUSComponent from "@/components/app_Components/contact";
import CTAComponent from "@/components/app_Components/ctaComponent";
import Footer from "@/components/app_Components/footer";
import Header from "@/components/app_Components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />
      <ContactUSComponent />
      <CTAComponent />
      <Footer />
    </main>
  );
}
