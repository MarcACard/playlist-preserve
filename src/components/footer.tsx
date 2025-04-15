export function Footer() {
  return (
    <footer className="pb-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Playlist Preserve. All rights
            reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Made by{" "}
            <a
              href="https://www.marcacard.com/?ref=playlistpreserve.com"
              target="_blank"
              className="hover:text-primary"
            >
              Marc Anthony Card
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
