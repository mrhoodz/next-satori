/* eslint-disable @next/next/no-img-element */
import { FirstLevelRoute } from "@/cardDesigns/_firstLevelRoute";
import { DesignMain } from "@/cardDesigns/designMain";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
// import { Svg } from "../components/svg";
// import BgImage from "../../assets/1.png";
export const config = {
  runtime: "edge",
};

const image: any = fetch(
  new URL("../../assets/background1.jpg", import.meta.url)
).then((res) => res.arrayBuffer());
const imageLogo: any = fetch(
  new URL("../../assets/qwiklogo.png", import.meta.url)
).then((res) => res.arrayBuffer());

const font = fetch(
  new URL("../../assets/Poppins-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontBold = fetch(
  new URL("../../assets/Poppins-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    console.log("fdgfd");

    const imageSrc = await image;
    const imageLogoSrc = await imageLogo;
    const fontData = await font;
    const fontDataBold = await fontBold;

    // ?title=<title>
    const hasTitle = searchParams.has("title");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";
    // console.log("l was called");
    // console.log(imageSrc);
    return new ImageResponse(
      (
        <FirstLevelRoute
          hello={title}
          imageSrc={imageSrc}
          imageLogoSrc={imageLogoSrc}
        />
      ),
      {
        width: 883,
        height: 441,
        fonts: [
          {
            name: "Poppins-Medium",
            data: fontData,
            style: "normal",
          },
          {
            name: "Poppins-Bold",
            data: fontDataBold,
            style: "normal",
          },
        ],
        // debug: true,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
