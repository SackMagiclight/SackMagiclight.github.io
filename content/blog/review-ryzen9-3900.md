---
lang: ja
title:  "【ベンチまとめ】Ryzen 9 3900X + ASRock X570 Phantom Gaming X"
createdAt:   2019-07-08 22:50:00 +0900
categories: 
  - AMD
  - Ryzen
  - CPU
  - レビュー
  - ASRock

og:title: '【ベンチまとめ】Ryzen 9 3900X + ASRock X570 Phantom Gaming X'
og:image: 'https://www.gaftalk.com/blog/img/r939001.jpg'
---

![](/blog/img/r939001.jpg)

[Ryzen 9 3900X](https://www.amd.com/ja/products/cpu/amd-ryzen-9-3900x) と [ASRock X570 Phantom Gaming X](https://www.asrock.com/mb/AMD/X570%20Phantom%20Gaming%20X/index.asp) を買いました。  
スペック等は他のサイトに任せることにして、外観と取ったベンチをざっくり記述。


## (事前知識) CPUの性能

|-----------------------|3900X     |
|-----------------------|----------|
| Cores                 | 12        |
| Threads               | 24       |
| Base Clock            | 3.8GHz   |
| Boost Clock           | 4.6GHz   |
| TDP                   | 105W     |
| 付属クーラー           | あり     |
| CMOS                  | 7nm     |
| ソケット               | AM4      |
|**-------------------**|**------**|
| Value(2019/07/07現在) | ¥64,584  |
|**-------------------**|**------**|

## 外観・中身

### Ryzen 9 3900X

![](/blog/img/r939002.jpg)

特筆することなく、リテールクーラー、CPUといつもの感じです。  
リテールクーラーは**Wraith Prism with RGB LED**。  
**光るリテールクーラー**。

### ASRock X570 Phantom Gaming X

![](/blog/img/pgx3.jpg)

![](/blog/img/pgx0.jpg)

![](/blog/img/pgx1.jpg)

※無線LAN内蔵のためアンテナ付属
![](/blog/img/pgx2.jpg)

![](/blog/img/pgx4.jpg)

※サーマルパッドのシールは剥がしてM.2SSDと接着しような！！！！  
![](/blog/img/pgx5.jpg)

※ 280mm簡易水冷だとI/Oパネルと干渉しました…  
![](/blog/img/pgx6.jpg)

![](/blog/img/pgx7.jpg)


## ベンチマーク
マザーボードとCPU以外は下記の構成で実施。

|--------------|-------|
|--------------|-------|
| Memory       | CFD W4U3200CM-16G 16G × 2 (DDR4-3200)  |
| GPU   | EVGA RTX 2080 XC ULTRA  |
| PSU   | HX750 CP-9020031-JP  |
| CPU Cooler   | Corsair H100i  |

### Fire Strike Extream Physical Score

![](/blog/img/fs1.jpg)

3900X : **29438**

参考までに、2700Xとの比較（メモリもマザボも違うのであくまでも参考値）

![](/blog/img/fs2.jpg)

### Time Spy Physical Score

![](/blog/img/ts1.jpg)

3900X : **12158**

2700Xとの比較

![](/blog/img/ts2.jpg)

***

### CineBench r15

![](/blog/img/r151.png)

![](/blog/img/r152.png)

Single : **202**  
Multi : **3177**

***

### CineBench r20

![](/blog/img/r201.png)

![](/blog/img/r202.png)

Single : **494**  
Multi : **7038**  
Multi (PBO) : **7240**

※ Precision Boost Overdrive  
**自動OC機能に設けられている電力制限等の上限を取り払って、さらに動作クロックを上昇させる機能**  
ざっくり自動OC時よりも全コア+200MHz。

***

### CPU-Z
![](/blog/img/cpuz1.png)

![](/blog/img/cpuz2.png)

ベンチマークはメモリもガッツリ影響するので参考値。

***

### CristalDiskMark (PCIe3.0 M.2SSD -> PCIe4.0)
![](/blog/img/cdm.png)

旧記録は[こちら](https://ch.nicovideo.jp/sack_miscellaneous/blomaga/ar1105513)

PCIe3.0 M.2SSDを4.0に挿したらどうなるか。  
シーケンシャルが上昇し、Q32T1が悪化。

なお、付属のヒートシンクは使わず、PGXの一体型ヒートシンクを用いました。  
ベンチ中も55℃程度となったので**冷えます**。  
(つまりサーマルスロットリングが起こらなくなった？)

![](/blog/img/cdm2.png)

旧記録では70℃超えてました。


***

### 総評

**CPUは強すぎてやばい**  
**マザボは冷えすぎてやばい**  

なんでこれCPU6万円台で買えるんですかねぇ…
なおゲーミングだと3700Xとあまり変わらないらしいので、普段遣いだと3700X+B450(SteelLegend)がベストな気がする。

マザボはちょいお高めだけどM.2しっかり冷やせるし2.5GLAN付いてるんでまあこんなものでは。  
電源周りもしっかりしてるのでPBOが生きる生きる。

エンコードだと3900Xが強いので

* クリエイター：3900X, 3950X
* ゲーマー：3600X(選別コアのため), 3700X, 3800X

で住み分けられる？