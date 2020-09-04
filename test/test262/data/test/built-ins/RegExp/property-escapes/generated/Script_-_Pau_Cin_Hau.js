// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Pau_Cin_Hau`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x011AC0, 0x011AF8]
  ]
});
testPropertyEscapes(
  /^\p{Script=Pau_Cin_Hau}+$/u,
  matchSymbols,
  "\\p{Script=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\p{Script=Pauc}+$/u,
  matchSymbols,
  "\\p{Script=Pauc}"
);
testPropertyEscapes(
  /^\p{sc=Pau_Cin_Hau}+$/u,
  matchSymbols,
  "\\p{sc=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\p{sc=Pauc}+$/u,
  matchSymbols,
  "\\p{sc=Pauc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011ABF],
    [0x011AF9, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Pau_Cin_Hau}+$/u,
  nonMatchSymbols,
  "\\P{Script=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\P{Script=Pauc}+$/u,
  nonMatchSymbols,
  "\\P{Script=Pauc}"
);
testPropertyEscapes(
  /^\P{sc=Pau_Cin_Hau}+$/u,
  nonMatchSymbols,
  "\\P{sc=Pau_Cin_Hau}"
);
testPropertyEscapes(
  /^\P{sc=Pauc}+$/u,
  nonMatchSymbols,
  "\\P{sc=Pauc}"
);
