export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export const SITE: Site = {
  TITLE: "Prple",
  DESCRIPTION: "Call me Prple, Purp or Purpium. I go by many names.",
  EMAIL: "hello@prple.dev",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Prple's blog",
  DESCRIPTION: "Welcome to my blog where I share my thoughts and projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

// Idk if I should still make this page here or on the main site.
export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects and works.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/Purpium",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Purpium",
  },
  {
    NAME: "Codeberg",
    HREF: "https://codeberg.org/Prple",
  },
  {
    NAME: "Twitch",
    HREF: "https://twitch.tv/prple",
  },
  {
    NAME: "Website",
    HREF: "https://prple.dev",
  },
  {
    NAME: "Youtube - Gaming",
    HREF: "https://youtube.com/c/prplejam",
  },
  {
    NAME: "Youtube - Tech",
    HREF: "https://youtube.com/c/prpledev",
  },
];
