import Head from "next/head";
import Navbar from "Layouts/MainLayout/components/Navbar";
import Footer from "Layouts/MainLayout/components/Footer";

const title = "The Cinephile";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="bg-gray-200" style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
