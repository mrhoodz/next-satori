/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
// import { Svg } from "../components/svg";
// import BgImage from "../../assets/1.png";
export const config = {
  runtime: "edge",
};

const image: any = fetch(
  new URL("../../assets/background.jpg", import.meta.url)
).then((res) => res.arrayBuffer());
const imageLogo: any = fetch(
  new URL("../../assets/qwikLogo.jpg", import.meta.url)
).then((res) => res.arrayBuffer());

const font = fetch(
  new URL("../../assets/Poppins-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontBold = fetch(
  new URL("../../assets/Poppins-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(request: NextRequest) {
  try {
    // console.log(x);
    const { searchParams } = new URL(request.url);

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
        <div
          style={{
            backgroundColor: "black",

            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            color: "pink",
            overflow: "hidden",
          }}
        >
          <img
            height={444}
            width={888}
            style={{ position: "absolute", height: "100%", width: "102%" }}
            src={imageSrc}
            alt="sadsadas"
          />
          <img
            height={208}
            width={206}
            style={{
              position: "absolute",
              // height: "208.77px",
              // width: "206.38px ",
              left: "84.2px",
              top: "131px",
            }}
            src={imageLogoSrc}
            alt="sadsadas"
          />

          {/* <div
            style={{
              position: "absolute",
              backgroundColor: "yellow",
              height: "208.77px",
              width: "206.38px ",
              left: "84.2px",
              top: "131px",
            }}
          >
            s
          </div> */}
          <div
            style={{
              position: "absolute",
              boxShadow: "5px 4px 0px #AC7EF4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Poppins-Medium",
              color: "black",
              borderRadius: "8.6px",
              backgroundColor: "white",
              // fon,
              fontSize: "23.73px",
              fontWeight: "normal",
              height: "39.88px",
              // marginTop: "5px",
              // paddingBlock: "35px",
              paddingLeft: "35px",
              paddingRight: "35px",
              // width: "209.38px ",
              left: "387.2px",
              top: "134px",
            }}
          >
            <span style={{ position: "relative", top: "4px" }}>
              Introducing
            </span>
          </div>
          {/* break */}
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              fontFamily: "Poppins-Bold",
              color: "white",
              fontSize: "34px",
              // height: "36.88px",
              width: "399.38px ",
              left: "387.2px",
              top: "200.74px",
            }}
          >
            A web framework to build instantly loading web apps
          </div>

          {/* <Svg /> */}
        </div>
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
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
