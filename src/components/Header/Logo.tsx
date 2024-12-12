import Image from "next/image";
import Link from "next/link";
import profileImg from "../../../public/logo.jpg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="profile"
          className="w-full h-auto rounded-full"
        />
      </div>
    </Link>
  );
}
