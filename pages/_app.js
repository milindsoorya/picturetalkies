import MainLayout from "Layouts/MainLayout";

import "Assets/Sass/Style.scss";
import "Assets/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
