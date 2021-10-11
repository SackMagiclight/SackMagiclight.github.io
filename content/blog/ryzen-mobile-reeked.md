---
title:  "Ryzen Mobile 性能・発売時期のリーク -結局どのぐらい？-"
createdAt:   2017-10-19 00:30:00 +0900
categories: 
  - CPU
  - Ryzen
  - RyzenMobile
  - Radeon
  - AMD

og:title: 'Ryzen Mobile 性能・発売時期のリーク -結局どのぐらい？-'
og:image: 'https://www.gaftalk.com/blog/img/2017-10-19-ryzen_mobile_reeked.jpg'
---

![](/blog/img/2017-10-19-ryzen_mobile_reeked.jpg)

### 発売時期

Zenコアを用いたグラフィック統合CPU(APU)であるRyzenMobileですが、大方の予想通り来年初めのようです

> AMD has made a big impact on the market with its Ryzen architecture and the platform will become even more interesting for compact HTPC builds when the first Ryzen-based APUs are introduced **next year.**<br>
 (Ryzenアーキテクチャを採用したAMDは市場に大きな影響を与えており、**来年初**のRyzenベースのAPUが導入されると、コンパクトなHTPCビルドのプラットフォームはさらに面白くなるでしょう)<br><br>
[Noctua presents two AM4-compatible low-profile coolers](http://noctua.at/en/noctua-presents-two-am4-compatible-low-profile-coolers)

発言者はRoland Mossig（Noctua CEO）です。
CPUクーラーの長が言っているので、まあ間違いないでしょう。
結局、Ryzen初登場から約10ヶ月ほど遅れての登場。だいぶ待たせますねぇ…。

<br>
### 性能

PC Perspectiveが3DMark11を用いた性能リークを行っています。

[AMD Raven Ridge Performance Leaks - APU with GeForce MX150 Performance](https://www.pcper.com/news/Graphics-Cards/AMD-Raven-Ridge-Performance-Leaks-APU-GeForce-MX150-Performance)


| CPU(+GPU)              | Graphics | Physics |
|------------------------|----------|---------|
| Ryzen 7 2700U          | 4072     | 6419    |
| Ryzen 5 2500U          | 3655     | 6577    |
| Core i7 8550U + MX 150 | 4570     | 8278    |
| Core i7 8550U          | 1772     | 6627    |

<br>
これを見るとCPU性能はだいたい**i7 8550U**と同等、GPU性能は**Geforce MX 150**弱ぐらい といった形でしょうか。
もう少し詳しく見ていきましょう。まずはCPUです。

|               | Core/Thread | Base Clock(GHz) | Turbo Clock(GHz) | Cache Memory(MB) | 価格(円)                    |
|---------------|-------------|-----------------|------------------|------------------|-----------------------------|
| Ryzen 7 2700U | 4/8         | 2.2             | 3.8?             | 6(L2+L3)         | ?                           |
| Ryzen 5 2500U | 4/8         | 2.0             | 3.6              | 6(L2+L3)         | ?                           |
| Core i7 8550U | 4/8         | 1.8             | 4.0(TB2.0)       | 8(L3)            | 46,200<br>(1ロット[1000個]) |

Ryzenはベースクロック、i7はブーストクロックとキャッシュメモリが対抗に対して優位と言えるでしょう。

全体性能としてはキャッシュメモリの多いi7側に分がありそうです。

ただし、デスクトップ版Ryzenと同様に価格性能比での勝負となるはずなので、今後の価格リークに注目です。  
(ちなみに、8550U搭載ASUS ZenBook 3 Deluxeは**20万円**、ウルトラハイエンドでなければ**10万円**の製品もあります)

<br>
次はGPUです。

|                          | Compute Unit | Base Clock(MHz) | Boost Clock(MHz) | 3DMark11            |
|--------------------------|--------------|-----------------|------------------|---------------------|
| Radeon Vega M (2700U)    | ?            | ?               | ?                | 4072                |
| Radeon Vega M (2500U)    | ?            | ?               | ?                | 3655                |
| Geforce MX 150(2GB GDDR5)| 384          | 384             | 1468             | 4570 <br>(i7 8550U) |
| Intel UHD Graphics 620   | 192?         | 300             | 1150             | 1772 <br>(i7 8550U) |

内蔵GPUでここまでの性能は素直に関心です。少なくとも、Intelはぶっちぎってますね。

MX150はラップトップ版GT1030です。PSO2やドラクエ10は余裕、FF14は画質落としてまあまあといったところでしょうか。
内蔵GPUであるVega Mでも軽めの3Dゲームは問題なさそうです。

2700Uと2500Uの違いは搭載iGPUの動作周波数の違い、Compute Unit数の違いとも言われていますが、現時点でわかっている要素はありません。


<br>
総評としては、モバイル向けCPUとしてかなりいい線いってる感じですね。

ゲームもまあまあ、コア数もある。

問題は**価格**と、モバイル向けなので**発熱（消費電力[TDP]）**でしょう。

2500Uが5万円台で出てくれば最強なんだけどなーないよなー…
<br>
<br>

TDPに関しては35W以下という噂もありますが、なんとも。

ただ、Vegaコアは低クロックでの性能がいいので、デスクトップ版みたいな爆熱電気食らいにはならなさそうです。

<br><br>
以上、Ryzen Mobileの性能リークでした。

