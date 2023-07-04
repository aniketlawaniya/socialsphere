import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "May all your worries be as away as Bangalore airport is from Bangalore. Good morning.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "aniketlawaniya",
    createdAt: "05:56 PM April 10,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "OpenAI's artificial intelligence is like having a genius roommate who always has the answer, but also insists on making terrible puns at the worst times. Can't decide if I love it or want to unplug it! ",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
          firstName: "Aniket",
          lastName: "Lawaniya",
          username: "aniketlawaniya",
          profileUrl:
            "https://pbs.twimg.com/profile_images/1621849739322085377/gv-irSHv_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "GabbarSingh",
    createdAt: "05:56 PM June 10,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "OpenAI's AI art is like Picasso on caffeine, with a touch of Van Gogh's wild imagination. It's mind-blowing how machines can create masterpieces. I just hope they don't start demanding their own art exhibitions! ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        content: "True That!",
        _id: uuid(),
        username: "aniketlawaniya",
        createdAt: formatDate(),
      },
    ],
    username: "elonmusk",
    createdAt: "05:56 PM June 15,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Just witnessed a squirrel performing acrobatics on a tightrope of power lines. Nature's own circus!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "GabbarSingh",
    createdAt: "05:56 PM June 17,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Finally finished that massive novel I've been carrying around for months. My arms are grateful for the weight loss, and my brain feels like it just ran a marathon. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "GabbarSingh",
    createdAt: "05:56 PM June 18,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Slept like a hibernating bear last night and woke up feeling as refreshed as a daisy. Time to conquer the day with a smile and a strong cup of coffee! ☕️ #SleepGoals #MorningMotivation",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "aniketlawaniya",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "OpenAI's AI predictions are so accurate that I'm convinced they have a crystal ball. But hey, can they tell me if my favorite TV show will get renewed for another season? Priorities, AI, priorities!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "aniketlawaniya",
    createdAt: "05:56 PM June 21,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "So much Space🚀",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "elonmusk",
    createdAt: "05:56 PM June 28,2023",
    updatedAt: formatDate(),
  },
];
