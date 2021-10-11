---
lang: ja
title:  "【簡易レビュー】Asrock DeskMini A300はBMS PCの夢を見るか？"
createdAt:   2019-02-08 18:30:00 +0900
categories: 
  - AMD
  - Athlon
  - CPU
  - Asrock
  - レビュー
alias: '/2019/02/08/review-DeskMini-A300/'
og:title: '【簡易レビュー】Asrock DeskMini A300はBMS PCの夢を見るか？'
og:image: 'https://www.gaftalk.com/blog/img/dsc_0047.jpg'
---

![](/blog/img/dsc_0047.jpg)

[DeskMini A300](https://www.asrock.com/nettop/AMD/DeskMini%20A300%20Series/index.jp.asp) を買いました。 
お値段約2万円。   
目的は**Athlon 200GE + RAM 4GB という最低環境でBMS PCは作れるのか** の検証です。

DeskMini A300 は 2019/02/08 発売の AMD AM4ソケット採用のベアボーンです。  
DeskMini A300 と Athlon 200GEの組み合わせで **持ち運べる BMS PCを作る** ことが目標です。 

[Athlon 200GE](https://www.amd.com/ja/products/apu/amd-athlon-200ge) はAMDの最安モデルとなります。  
CPUコア/スレッドは2C/4Tで、GPUもIntelの競合より強いためライトなゲームであれば普通に動作するのが特徴です。

そこで、今回はライトな2DアプリケーションとしてBMS再生ソフト[beatoraja](https://github.com/exch-bms2/beatoraja)を選択し、BMS PCとしてスペックが足りているかを調査します。

::: tip
Q : LR2 での検証は？  
A : 間違いなく動くものを検証しても面白くないー
:::

## DeskMini A300 外観・中身

![](/blog/img/dsc_0048.jpg)

![](/blog/img/dsc_0050.jpg)

![](/blog/img/dsc_0051.jpg)

外箱はこんな感じ。話によると**日本専用特別パッケージのようです。**  

::: tip
DeskMini A300 日本版は CPUクーラーが付属するためこうなっている
:::

ティッシュ箱と比べてもすでに小さい。

![](/blog/img/dsc_0053.jpg)

![](/blog/img/dsc_0055.jpg)

中身を展開したところ。  
内容物は以下の通り。

* 簡易説明書（**日本語なし**）
* メディアCD
* CPUクーラー
* 専用SATAケーブル
* ACアダプタ
* 本体

そろそろメディアCDじゃなくてUSBメモリになってほしいなぁ…

![](/blog/img/dsc_0057.jpg)

![](/blog/img/dsc_0059.jpg)

付属のCPUクーラーは Athlon 200GEに付属のクーラーと同一と思われます。

![](/blog/img/dsc_0060.jpg)

![](/blog/img/dsc_0061.jpg)

![](/blog/img/dsc_0062.jpg)

![](/blog/img/dsc_0068.jpg)

本体を出したところ。  
フロント側には
* ヘッドホン端子
* マイク端子
* USB3.1(Type-C, Type-A)

がある。

![](/blog/img/dsc_0063.jpg)

リア側には
* DC電源端子
* DisplayPort(1.2)
* HDMI (2.0)
* VGA アナログ端子
* USB 2.0 Type-A (灰色)
* USB 3.1 Type-A (青色)
* 有線LAN端子

がある。

VGA アナログ端子があるのはちょっといいかもね。  
逆にDVIがないけど。

![](/blog/img/dsc_0069.jpg)

裏のネジ4つ（**短いので紛失注意**）を外すと、こんなふうに引き出せる。

![](/blog/img/dsc_0072.jpg)

書いてあるとおり、チップセットは**A300**です。（最下位のチップセット）  
マザーボードのリビジョンが`1.02`らしいけど(よくわから)ないです。

![](/blog/img/dsc_0074.jpg)

Asrock最上位マザーボードTaichiなどに使われる最上位チョークコイル…

![](/blog/img/dsc_0082.jpg)

![](/blog/img/dsc_0083.jpg)

CPU乗っけてメモリとCPUクーラーも載せました。  
CPUクーラーはDeskMini付属のものではなく、Athlon 200GE付属のものを利用しています。

![](/blog/img/dsc_0084.jpg)

裏側に2.5インチSSD（HDD）を2台格納できます。  
画像の位置に設置してある方（説明書では"A位置"って書いてある方）はネジ止めなしのツールフリーで装着可能です。  
（もう片方の位置はマザーボード外してネジ止めしなきゃいけない）  
専用SATAケーブルも装着。


## beatoraja 平均FPS ベンチマーク

おまたせしました。ベンチマークのお時間です。  
特筆することもないので以下の結果をどうぞ。

![](/blog/img/beatoraja_a300_bench.png)

計測に用いたのは連続BMP BGAでノーツ数が多い`Yakumo ＞＞JOINT STRUGGLE -EXTRA-`と動画BGAでそこそこノーツが多い`conflict [EX-HARD]`です。

ざっくり言うと
* FHD,WQHDは余裕で動く
* 4kは譜面次第

ですかね。

LITONE5じゃなければもうすこし余裕が出るかも？。  
まあこの内容ですと、FHD 144Hzあたりで楽しむのが良いかもしれません。

ノーツが多いとFPSは下がります。  
FHDでYakumoのFPSが高いのはおそらく全体処理に含まれる動画処理の割合が高いからと推測できます。

***

### 総評

**FHD環境は思った以上に余裕**  
**4k解像度はギリギリ…**  
**持ち運べるBMS PC …… OK!!!!!!!!!**  

4k解像度が弱い部分に関しては メモリを4GB+4GBのデュアルチャンネルにするなどで改善できそうです。  
個人的にはAthlon 200GE + RAM 4GB という最低環境ながら、FHDが快適に動作したのは意外でした。  
3D処理しないと意外と楽なのかもしれません。

だいたいbeatorajaの動作まで2時間程度で組めました。  
Windows10のインストールが早くなったのがデカイですね。

というわけで、BMSも快適に動作する最低レベルの超コンパクトPCをよろしくお願いします。（唐突な宣伝）

<br><br>
＜検証につかったものたち＞
|        |                            | 価格（税込） |
|--------|----------------------------|--------------|
| CPU    | Athlon 200GE               | ¥6,656       |
| M/B    | DeskMini A300              | ¥19,116      |
| Memory | JetRam JM2666HLH-4G 4GB    | ¥3,680       |
| SSD    | SSD230 TS128GSSD230S 128GB | ¥3,680       |
|        |                            | **¥33,132**      |

※ OSは流用
