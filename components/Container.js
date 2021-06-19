import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const baseURL = "https://picturetalkies.in";
  const meta = {
    title: "Picture Talkies - A Community for Cinephiles",
    description: `A Community for Cinephiles. Exlporing films, music and art.`,
    image: "${baseURL}/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${baseURL}${router.asPath}`} />
        <link rel="canonical" href={`${baseURL}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Picture Talkies" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@picturetalkies1" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Navbar />
      <main
        id="skip"
        className="flex flex-col flex-grow max-w-6xl mx-auto justify-center px-8 bg-white dark:bg-black"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
