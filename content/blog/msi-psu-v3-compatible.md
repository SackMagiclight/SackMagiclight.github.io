---
title: MSI電源における「ATX 3.0 Ready」と「ATX 3.0 Compatible」の違い
createdAt: 2023-04-22T22:00:00Z
categories: 
  - 自作PC
  - PSU
  - MSI
---
## 結論から

「ATX 3.0 Ready」と「ATX 3.0 Compatible」はどちらも「一般的には」ATX3.0電源。  
厳密性の違い。  
ぶっちゃけどっち選んでもいいけど、気にする人は「ATX 3.0 Ready」を選ぶんじゃないかな。  

***

下記はMSIの解説ページにある各記述の違いの表。  
https://jp.msi.com/Landing/first-power-supply-unit-for-atx-3-pcie-5  

|                        |MEG POWER SUPPLY(ATX 3.0 Ready)|MPG POWER SUPPLY(ATX 3.0 Compatible)|
|------------------------|-------------------------------|------------------------------------|
|2x Total Power Excursion|               ●               |                 ●                  |
|3x GPU Power Excursion  |               ●               |                 ●                  |
|PCIe 5.0 ready          |               ●               |                 ●                  |
|T0                      |               ●               |                 ●                  |
|T1                      |               ●               |                 ●                  |
|T2                      |               ●               |                 ●                  |
|T3                      |               ●               |                 ●                  |
|T4                      |               ●               |                 ●                  |
|T5                      |               ●               |80 % load                           |
|T6                      |               ●               |                 ●                  |

違うのは一箇所だけで、「T5」の部分。  
T5は「AC loss to PWR_​OK hold-up time」の基準。  
詳しくは↓  
https://edc.intel.com/content/www/us/en/design/ipla/software-development-platforms/client/platforms/alder-lake-desktop/atx-version-3-0-multi-rail-desktop-platform-power-supply-design-guide/2.01/timing-housekeeping-and-control-required/

電源負荷が80%を超えると基準を満たさなくなるので「厳密に言えば」ATX3.0電源ではない。  
が、この部分に完全に準拠していなくてもATX3.0対応を謳う場合がほとんどなので「一般的には」ATX3.0電源といえる。  

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">例えばフル出力したときに負荷変動が基準電圧の下限を割っちゃったりするような性能の悪い電源でも、それを律儀にIntelの設計ガイドの規定に照らし合わせると「ATX電源とは呼べなくなる」ので、そんなことはせずにあらかじめ決めた準拠バージョンを謳って売ることになる</p>&mdash; V​​P​​​С​​F (@vpcf90) <a href="https://twitter.com/vpcf90/status/1649751954091036674?ref_src=twsrc%5Etfw">April 22, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">そしてATX 3.0のPower Excursion (100マイクロ秒で定格出力の2倍の一時的な負荷への対応、とか)はATX 3.0と2.52/2.53を分ける主要な違いの一つなので、基本的にはここの性能を満たすように作ってATX 3.0と謳って売ることになる<br>（テストしてみて性能足りてませんでしたということもやはりある）</p>&mdash; V​​P​​​С​​F (@vpcf90) <a href="https://twitter.com/vpcf90/status/1649752674089463809?ref_src=twsrc%5Etfw">April 22, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">性能足りてないのが明らかになった例はToughpower GF3 1200Wとか<a href="https://t.co/gmyOmx97sv">https://t.co/gmyOmx97sv</a><br><br>ただそれをわざわざ区別して2.52に落としたり、自信のない項目を意図的に製品ページ等で明記しなかったり、MSIのようにReadyとCompatibleを使いわける頓智を使ったりするものではない</p>&mdash; V​​P​​​С​​F (@vpcf90) <a href="https://twitter.com/vpcf90/status/1649754205681508352?ref_src=twsrc%5Etfw">April 22, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

なので、「ATX 3.0 Ready」と「ATX 3.0 Compatible」ぶっちゃけどちらでも良いことになる。他メーカーでは同一視する区別なわけだし。  
わざわざ分けてるMSIが律儀というかなんというか…  
クッソ厳密にATX 3.0に準拠してる電源がほしいなら「ATX 3.0 Ready」の方を選ぶとか、各種テスト結果を参照する必要がある。