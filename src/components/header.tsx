import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header>
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-bold">
              Playlist Preserve
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Button size="sm" asChild>
              <Link href="/#waitlist-form">Join Waitlist</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
