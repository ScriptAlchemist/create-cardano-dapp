import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthShowcase: React.FC = () => {
  const { data: secretMessage, isLoading } = trpc.useQuery([
    "auth.getSecretMessage",
  ]);

  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className="px-4 py-2 border-2 border-blue-500 rounded-md"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Cardano Dapp</title>
        <meta name="description" content="Generated by create-cardano-dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">Cardano</span> Dapp
        </h1>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">NextJS</h2>
            <p className="text-sm text-gray-600">
              The React framework for production
            </p>
            <a
              className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </section>
          <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">TypeScript</h2>
            <p className="text-sm text-gray-600">
              Strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale
            </p>
            <a
              className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </section>
          <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">TailwindCSS</h2>
            <p className="text-sm text-gray-600">
              Rapidly build modern websites without ever leaving your HTML
            </p>
            <a
              className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </section>
          <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">tRPC</h2>
            <p className="text-sm text-gray-600">
              End-to-end typesafe APIs made easy
            </p>
            <a
              className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </section>
          <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">Next-Auth</h2>
            <p className="text-sm text-gray-600">Authentication for Next.js</p>
            <a
              className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </section>
          <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">Prisma</h2>
            <p className="text-sm text-gray-600">
              Build data-driven JavaScript & TypeScript apps in less time
            </p>
            <a
              className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
              href="https://www.prisma.io/docs/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
