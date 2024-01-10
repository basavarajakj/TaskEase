import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
})
export const Logo = () => {

  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition-opacity items-center justify-center gap-x-2 md:flex hidden">
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={30}
        />
        <p className={cn("text-2xl text-neutral-700 pt-1", headingFont.className)}>TaskEase</p>
      </div>
    </Link>
  )
}