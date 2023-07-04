
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "bd5cc424-502d-4893-99b6-0b6d9a1622d1",
    firstName: "Aniket",
    lastName: "Lawaniya",
    username: "aniketlawaniya",
    password: "password@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Web Developer",
    website: "http://www.aniketl.bio.link",
    profileUrl: "https://pbs.twimg.com/profile_images/1621849739322085377/gv-irSHv_400x400.jpg",
    followers: [
      {
        _id: "f1bc38a3-5208-424e-baa1-77aa98cba813",
        firstName: "Elon",
        lastName: "Musk",
        username: "elonmusk",
        profileUrl:
          "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      },
    ],
    following: [
      {
        _id: "f1bc38a3-5208-424e-baa1-77aa98cba813",
        firstName: "Elon ",
        lastName: "Musk",
        username: "elonmusk",
        profileUrl:
          "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      },
    ],
  },
  {
    _id: "4b50c659-44e4-49a4-b446-4da2f196f6bd",
    firstName: "Gabbar",
    lastName: "Singh",
    username: "GabbarSingh",
    password: "gabbar@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Founder @GingerMonkey",
    website: "https://www.hoodapp.com",
    profileUrl:
      "https://pbs.twimg.com/profile_images/1558914040164143104/HVRm70b8_400x400.jpg",
    followers: [],
    following: [],
  },
  {
    _id: "f1bc38a3-5208-424e-baa1-77aa98cba813",
    firstName: "Elon ",
    lastName: "Musk",
    username: "elonmusk",
    password: "elon@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "SpaceX",
    website: "",
    profileUrl:
    "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
    followers: [
      {
        _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
        firstName: "Aniket",
        lastName: "Lawaniya",
        username: "aniketlawaniya",
        profileUrl: "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
      },
    ],
    following: []
  },
  {
    _id: "28865d2e-3813-43a3-9ed3-17eb42b69830",
    firstName: "Tanmay",
    lastName: "Bhat",
    username: "tanmaybhat",
    password: "pswrd123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Youtuber",
    website: "",
    profileUrl:
      "https://pbs.twimg.com/profile_images/870589688465182720/RhRnOiGG_400x400.jpg",
    followers: [],
    following: [],
  },
];
