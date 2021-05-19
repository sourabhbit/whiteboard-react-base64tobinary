import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
// import imageToBase64 from "image-to-base64";
// import SignatureCanvas from "react-signature-canvas";

const binary =
  "01101001 01010110 01000010 01001111 01010010 01110111 00110000 01001011 01000111 01100111 01101111 01000001 01000001 01000001 01000001 01001110 01010011 01010101 01101000 01000101 01010101 01100111 01000001 01000001 01000001 01000011 01010001 01000001 01000001 01000001 01000001 01101100 01000011 01000001 01011001 01000001 01000001 01000001 01000001 01110001 01011000 01000101 01110011 00111001 01000001 01000001 01000001 01000011 01000010 01000101 01101100 01000101 01010001 01010110 01010010 01011001 01010010 00111000 00110011 01011000 01110101 01111001 00110101 01000101 01010101 01010010 01010100 01000111 00111000 01100110 00111000 00111000 01000001 01100001 00110011 01001011 01001010 01010100 01110001 01010110 01010011 01100111 01100111 01001010 01010100 00101011 01000011 01010011 01000101 01001001 01101011 01001001 01000111 01100111 01010101 01000110 01000111 01101100 01010001 01110101 01000110 01010010 01110000 01001101 01001001 00110001 01000111 01010010 01000101 01000001 01010101 01000110 01100010 00110000 01000010 01000011 01011000 01000001 01110000 01110110 01001001 01000111 01101000 01101111 01001110 01000010 00110101 01000010 01110110 01110011 01101110 01011010 01110011 01110010 01001110 01111010 01111010 01101010 01101000 01111010 00110101 01110101 01111001 01111010 00110111 01011000 01001011 01100001 00110111 00110101 01100100 00110001 00111001 01101100 00110101 01110010 01010100 01010001 01101110 01101111 01000010 01111001 01100001 01000001 01000100 00110010 01000011 01000100 01110111 01001011 01100011 01000101 01110010 01000001 01001010 01100010 01101011 01010111 01001101 01111010 01001110 01000101 01101111 01100111 01010110 01010111 01011000 01100100 01001011 01110011 01110111 01011001 01100011 01000010 01000111 01110001 01010101 01000001 01001100 01110000 01011000 01000101 01100101 01100110 01111010 01101010 01101001 01001111 01100111 01011010 01101011 01010001 01001011 01000001 01001110 01010011 00111001 01101000 01001011 01110111 01000111 00110111 01110000 01010011 01001110 01101011 01101001 01010111 01010001 00110010 01000100 01010111 01010001 01101011 00110000 01000011 01110000 00110000 01010110 01010111 01111001 01100111 01010101 01110000 01100101 01111000 01010001 00110100 01110100 01111000 01000001 00110111 00110000 01100011 01010101 01110110 01111000 01000010 01010101 01001000 01010101 01110010 01000010 01100101 00110010 00110101 01101111 01101100 01001111 01000001 01000100 01101101 01101001 01111000 01000001 01101100 01100111 01100100 01110001 01000001 00110111 01100001 01101000 01100001 01111000 01101001 01001000 01101011 01010000 01110110 01000100 01110100 01000101 00110101 01011001 01000101 01010101 01101101 01011001 00110111 01100011 01000001 01010110 00110000 01010111 01000001 01000100 01110110 01100110 01100001 01101111 01100001 01111001 01000100 01101010 01100101 01100111 01001010 01100001 01101001 01010101 01000111 01101100 01000001 00110111 01101001 01011000 00101111 01000010 01000101 01100001 01000001 01001010 01111000 00101011 01100110 01001100 01100111 00110001 01001001 01110101 01010111 00110100 00110011 01100110 01110111 01000100 00110010 01100110 01001000 01010100 00110000 01110100 01001011 01000010 01000111 01011001 01001110 01000101 01011010 01001101 01100011 00101111 01000001 01001111 01010000 01000011 01010011 01011010 00110110 01011000 01010011 01100111 01101011 01111010 01101101 01000101 01010100 01000010 01110100 01000001 01010100 01010100 01111010 00110001 01000010 01001010 01110101 00111000 01101011 01001100 01010110 01000011 01101100 01001011 01110101 00110010 01110011 01000111 01001011 01000010 01011000 01100111 01000110 01010100 01110110 01001100 01100001 01000101 01110010 01001011 01000001 01110100 01000100 00101111 01001110 01001111 01010100 00110011 01110001 01000011 00110001 01100111 01000111 01001110 01001010 01010100 01110010 01001111 01101100 01101100 01000001 01000011 01101000 01010100 01110001 01000100 01000111 01101000 01111001 00110000 01110101 01110110 01110101 01010101 00110001 01101100 01000010 01100011 01010011 00101111 01010000 00110010 01010000 01010001 01000011 01100101 00110111 01001011 01010111 01110001 01010010 00110101 01010001 00110011 01000011 01000001 00110010 01000100 01101100 00110011 01111001 01100111 01010011 01111001 01101111 01100101 01101011 01001000 01001011 01100100 01001010 01100011 00110111 00110100 00110111 01100111 01000100 00101011 01101101 01110000 01000110 00110101 01010001 01000110 01010011 00110101 01101010 00110011 01010001 01001000 01010010 01001110 01100101 00111000 00101011 01100001 01011010 01000110 00110000 01101001 01010111 01010010 00110110 01000001 01110010 01000010 01110001 01010110 01001110 01010110 01000110 01110100 01000011 01110001 01110000 01001101 01101110 01010011 01001001 01000111 00110011 01010001 01001011 00101011 01010100 01110010 01001000 01010110 01000110 00101011 00110111 01101011 00110010 01101000 01111010 00111001 01010000 00110011 01101001 01000001 01000110 01110101 01110100 00110011 01100011 01001001 01000110 01110001 01000010 00111001 00110111 00111001 01000101 01010000 01101011 01000100 01001011 00110001 01001110 01111010 01010100 01010001 01000111 00110110 01110111 01000001 01001101 01001100 01101111 00110101 01010110 01010110 01000110 00101011 01010001 01001100 01001010 01001101 01010001 01010010 01100011 01001111 01101000 01010101 01010010 01110000 01110010 01010000 01100001 00110001 01110101 01101011 01010100 01001010 01001001 01110011 01010111 01001111 00101111 01010111 01101011 01011010 01100111 01110101 01101101 01110101 00110110 01010001 00110111 01000110 01100010 01110011 01001011 00101011 01110111 01011001 01101100 01101111 01010010 01001100 01100010 01010001 01010010 01000101 01100111 01101111 01100010 01010010 01010000 01000011 01010100 01000110 01101111 01010110 01010011 01101111 01010111 01010110 01010010 01010100 01001001 01101111 01001110 01010011 01010000 01110000 01101001 01111000 01010101 01001111 01011000 01101111 01000001 01110110 01111010 00111000 01010110 01000011 01010100 01001011 01101000 01110001 01101111 01111001 01001110 01000101 01101100 01001100 01001110 01110011 00110011 01001010 01000011 01100111 01001010 01010001 01110010 01111000 01001001 01001010 01010110 01001011 01100010 01010101 01001001 01110010 01010011 00110111 01000010 01010001 01000101 01101101 01101111 01100011 01110001 01100111 01001011 01101101 01100101 01001011 00110100 00101111 00110010 01100001 01000111 01010001 00110100 01001101 01000101 01110011 00110001 01001000 00101111 01000001 01110001 01010011 01010111 01101111 01001010 01010111 00110100 00110000 01101000 01110000 00101011 01000001 01001110 01100010 01111001 01010101 01110100 01011010 00101111 01100110 01101101 01110011 01101110 01000001 01000001 01000001 01000001 01000001 01000101 01101100 01000110 01010100 01101011 01010011 01110101 01010001 01101101 01000011 01000011";
function App() {
  // const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();

  const base64ToArrayBuffer = (base64) => {
    var output = "";
    for (var i = 0; i < base64.length; i++) {
      const bin = base64[i].charCodeAt(0).toString(2);
      const pad = 8 - bin.length;
      output += new Array(pad + 1).join("0" + bin) + " ";
    }

    console.log(output.trim());
    return output.trim();
  };

  const save = () => {
    const alp = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const base = alp.replace(/^data:image.+;base64,/, "");
    base64ToArrayBuffer(base);
    console.log(base);
  };

  const decode = (binary) => {
    let finalString = "";
    const splittedBin = binary.split(" ");

    for (let i = 0; i < splittedBin.length; i++) {
      const char = String.fromCharCode(parseInt(splittedBin[i], 2));
      finalString += char;
    }

    console.log(finalString);
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
      <button onClick={() => decode(binary)}>Decode</button>,
    </div>
  );
}

export default App;