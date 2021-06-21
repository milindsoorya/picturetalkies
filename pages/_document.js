import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
          <script
            async
            src="https://ackee-analytics-orpin.vercel.app/tracker.js"
            data-ackee-server="https://ackee-analytics-orpin.vercel.app"
            data-ackee-domain-id="f82d35a6-5e5f-405d-85c2-3e9a58e33ad2"
            data-ackee-opts='{"detailed": false, "ignoreLocalhost": true, "ignoreOwnVisits": false}'
          ></script>
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
