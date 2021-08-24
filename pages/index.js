import Head from "next/head";

// Components
import Header from "components/layouts/Header/Header";
import Features from "components/layouts/Features/Features";
import Footer from "components/layouts/Footer/Footer";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Head>
        <title>Shortly - More than just shorter links</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Precious Adeyinka" />
        <meta
          name="description"
          content="A URL shortener application - More than just shorter links"
        />
        <meta
          name="keywords"
          content="url, link, shortener, track, analytics"
        />
        <meta name="theme" content="hsl(180, 66%, 49%)" />
        <meta name="theme-color" content="hsl(180, 66%, 49%)" />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
          integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Fonts */}

        {/* Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />

        {/* Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="h-auto w-full">
        <Header />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
