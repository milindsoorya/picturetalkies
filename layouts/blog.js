import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "components/Container";
import Twitter from "../Assets/Img/Twitter";

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://picturetalkies.in/review/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  const encodedTitle = encodeURI(frontMatter.title);
  const postUrl = `https://picturetalkies.in/review/${frontMatter.slug}`;
  const hashTags = frontMatter?.hashTags;

  return (
    <Container
      title={`${frontMatter.title} – Picture Talkies`}
      description={frontMatter.summary}
      image={`https://picturetalkies.in${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-start sm:items-center flex-col space-y-2 sm:space-y-0 sm:flex-row">
            <div className="flex">
              <Image
                alt="Author"
                height={24}
                width={24}
                src={frontMatter.authorImage}
                className="rounded-full"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                {frontMatter.by}
                {`${frontMatter.authorName} / `}
                {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
            <p className="hidden sm:flex text-sm text-gray-700 dark:text-gray-300 ml-2">{` • `}</p>
            <p className="text-sm italic text-gray-500 sm:ml-2">
              Originally published at{" "}
              <a
                href={frontMatter.canonicalUrl}
                className="text-blue-500 hover:text-blue-600 hover:underline "
              >
                {frontMatter.canonicalUrl.match(/:\/\/(.[^/]+)/)[1]}
              </a>
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="font-serif text-xl prose dark:prose-dark max-w-none w-full">{children}</div>
        <div className="mt-5 flex place-items-center space-x-4">
          <button class="flex items-center px-3 py-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
            <a
              href={`https://twitter.com/intent/tweet?url=${postUrl}&via=picturetalkies1&text=${encodedTitle}&hashtags=${hashTags}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-svg flex items-center justify-between">
                <Twitter />
                <span className="ml-2">Tweet</span>
              </div>
            </a>
          </button>
          <p className="flex text-3xl text-gray-700 dark:text-gray-300 ml-2">{` • `}</p>
          <div className="text-xl text-gray-900 hover:text-blue-600 hover:underline dark:text-gray-100">
            <a
              className="flex items-center"
              href={discussUrl(frontMatter.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Let's Discuss on Twitter"}

              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </Container>
  );
}
