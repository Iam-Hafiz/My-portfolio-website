"use client";

type GlobalErrorProps = {
  error: unknown;
  reset: any;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="max-w-screen-2xl mx-auto">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
