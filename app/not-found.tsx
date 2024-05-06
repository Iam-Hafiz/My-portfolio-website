import Link from "next/link";

export default function notfound() {
  return (
    <main className=" max-w-7xl mx-auto relative flex flex-col justify-center items-center px-2 my-32">
      <h2 className="text-3xl">Sorry there was a problem</h2>
      <p>We couldn&apos;t find the page you were looking for!</p>
      <p>
        Go back to the{" "}
        <Link href="/" className="text-2xl text-blue-600">
          home page
        </Link>
      </p>
    </main>
  );
}
