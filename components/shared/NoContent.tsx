import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoContent = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-8">
      <Image
        src="/assets/images/light-illustration.png"
        alt="Nothing"
        width={269}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="Nothing"
        width={269}
        height={200}
        className="hidden object-contain dark:block"
      />
      <div className="text-dark200_light900 flex flex-col items-center">
        <h2 className="h2-bold">{title}</h2>
        <p className="paragraph-regular text-center">{description}</p>
        <Link
          href={link}
          className="primary-gradient h-[46px] w-[173px] rounded-lg"
        >
          <Button className="size-full px-4 py-3">{linkTitle}</Button>
        </Link>
      </div>
    </div>
  );
};

export default NoContent;
