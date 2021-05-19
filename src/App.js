import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import str2bin from "str2bin";

function App() {
  const [imageBinary, setImageBinary] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();

  const base64ToArrayBuffer = (base64) => {
    var finalBinary = str2bin.strToBin(base64);
    setImageBinary(finalBinary);
    return finalBinary;
  };

  const save = () => {
    const alp = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const base = alp.replace(/^data:image.+;base64,/, "");
    base64ToArrayBuffer(base);
  };

  const decode = () => {
    var finalString = str2bin.binToStr(imageBinary);
    console.log("String", finalString);
    const imageSrc = ("src", "data:image/jpg;base64," + finalString);
    setImageSrc(imageSrc);
    console.log("SRC", imageSrc);
    return finalString;
  };

  return (
    <div className="App">
      <SignaturePad
        ref={sigCanvas}
        canvasProps={{
          className: "signatureCanvas",
        }}
      />
      <button onClick={save}>Save</button>
      <button onClick={clear}>Clear</button>
      <button onClick={decode}>Decode</button>,
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px",
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
