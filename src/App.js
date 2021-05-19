import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
// import imageToBase64 from "image-to-base64";
// import SignatureCanvas from "react-signature-canvas";

function App() {
  // const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();

  const decode = () => sigCanvas.current.clear();

  const base64ToArrayBuffer = (base64) => {
    var output = "";
    for (var i = 0; i < base64.length; i++) {
      output += base64[i].charCodeAt(0).toString(2);
    }
    console.log(output);
    return output;
  };

  const save = () => {
    const alp = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const base = alp.replace(/^data:image.+;base64,/, "");
    console.log(typeof base);
    base64ToArrayBuffer(base);

    // const bin = base64.decode(base);
    console.log(base);
    // const bin = Uint8Array.from(window.atob(base), (v) => v.charCodeAt(0));
    // console.log(bin);
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
    </div>
  );
}

export default App;
