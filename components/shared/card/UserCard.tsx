import { Badge } from "@/components/ui/badge";
import { getTopInteractedTags } from "@/lib/actions/tags.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "../RenderTags";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });
  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="w-full border-2 max-xs:min-w-full xs:w-[260px]"
    >
      <article className="flex flex-col items-center p-4">
        <div className="relative size-[100px]">
          <Image
            src={user.picture}
            alt="user profile picture"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>

        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            @{user.username}
          </p>
        </div>
        <div className="mt-5">
          {interactedTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => {
                return (
                  <RenderTags key={tag._id} _id={tag._id} name={tag.name} />
                );
              })}
            </div>
          ) : (
            <Badge>Not Tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
