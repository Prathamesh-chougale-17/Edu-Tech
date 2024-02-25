import React from "react";
import { auth } from "@clerk/nextjs";
import Image from "next/image";

const UserImage = () => {
  const { user } = auth();
  return (
    <Image
      src={user?.imageUrl || "/avatar.png"}
      alt="avatar"
      width={40}
      height={40}
    />
  );
};

export default UserImage;
