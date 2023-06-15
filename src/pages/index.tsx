/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello motto asdfsdfds</h1>
      <img
        // width={208}
        // height={94}
        src="/api/og?title=introducings&subTitle=Iam the subtitle title here"
        alt="dynamic image goes here"
      />
      <p>asdasd</p>
    </>
  );
}
