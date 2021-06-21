// import { useEffect } from "react";
import { useRouter } from "next/router";

import "styles/global.scss";
// import * as ga from "lib/ga";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url);
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      useAckee(
        url,
        {
          server: "https://www.picturetalkies.in/",
          domainId: "f82d35a6-5e5f-405d-85c2-3e9a58e33ad2",
        },
        {
          detailed: false,
          ignoreLocalhost: true,
          ignoreOwnVisits: false,
        }
      );
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
