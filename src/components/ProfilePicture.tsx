import { Component } from "solid-js";

type ProfilePictureProps = {
  className?: string;
};

export const ProfilePicture: Component<ProfilePictureProps> = (props) => {
  return (
    <picture class={`${props.className}`}>
      <source srcset="/image-profile-desktop.webp" media="(min-width: 1280px)" width="890" height="1440" />
      <source srcset="/image-profile-tablet.webp" media="(min-width: 768px)" width="646" height="1200" />
      <img src="/image-profile-mobile.webp" alt="profile picture" class={`${props.className}`} width="348" height="766"  />
    </picture>
  );
};