import Header from '@/components/header'
import HeroComponent from '@/components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 p-4 lg:pl-20 lg:pr-20">
      <Header />
      <HeroComponent />
    </main>
  );
}
