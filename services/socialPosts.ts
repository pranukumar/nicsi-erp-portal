export type SocialPost = {
  id: number;
  platform: "X" | "Facebook";
  handle: string;
  postedOn: string;
  text: string;
  postUrl: string;
};

const socialPosts: SocialPost[] = [
  {
    id: 1,
    platform: "X",
    handle: "@MeitY_NICSI",
    postedOn: "Recent",
    text: "Official updates, initiatives, and announcements from NICSI are published on the verified X handle.",
    postUrl: "https://x.com/MeitY_NICSI",
  },
  {
    id: 2,
    platform: "X",
    handle: "@MeitY_NICSI",
    postedOn: "Recent",
    text: "Program highlights and event communications can be tracked through the official social timeline.",
    postUrl: "https://x.com/MeitY_NICSI",
  },
  {
    id: 3,
    platform: "X",
    handle: "@MeitY_NICSI",
    postedOn: "Recent",
    text: "For latest department communication, follow the official channel and open individual posts directly.",
    postUrl: "https://x.com/MeitY_NICSI",
  },
  {
    id: 6,
    platform: "Facebook",
    handle: "GoI.MeitY",
    postedOn: "Recent",
    text: "Community outreach updates and public engagement posts are published on the official page.",
    postUrl: "https://www.facebook.com/MeitY.NICSI",
  },
  {
    id: 7,
    platform: "Facebook",
    handle: "GoI.MeitY",
    postedOn: "Recent",
    text: "Track announcements, campaign updates, and event communication on Facebook.",
    postUrl: "https://www.facebook.com/MeitY.NICSI",
  },
];

export async function getSocialPosts(): Promise<SocialPost[]> {
  return socialPosts;
}
