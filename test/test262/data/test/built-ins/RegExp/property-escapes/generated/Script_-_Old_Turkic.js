// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Old_Turkic`
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
    [0x010C00, 0x010C48]
  ]
});
testPropertyEscapes(
  /^\p{Script=Old_Turkic}+$/u,
  matchSymbols,
  "\\p{Script=Old_Turkic}"
);
testPropertyEscapes(
  /^\p{Script=Orkh}+$/u,
  matchSymbols,
  "\\p{Script=Orkh}"
);
testPropertyEscapes(
  /^\p{sc=Old_Turkic}+$/u,
  matchSymbols,
  "\\p{sc=Old_Turkic}"
);
testPropertyEscapes(
  /^\p{sc=Orkh}+$/u,
  matchSymbols,
  "\\p{sc=Orkh}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010BFF],
    [0x010C49, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Old_Turkic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Old_Turkic}"
);
testPropertyEscapes(
  /^\P{Script=Orkh}+$/u,
  nonMatchSymbols,
  "\\P{Script=Orkh}"
);
testPropertyEscapes(
  /^\P{sc=Old_Turkic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Old_Turkic}"
);
testPropertyEscapes(
  /^\P{sc=Orkh}+$/u,
  nonMatchSymbols,
  "\\P{sc=Orkh}"
);
