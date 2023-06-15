/* eslint-disable @next/next/no-img-element */
export const DesignMain = ({ hello, imageSrc, imageLogoSrc }: any) => {
  return (
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
      {/* <img
        height={444}
        width={888}
        style={{ position: "absolute", height: "100%", width: "102%" }}
        src={imageSrc}
        alt="sadsadas"
      /> */}
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
        <span style={{ position: "relative", top: "4px" }}>{hello}</span>
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
  );
};
