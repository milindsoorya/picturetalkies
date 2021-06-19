import Container from "components/Container";

export default function About() {
  return (
    <Container title="About – Picture Talkies">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Us
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            We are a group of Chiniphiles like you, our aim is to explore all the amazing movies,
            series, stories and anything and everthing that we could get our hands on and share it
            with you all.
          </p>
          <p>
            If you like to write for us or have some some amazing stories to share contact us at our
            mail{" "}
            <span className="text-lg font-semibold text-gray-900 hover:text-blue-600 hover:underline dark:text-gray-100">
              picturetalkies123@gmail.com
            </span>{" "}
            or any of the social media handles below.
          </p>
        </div>
      </div>
    </Container>
  );
}
