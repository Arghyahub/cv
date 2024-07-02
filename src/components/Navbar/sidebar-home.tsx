import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  UserRound,
  Wrench,
  Paperclip,
  Brain,
  NotebookPen,
  Contact,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent>
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader> */}
        <div className="flex flex-col mt-2 w-full">
          <SheetClose asChild>
            <Link
              href={"/#home"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <Home /> <p className="ml-4">Home</p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/#about"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <UserRound /> <p className="ml-4">About</p>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href={"/#experience"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <Wrench /> <p className="ml-4">Experience</p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/#projects"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <Paperclip /> <p className="ml-4">Projects</p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/#skills"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <Brain /> <p className="ml-4">Skills</p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/blog"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <NotebookPen /> <p className="ml-4">Blogs</p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/#contact"}
              className="flex flex-row items-center hover:bg-neutral-200 py-5 pl-2 rounded-lg w-full hover:font-semibold cursor-pointer"
            >
              <Contact /> <p className="ml-4">Contact</p>
            </Link>
          </SheetClose>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <button type="submit">X</button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
