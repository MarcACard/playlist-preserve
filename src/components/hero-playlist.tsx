import Image from "next/image";
import { Music } from "lucide-react";

export function HeroPlaylist() {
  return (
    <div className="relative aspect-square w-full max-w-[500px]">
      <div className="absolute inset-0 rotate-3 transform rounded-xl bg-gradient-to-r from-green-500/20 to-green-500/10" />
      <div className="bg-card absolute inset-0 -rotate-3 transform overflow-hidden rounded-xl border shadow-xl">
        <div className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100">
              <Music className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Today&apos;s Top Hits</h3>
              <p className="text-muted-foreground text-sm">Playlist History</p>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-muted/50 flex items-center gap-3 rounded-md p-2">
              <div className="bg-muted h-10 w-10 overflow-hidden rounded">
                <Image
                  src="/images/thatssotrue-abrams.jpeg"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  alt="like JENNIE albumn art"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">That&apos;s So True</p>
                <p className="text-muted-foreground text-xs">Gracie Abrams</p>
              </div>
              <div className="text-xs font-medium text-green-600">
                Added Jan 31
              </div>
            </div>
            <div className="bg-muted/50 flex items-center gap-3 rounded-md p-2">
              <div className="bg-muted h-10 w-10 overflow-hidden rounded">
                <Image
                  src="/images/azizam-sheeran.jpg"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  alt="like JENNIE albumn art"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Azizam</p>
                <p className="text-muted-foreground text-xs">Ed Sheeran</p>
              </div>
              <div className="text-xs font-medium text-green-600">
                Added Apr 3
              </div>
            </div>
            <div className="bg-muted/50 flex items-center gap-3 rounded-md p-2">
              <div className="bg-muted h-10 w-10 overflow-hidden rounded">
                <Image
                  src="/images/anxiety-doechii.jpeg"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  alt="Anxiety albumn art"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Anxiety</p>
                <p className="text-muted-foreground text-xs">Doechii</p>
              </div>
              <div className="text-xs font-medium text-red-500">
                Removed Apr 3
              </div>
            </div>
            <div className="bg-muted/50 flex items-center gap-3 rounded-md p-2">
              <div className="bg-muted h-10 w-10 overflow-hidden rounded">
                <Image
                  src="/images/likejennie-jennie.jpeg"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  alt="like JENNIE albumn art"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">like JENNIE</p>
                <p className="text-muted-foreground text-xs">JENNIE</p>
              </div>
              <div className="text-xs font-medium text-green-600">
                Added Mar 4
              </div>
            </div>
            <div className="bg-muted/50 flex items-center gap-3 rounded-md p-2">
              <div className="bg-muted h-10 w-10 overflow-hidden rounded">
                <Image
                  src="/images/sickomode-scott.jpeg"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  alt="Sicko Mode Album Cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">SICKO MODE</p>
                <p className="text-muted-foreground text-xs">Travis Scott</p>
              </div>
              <div className="text-xs font-medium text-red-500">
                Removed Jul 30
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
