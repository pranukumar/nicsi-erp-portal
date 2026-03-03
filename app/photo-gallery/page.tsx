import { redirect } from "next/navigation";

export default function PhotoGalleryRedirectPage() {
  redirect("/media-gallery?tab=photos");
}
