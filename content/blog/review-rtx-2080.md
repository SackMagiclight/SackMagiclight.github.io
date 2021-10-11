---
title:  "【簡易レビュー】EVGA GeForce RTX 2080 XC ULTRA GAMING"
createdAt:   2018-10-10 23:55:00 +0900
categories: 
  - Geforce
  - RTX2080
  - レビュー
alias: '/2018/10/10/review-rtx-2080/'
og:title: '【簡易レビュー】EVGA GeForce RTX 2080 XC ULTRA GAMING'
og:image: 'https://www.gaftalk.com/blog/img/08G-P4-2183-KR_LG_1.png'
---

![](/blog/img/08G-P4-2183-KR_LG_1.png)

米尼で、EVGAの**RTX 2080 XC ULTRA GAMING** を買いました。

発売が遅延するなど、ハプニングも有りましたが、とりあえず届いて一安心です。

すでに大手レビューサイトがRTX2080の製品レビューはしているので、製品のざっくりとした外観とベンチマーク結果のみの簡易レビューをお届けします。

***

### (事前知識) 性能

|                  | RTX 2080 ULTRA GAMING   | GTX 1080   |
|------------------|-------------------------|------------|
| CUDA core        | 2944                    | 2560       |
| FP32[TFLOPS]     | 10.687                  | 8.87       |
| Base Clock[MHz]  | 1515                    | 1607       |
| Boost Clock[MHz] | 1815                    | 1733       |
| Memory           | GDDR6 8GB               | GDDR5X 8GB |
| Memory Bus[GB/s] | 448                     | 320        |
| TDP[W]           | 215                     | 180        |
|**--------------**|**---------------------**|**--------**|
| Value            | $849.99                 | \65,000    |
|**--------------**|**---------------------**|**--------**|

スペックとしては、前世代XX80と比較してメモリ帯域が大幅増です。<br>
現状、検証が不可能なので表には載せていませんが、RTコアとTensorコアが載っています。<br>
（詳しくは [過去記事]()で)

