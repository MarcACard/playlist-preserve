import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroPlaylist } from "@/components/hero-playlist";
import { WaitlistSection } from "@/components/waitlist-signup";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 py-8 lg:grid-cols-2 lg:py-16">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <h1 className="text-center text-5xl font-bold tracking-tighter lg:text-left lg:text-5xl xl:text-6xl">
                Your Apple Music Playlist Time Machine
              </h1>
              <p className="text-muted-foreground mt-4 text-center text-xl md:text-xl lg:text-left lg:text-2xl">
                Automated playlist snapshots so you can see what changed, when,
                and never lose a song again.
              </p>
              <WaitlistSection />
            </div>
            <div className="flex items-center justify-center">
              <HeroPlaylist />
            </div>
          </div>
        </section>
      </main>
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
