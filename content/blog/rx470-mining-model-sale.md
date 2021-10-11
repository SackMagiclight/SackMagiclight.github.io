---
title:  "RX470 マイニングモデルを動かす"
createdAt:   2019-01-19 23:40:00 +0900
categories: 
  - GPU
  - AMD
  - Radeon

og:title: 'RX470 マイニングモデルを動かす'
og:image: 'https://www.gaftalk.com/blog/img/rx470_mining_model_sale/dxQAsxMU0AIf8a1.jpg'
---

<br>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">マイニング用RX470買ったー<br>HDMIめっちゃ隠れてる <a href="https://t.co/ybb0iq8Bof">pic.twitter.com/ybb0iq8Bof</a></p>&mdash; 海岸砂丘 (@sack_magiclight) <a href="https://twitter.com/sack_magiclight/status/1086494184993783808?ref_src=twsrc%5Etfw">2019年1月19日</a></blockquote>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">いえーい <a href="https://t.co/dwAdOuNUeo">pic.twitter.com/dwAdOuNUeo</a></p>&mdash; 海岸砂丘 (@sack_magiclight) <a href="https://twitter.com/sack_magiclight/status/1086582714461896705?ref_src=twsrc%5Etfw">2019年1月19日</a></blockquote>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">素のRX470と変わらないスコアで草<br>GTX1060同等やんけ <a href="https://t.co/ln5jCE8wNu">pic.twitter.com/ln5jCE8wNu</a></p>&mdash; 海岸砂丘 (@sack_magiclight) <a href="https://twitter.com/sack_magiclight/status/1086595662437769216?ref_src=twsrc%5Etfw">2019年1月19日</a></blockquote>

[例の税別5,980円グラボ](https://www.pc-koubou.jp/products/detail.php?product_id=664731)を買いました。

すんなり動いてくれたので当たり個体だと思います。  
ハズレはデバイスマネージャーで認識しないらしい…

## 動作までの道のり

### 共通
* 指してデバイスマネージャーで認識するか確認する
* 認識するがエラーの場合、vBIOSを書き換え、エラーが解消するか確認する
  * [atiflash](https://www.techpowerup.com/download/ati-atiflash/)
  * [vBIOS - Sapphire.RX470.8192.160715.rom](https://www.techpowerup.com/vgabios/187669/sapphire-rx470-8192-160715)
  * `atiwinflash -f -p 0 Sapphire.RX470.8192.160715.rom`
* [Radeonドライバを入れる](https://www.amd.com/ja/support/graphics/radeon-400-series/radeon-rx-400-series/radeon-rx-470)

### iGPUを利用する場合
* Windows10 の [設定] -> [システム] -> [グラフィックの設定] からRX470で動作させるアプリケーションを選択する
* RX470で動作しているかアプリケーションで確認する（FPS値の確認、ベンチマークスコアでの確認等）

### 搭載されているHDMIを利用する場合
* ブラケットのHDMI端子部分を切る
* 未実装の信号線部分を実装する（セラミックコンデンサをハンダ付け）
* HDMI端子動作確認

※詳しくは[こちら](https://media.dmm-make.com/item/4515/)

***

Core i5/7 6XXX 系以降のCPUと組み合わせ、iGPU描画させるのがリスクも少なく、おすすめです。