EVGA社はアメリカの企業で、NVIDIA系のグラフィックボードやマザーボード、電源などのパソコンパーツを販売しています。<br>
米国Amazonではシェアトップの人気があり、グローバル保証(正規販売代理店からなら世界中どこで買っても同じ保証)を行っているのが特徴です。~~日本も見習え~~<br>
[EVGA GeForce RTX 2080 XC ULTRA GAMING](https://www.evga.com/products/product.aspx?pn=08G-P4-2183-KR)は**グローバル3年保証**で、**商品出荷時の状態に戻せれば分解OK**という特徴があります。<br>
（EVGAのグラフィックボード全般に言えることですが）

輸入するとだいたい$950程度(\110,000程度)になります。

|Order Summary                 |            |
|------------------|-------------------------|
|Item(s) Subtotal              | $849.99|
|Shipping & Handling           | $32.68|
|Total before tax              | $882.67|
|Estimated tax to be collected | $0.00|
|Import Fees Deposit           | $70.61|
|**Grand Total**               | **$953.28** |

***

### 外観・中身

![](/blog/img/DSC_0001.jpg)

**箱がでかい**

![](/blog/img/DSC_0003.jpg)

**聖剣仕様**

![](/blog/img/DSC_0005.jpg)
![](/blog/img/DSC_0006.jpg)
![](/blog/img/DSC_0007.jpg)
![](/blog/img/DSC_0008.jpg)
![](/blog/img/DSC_0010.jpg)

ファン周りはプラスチックでちょっとチープ感が出ますが、その分ヒートシンクとバックプレートとかに予算回してる感じがします。

![](/blog/img/DSC_0018.jpg)
![](/blog/img/DSC_0020.jpg)
![](/blog/img/DSC_0022.jpg)
[GeForce GTX 1080 GAMING X 8G](https://jp.msi.com/Graphics-card/GeForce-GTX-1080-GAMING-X-8G.html)と比較するとこんな感じになります。<br>
縦横はほとんど変わりませんが2スロと3スロではやはり圧倒的な厚みの差があります。


***

### 分解
せっかく分解OKなので、分解してみましょう。<br>
日本で買うグラボじゃできないですからね。

手順は以下の通りです。

1. PCIブラケットを取り外します。
![](/blog/img/b1.png)
1. バックプレートを取り外します。
![](/blog/img/b2.png)

こんな感じになりました。<br>
バックプレートにサーマルパッドがギッシリです。

![](/blog/img/DSC_0013.jpg)

ヒートシンクを外すにはこの4つのネジを取り外せばOKです
![](/blog/img/b3.png)

![](/blog/img/DSC_0014.jpg)
取り外すとこんな感じに。VRMにもサーマルパッドが。

![](/blog/img/DSC_0016.jpg)
コアを拡大するとこんな感じです。`TU104-400A-A1`はTU104コアのファクトリーOC可能モデルになります。<br>
（因みに、ブロアーファンを搭載しているモデルは`TU104-400-A1`で、ファクトリーOC不可能）

分解したついでにグリスを[Thermal Grizzly](https://www.ark-pc.co.jp/news/article?id=300159)を塗り直しました。

***

### ベンチマーク測定

いろいろ取っていきます。<br>
GPU以外の共通構成は以下の通りです。

|--------------|-------|
|--------------|-------|
| Motherboard |Asrock Fatal1ty X370 Gaming K4|
| Memory       | Samsung M378A1K43BB2-CRC 8G × 2 (DDR4-2400)  |
| CPU   | AMD Ryzen 7 2700X  |
| PSU   | HX750 CP-9020031-JP  |
| CPU Cooler   | Corsair H100i  |

***

#### Fire Strike

![](/blog/img/2080_FS.png)

グラフィックス : 27523<br>
総合 : 19781

[https://www.3dmark.com/3dm/29229199](https://www.3dmark.com/3dm/29229199)

***

#### Fire Strike Extream

![](/blog/img/2080_FSEX.png)

グラフィックス : 13248<br>
総合 : 12192

[https://www.3dmark.com/3dm/29229516](https://www.3dmark.com/3dm/29229516)

***

#### Fire Strike Ultra

![](/blog/img/2080_FSUL.png)

グラフィックス : 6475<br>
総合 : 6607

[https://www.3dmark.com/3dm/29229749](https://www.3dmark.com/3dm/29229749)

***

#### Time Spy

![](/blog/img/2080_TS.png)

グラフィックス : 10938<br>
総合 : 10391

[https://www.3dmark.com/3dm/29230401](https://www.3dmark.com/3dm/29230401)

※通称**10万円の実績**を手に入れました
![](/blog/img/TS.png)

***

#### VRMark Orange Room

![](/blog/img/2080_VROR.png)

平均FPS : 195.36<br>
総合 : 8962

[https://www.3dmark.com/vrm/29231432](https://www.3dmark.com/vrm/29231432)

***

#### VRMark Cyan Room

![](/blog/img/2080_VRCR.png)

平均FPS : 214.26<br>
総合 : 9828

[https://www.3dmark.com/vrm/29231850](https://www.3dmark.com/vrm/29231850)

***

#### VRMark Blue Room

![](/blog/img/2080_VRBR.png)

平均FPS : 77.60<br>
総合 : 3560

[https://www.3dmark.com/vrm/29231850](https://www.3dmark.com/vrm/29231988)


***

#### Mining

![](/blog/img/2080_mining.png)

***

#### BASEMARK GPU

![](/blog/img/2080_BMGPU.png)

総合 : 9528

[https://powerboard.basemark.com/hwsubmit/36524/result](https://powerboard.basemark.com/hwsubmit/36524/result)

***

#### beatoraja FPS

L9999999999999^99999999999とFREEDOM DiVE [FOUR DIMENSIONS]のオートプレイで測定。<br>
基本的に、1画面に映るノーツ数が多ければ多いほどFPSが下がる。<br>
環境は`1920*1080`,`LITONE5`,`プレイグラフ表示あり`の最重設定。<br>

![](/blog/img/BMS_beatoraja_FPS.png)

***

### 消費電力

ワットチェッカーが微妙に破損していたので、正確には取得できていませんがこんな感じでした。

アイドル時：90W <br>
フルロード時：330W (+240W) 

CPUが2700Xであることを考えると、2080はほぼTDP通りと言えるのではないでしょうか。

***

### 発熱

**異次元に冷える**

![](/blog/img/TEMP.png)

ファン90%で回せばフルロード時60℃ほどで推移します。<br>
グリスを変えているとはいえ、ちょっと驚きです。

因みに、冷えている間は1965MHzまでOCします。また、冷えてる間はファンが完全停止します。（オート制御時）

![](/blog/img/OC.png)

***

### 総評

**性能Up、消費電力もUp**  
**4Kなど高解像度環境だと1つの選択肢**  
**現段階ではRT、Tensorの力が発揮できていないので様子見**  
**XC ULTRA は 冷えるぞ**   
**3年保証は いいぞ**   

現状、RTXシリーズの値下がり傾向は無く、年末まではこの水準が続きそうです。  
値下がっても10万円強ぐらいに落ち着くと思われるのでしばらくは個人輸入が良さそうです。

ぶっちゃけ、1080TiにRT,Tensorコア乗っけたぐらいの性能なので、FHD環境やRTを考えない人は1080Tiで良いでしょう。  
将来性に対して投資できるか、が争点のGPUとなりそうです。

XC ULTRAという単体製品で見れば**厚いけどめっちゃ冷える**ですね。  
空冷でここまで冷えるんだ…って感覚です。  
素直にすごいなと思いました。これなら水冷化も必要ないかな…？

