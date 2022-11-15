import { Component } from "solid-js";

type ProfilePictureProps = {
  className?: string;
};

export const ProfilePicture: Component<ProfilePictureProps> = (props) => {
  return (
    <picture class={`${props.className}`}>
      <source srcset="/image-profile-desktop.webp" media="(min-width: 1280px)" />
      <source srcset="/image-profile-tablet.webp" media="(min-width: 768px)" />
      <img src="/image-profile-mobile.webp" alt="profile picture" class={`${props.className}`}  />
    </picture>
  );
};