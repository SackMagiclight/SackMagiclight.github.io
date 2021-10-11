---
title:  "Zen2とかの話 一般向けCPUがついに2桁コアに -Computex2019 AMD基調講演-"
createdAt: 2019-05-28 20:00:00 +0900
categories: 
  - AMD
  - Ryzen
  - CPU
  - GPU
  - Radeon
  - Navi
og:title: 'Zen2とかの話 一般向けCPUがついに2桁コアに -Computex2019 AMD基調講演-'
og:image: 'https://www.gaftalk.com/blog/img/computex2019_amd/ryzen3000SeriesReadiness.jpg'
---

## 7nm Zen2 Ryzen 3000シリーズ

![](/blog/img/ryzen3000SeriesReadiness.jpg)

### 発売モデル
ぜーんぶ07/07の**ななの日**に発売決定。まあ日本時間は07/08（月）だろうけど…

|               | Core | Thread | Base Clock | Max Boost Clock | L2 Cache         | L3 Cache        | Bundled CPU Cooler        | TBP  | MSRP | 日本円予想  |
|---------------|------|--------|------------|-----------------|------------------|-----------------|---------------------------|------|------|-------------|
| Ryzen 9 3900X | 12   | 24     | 3.8GHz     | 4.6             | 512KB * 12 (6MB) | 32MB * 2 (64MB) | Wraith Prism with RGB LED | 105W | $499 | 59,800 + 税 |
| Ryzen 7 3800X | 8    | 16     | 3.9GHz     | 4.5             | 512KB * 8 (4MB)  | 32MB * 1        | Wraith Prism with RGB LED | 105W | $399 | 46,800 + 税 |
| Ryzen 7 3700X | 8    | 16     | 3.6GHz     | 4.4             | 512KB * 8 (4MB)  | 32MB * 1        | Wraith Prism with RGB LED | 65W  | $329 | 38,800 + 税 |
| Ryzen 5 3600X | 6    | 12     | 3.8GHz     | 4.4             | 512KB * 6 (3MB)  | 32MB * 1        | Wraith Spire              | 95W  | $249 | 29,800 + 税 |
| Ryzen 5 3600  | 6    | 12     | 3.6GHz     | 4.2             | 512KB * 6 (3MB)  | 32MB * 1        | Wraith Stealth            | 65W  | $199 | 23,800 + 税 |

全モデルにCPUクーラーが付属。ありがたい。  
12コアの3900XはCCXが2つなのでキャッシュが増加。ゲーミングだとCCX跨ぎがマイナスになりそうだが、それ以上にキャッシュが効きそう？  
基調講演ではなかったけど、3600(X)も出るらしい。お安い。  
多分6コア未満のモデルはCPUとしては出さないような気がする…  
（未満モデルはAPUに統合の雰囲気）

(TBPについて)
<blockquote class="twitter-tweet" data-lang="ja"><p lang="en" dir="ltr">Again:<br><br>TBP = Typical (or Total) Board Power<br>used by AMD<br><br>TDP = Thermal Design Power<br>used by NVIDIA<br><br>TBP != TDP<br>🙂</p>&mdash; VideoCardz.com (@VideoCardz) <a href="https://twitter.com/VideoCardz/status/1133353153573859328?ref_src=twsrc%5Etfw">2019年5月28日</a></blockquote>


### 性能
ついにシングルでIntelを負かした。まあ7nmで先行したから当たり前といえば当たり前だが…

Zen+対CoffeeLakeのIPC差は3％ほど。  
CoffeeLakeの最大シングルコア周波数は**5.0GHz**  
Zen2の最大シングルコア周波数は**4.6GHz**  
Zen2はZen+よりIPCが**15％アップ**  
つまり、

Coffee Lake 103 * 5.0 = **515**  
Zen2 115 * 4.6 = **529**  

Zen2 のほうが**約2.7％ほど勝っており**、講演でアピールされた内容（+3％）とほぼほぼ一致する。
（ただし、AMDの言っている"Zen"が第1世代を表すのであれば間違いになる）

> [The new “Zen 2” core widely outperforms the historical generational performance improvement industry trend, up to 15% estimated instructions per clock (IPC)2 uplift over the predecessor “Zen” architecture. ](https://www.amd.com/en/press-releases/2019-05-26-amd-announces-next-generation-leadership-products-computex-2019-keynote)

![](/blog/img/single.jpg)

### 価格
3900XはRyzen 7 1800XとMSRPが同じなので、今回も同じぐらいになると予想。  
[1800Xの発売当初の値段は59800+税](https://t.co/ELaV7n7a8j)  
まあ3700Xか3900Xかねぇ…
3800Xは昔で言う1700Xみたいな感じになりそう。  
（TDPとMSRPからみても 3700X -> 1700, 3800X -> 1700X, 3900X -> 1800Xな感じ）


## X570チップセットM/B

GIGABYTEの最上位[GIGABYTE X570 AORUS XTREME](https://www.gigabyte.com/Motherboard/X570-AORUS-XTREME-rev-10#kf)以外はすべてチップセットに冷却ファンつき。まあGIGAもVRAMヒートシンクとヒートパイプで繋いでるけど。  
発熱やばいんだろうか。

[ラインナップは各社最上位からそこそこ。](https://www.amd.com/ja/chipsets/x570)
![](/blog/img/mb.jpg)


[X570 Taichi](https://www.asrock.com/mb/AMD/X570%20Taichi/)狙ってるけど、多分3.5万円ぐらいだろうか。
（Z390 Taichiが当初3.6万、X470が当初3.2万）

メモリクロックはネイティブ3200に対応しただけあって、OCが4400+とかになってきた（X470だと3466+とか）
せっかくだし4000オーバー狙ってみたいなぁ

なお、X570は第1世代Ryzen(1800X,1700X,1700...)をサポートしない。  
理由はROM不足。
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">非対応ですね。BIOSROMの容量が限界で切りました。</p>&mdash; ASRock Japan (@AsrockJ) <a href="https://twitter.com/AsrockJ/status/1133321368542408704?ref_src=twsrc%5Etfw">2019年5月28日</a></blockquote>


## Radeon RX5000シリーズ

![](/blog/img/rx5000.jpg)

単純に6XXかと思ったが、桁が増えた…  
[アーキテクチャも変わっている。](https://www.4gamer.net/games/337/G033715/20190528044/)  
”リアルタイムグラフィックスに特化したGPUコアアーキテクチャ”らしい…

RX5700がとりあえず7月に出るらしいが、詳細はE3らしい。  
発売日はどうだろうか。07/07で合わせてくるのがインパクトあるが、なかなか難しいんじゃないかなと思っている。（予想は07/21）

性能はRX5700がRTX2070弱、Vega64ぐらいかな？  
基調講演では”Strange Brigade”でRTX2070と比較デモしていましたがこれめっちゃAMD GPUが強いんですよね…  
100FPSちょいらしい。

![](/blog/img/bentch.jpg)  
[guru3d](https://www.guru3d.com/articles-pages/amd-radeon-vii-16-gb-review,15.html)

***

とりあえず、3900X+X570Taichi+高クロックメモリを買う予定。