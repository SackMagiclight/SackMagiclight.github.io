---
lang: ja
title:  "【簡易レビュー】Ryzen 7 2700X はX370マザーボードでも性能を発揮できるのか"
createdAt:   2018-04-22 00:00:00 +0900
categories: 
  - AMD
  - Ryzen
  - CPU
  - レビュー
alias: '/2018/04/22/review-ryzen7-2700X/'
og:title: '【簡易レビュー】Ryzen 7 2700X はX370マザーボードでも性能を発揮できるのか'
og:image: 'https://www.gaftalk.com/blog/img/DbOZkUMV4AExUmp.jpg'
---

![](/blog/img/DbN7cyqUQAA5lZy.jpg)

というわけで、**Ryzen 7 2700X** を買いました。  
X470チップセットを搭載したマザーボードも同時発売されましたが、スルーしました。  
**X370マザーボードで満足行く性能が出れば不要と思ったからです。**  

果たしてこの判断は正しかったのか。  
換装前の1700Xと比較した簡易レビューを交えつつ、判定します。

***

### (事前知識) CPUの性能

|-----------------------|2700X     |(参考)1800X|
|-----------------------|----------|-----------|
| Cores                 | 8        |8          |
| Threads               | 16       |16         |
| Base Clock            | 3.7GHz   |3.6GHz     |
| Boost Clock           | 4.3GHz   |4.0GHz     |
| TDP                   | 105W     |95W        |
| 最大温度               | 85℃     |95℃       |
| 付属クーラー           | あり     |なし        |
| CMOS                  | 12nm     |14nm        |
| ソケット               | AM4      |AM4         |
|**-------------------**|**------**|**-------**|
| Value(2018/04/21現在) | ¥41,018  |¥36,709    |
|**-------------------**|**------**|**--------**|

一言で言うなら「微細化した分盛ったよ！」なCPUです。（その分TDPも増えていますが…）  
製造プロセスが14nmから12nmになりました。

ソケットはAM4を継続して利用しています。  
**マザボ変えなくて良いの大きい。**  
また、1800Xと違ってリテールクーラー`Wraith Prism`が付属しています。AMDCPUのリテールクーラーの中では最上位となります。


気になるのは最大温度が10℃下がっている点です。  
今までよりマージンを多く取ったのか…謎です。

***

### 外観・中身

![](/blog/img/DbOZj67VwAA8ItX.jpg)

![](/blog/img/DbOZkUMV4AExUmp.jpg)


特筆することなく、リテールクーラー、CPUといつもの感じです。

***

### 3DMark ベンチ Physical Score

定番ベンチマークソフト3DMark系ベンチマークのPhysical Scoreを比較します。  
なおCPU以外の共通構成は以下の通りです。

|--------------|-------|
|--------------|-------|
| Motherboard |Asrock Fatal1ty X370 Gaming K4 (UEFI 4.60)|
| Memory       | Samsung M378A1K43BB2-CRC 8G × 2 (DDR4-2400)  |
| GPU   | MSI GTX 1080 GAMING X 8G  |
| PSU   | HX750 CP-9020031-JP  |
| CPU Cooler   | Corsair H100i  |

#### Fire Strike Extream

![](/blog/img/DbOxaELVwAAMzgy.jpg)

1700X : 17887  
2700X : **20770** (+16.1%)

大手メディアのスコアが大体21000前後なので、正しそうです。  
**X370マザーボードでも問題なくその性能を発揮していますね。**  
21000に届かないのはDDR4-2400を利用しているからだと思われます。

#### Time Spy

![](/blog/img/DbO0OUTV4AAD9zK.jpg)

1700X : 7301  
2700X : **8400** (+15.1%)

こちらも大手メディアのスコアが大体8800前後なので、正しそうです。

数値を見る限り、大体15％ほどのスペックアップでしょうか。

***

### CineBench r15

![](/blog/img/DbO3skmUQAAk3KG.jpg)

1700X : 1505  
2700X : **1750** (+16.3%)

前述した通り15％ほどのスペックアップで間違いなさそうです。

***

### Mining CriptoNight v7

![](/blog/img/DbOqFTaU8AANpXH.jpg)
![](/blog/img/DbOqFgAU8AAo9kx.jpg)


1700X : 353.9H/s  
2700X : **474.5H/s** (+34.3%)

増えすぎなような気がする（1700Xが小さすぎる？）

因みに、特にOCせず、**デフォルトで4.0GHzまで全コアブースト**するようです。  
やばくね？ X370でも問題なくね？

![](/blog/img/DbOprJwUQAEXC4G.jpg)

***

### 消費電力

アイドル時：131W  
![](/blog/img/DbOnP8FU0AAcwWy.jpg)

マイニング時：219W (+88W)  
![](/blog/img/DbOu3pjVwAA-dYv.jpg)

全コアフルロード時(CineBench)：264W (+133W)  
![](/blog/img/DbO3Tu5U0AE31y8.jpg)

CPU単体だと145W程度の消費でしょうか。  
TDP105Wですが、最大性能発揮時はオーバーするようですね。

***

### 総評

**X370マザボでもいけるやん！**  
**2700X やばくね？**

安いX370マザボと2700Xがかなり強い組み合わせになりそうです。  
少なくとも、ハイエンドRyzen環境を安く構築したい場合はこれでいいのでは？  

|        |                                               | 価格（税込） |
|--------|-----------------------------------------------|------------------|
| CPU    | Ryzen 7 2700X                                 | ¥41,018          |
| M/B    | Asrock Fatal1ty X370 Gaming K4                | ¥15,119          |
| Memory | Corsair CMK16GX4M2A2666C16  (8GB×2)           | ¥21,980          |
| GPU    | Palit  NE5107T015P2-1041J                     | ¥58,980          |
| SSD    | crucial MX500 CT500MX500SSD1/JP (500GB)       | ¥15,670          |
| HDD    | 東芝 MD05ACA600  (6TB)                        | ¥13,737          |
| 電源   | Corsair CX650M CP-9020103-JP                  | ¥6,908           |
| ケース | Fractal Design Define R5                      | ¥11,858           |
| OS     | Windows 10 Home                               | ¥15,000          |
|        |                                               | **¥200,270**    |

OS込20万ドンピシャ構成です。
OSをごにょごにょしたり流用できるところは流用すればもっといい感じになりそうです。

