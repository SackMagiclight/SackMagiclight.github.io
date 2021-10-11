---
title:  "3200MHz ネイティブメモリを買いました"
createdAt: 2019-06-07 21:30:00 +0900
categories: 
  - メモリ

og:title: '3200MHz ネイティブメモリを買いました'
og:image: 'https://www.gaftalk.com/blog/img/micron_3200/cl.jpg'
---

![](/blog/img/c8cCwUYAAskvR.jpg)

Zen2のために[W4U3200CM-16G](https://www.cfd.co.jp/product/memory/desk-ddr4/w4u3200cm-16g/)を買いました。  
意外と調べても詳細なスペックがなかったので記録として。

### 要約

* ランクは Dual Rank (2枚差しなら問題ないが4枚使って64GB - 3200Mhzは厳しい)
* 3200MHzが1.2Vで回るネイティブメモリ
* メモリチップは Micron E-die
* XMP設定は記録なし

![](/blog/img/snap20190607205423.png)

```
-------------------------------------------------------------
                         MEMORY MODULE
-------------------------------------------------------------
Manufacturer             : Micron Technology
Series                   : Not determined
Part Number              : 16ATF2G64AZ-3G2E1
Serial Number            : 21A39D07h
Lot Number               : DPAMFNP001
JEDEC DIMM Label         : 16GB 2Rx8 PC4-3200AA-UB1-11
Architecture             : DDR4 SDRAM UDIMM
Speed Grade              : DDR4-3200AA
Capacity                 : 16 GB (16 components)
Organization             : 2048M x64 (2 ranks)
Register Manufacturer    : N/A
Register Model           : N/A
Manufacturing Date       : April 22-26 / Week 17, 2019
Manufacturing Location   : Xian, China (MXA)
Revision / Raw Card      : E1 / B1 (8 layers)
-------------------------------------------------------------
                        DRAM COMPONENTS
-------------------------------------------------------------
Manufacturer             : Micron Technology
Part Number              : D9WFL (MT40A1G8SA-062E:E)
Package                  : Standard Monolithic 78-ball FBGA
Die Density / Count      : 8 Gb E-die (19 nm) / 1 die
Composition              : 1024Mb x8 (64Mb x8 x 16 banks)
Clock Frequency          : 1600 MHz (0.625 ns)
Minimum Timing Delays    : 22-22-22-52-74
Read Latencies Supported : 28T, 26T, 24T, 23T, 22T, 21T, 20T...
Supply Voltage           : 1.20 V
XMP Certified            : Not programmed
XMP Extreme              : Not programmed
SPD Revision             : 1.1 / September 2015
XMP Revision             : Undefined
```

***

手持ちの [ASRock Fatal1ty X370 Gaming K4](https://www.asrock.com/mb/AMD/Fatal1ty%20X370%20Gaming%20K4/index.jp.asp) +2700X だと2933MHzが限度でした。  
まあ仕様どおり。