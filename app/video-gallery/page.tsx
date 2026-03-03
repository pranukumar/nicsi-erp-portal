import { redirect } from "next/navigation";

export default function VideoGalleryRedirectPage() {
  redirect("/media-gallery?tab=videos");
}
