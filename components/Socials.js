// next link
import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        className=" hover:text-accent transition-all duration-300"
        href={"/"}
      >
        <RiYoutubeLine />
      </Link>
      <Link
        className=" hover:text-accent transition-all duration-300"
        href={"/"}
      >
        <RiFacebookLine />
      </Link>
      <Link
        className=" hover:text-accent transition-all duration-300"
        href={"/"}
      >
        <RiInstagramLine />
      </Link>
      <Link
        className=" hover:text-accent transition-all duration-300"
        href={"/"}
      >
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
