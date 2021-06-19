import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
        <MainPost
          date="20 Nov 2020"
          title="What it means when a man falls from outer space"
          slug="backend"
          summary="Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimah's
        playfully subversive style is wholly her own."
          authorImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          authorName="Petru Vîrtos"
        />
        <div className="flex flex-col space-y-8 lg:col-span-3">
          <SecondaryPost
            date="20 Nov 2020"
            title="Mascarpone cheese triangles taleggio"
            slug="backend"
            summary="Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini
          croque monsieur queso airedale brie."
            authorImg="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            authorName="Petru Vîrtos"
          />

          <SecondaryPost
            date="20 Nov 2020"
            title="What it means when a man falls from outer space"
            slug="backend"
            summary="Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimah's
        playfully subversive style is wholly her own."
            authorImg="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            authorName="Petru Vîrtos"
          />
        </div>
      </div>
    </div>
  );
}

function MainPost({ date, title, summary, slug, authorImg, authorName }) {
  return (
    <div className="lg:col-span-2">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">{date}</p>
      <div className="mb-3">
        <Link href={`/review/${slug}`}>
          <a
            aria-label="Article"
            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
              {title}
            </p>
          </a>
        </Link>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">{summary}</p>
      <div className="flex items-center">
        <Link href={`/review/${slug}`}>
          <a aria-label="Author" className="mr-3">
            <img
              alt="avatar"
              src={authorImg}
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
        </Link>
        <div>
          <Link href={`/review/${slug}`}>
            <a
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {authorName}
            </a>
          </Link>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryPost({ date, title, summary, slug, authorImg, authorName }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">{date}</p>
      <div className="mb-3">
        <Link href={`/review/${slug}`}>
          <a
            aria-label="Article"
            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
              {title}
            </p>
          </a>
        </Link>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">{summary}</p>
      <div className="flex items-center">
        <Link href={`/review/${slug}`}>
          <a aria-label="Author" className="mr-3">
            <img
              alt="avatar"
              src={authorImg}
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
        </Link>
        <div>
          <Link href={`/review/${slug}`}>
            <a
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {authorName}
            </a>
          </Link>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
    </div>
  );
}
