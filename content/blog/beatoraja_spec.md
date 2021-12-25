---
title:  "beatorajaの最低動作環境 - 重いと感じる原因を探る"
createdAt: 2020-04-25 17:30:00 +0900
categories: 
  - beatoraja
alias: '/2020/04/25/beatoraja-spec/'
og:title: 'beatorajaの最低動作環境 - 重いと感じる原因を探る'
og:image: 'https://www.gaftalk.com/blog/img/logo.png'
---

![](/blog/img/logo.png)

よく**beatorajaが重い**という意見を目にする。  
興味本位で何が原因かを探ってみようとした記録。

## そもそもどれぐらいのスペックなら動くのか

結論から言うと、**市場に出回っている最新世代のCPUなら（ノートPCであっても）全て動く**と思われる。

<iframe width="560" height="315" src="https://www.youtube.com/embed/PS1Wplc7ZXQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

上記の動画は、[LattePanda](http://akizukidenshi.com/catalog/g/gM-12549/) というシングルボードコンピューターでbeatorajaを動作させた記録。  
[Intel Atom x5-Z8350](https://ark.intel.com/content/www/jp/ja/ark/products/93361/intel-atom-x5-z8350-processor-2m-cache-up-to-1-92-ghz.html) + 2GB RAM というタブレットPCと同じスペックでありながら、そこそこ安定して動作しているのがわかる。

市場に出回っているノートPCのほぼ最下限のCPUは [Celeron N4000 なので](https://kakaku.com/specsearch/0020/) 問題なさそう。  
（恵安PCとかはZ8350積んでるけど）

2DゲームはほぼどんなCPUでも動く時代ですかね。


## LR2と比較して

LR2は解像度は常に640×480なのに対し、beatorajaはディスプレイ解像度を上限に変更できる。  
また、プレイ中の密度グラフ・タイミンググラフはLR2にはない機能で、負荷が高い。

## 見直すべきポイント

### 常駐ソフトの存在
CPUを消費しまくっている常駐はないかを確認。  
beatorajaは曲選択後のBMS読み込みに最もCPUリソースを使うため、読み込み遅いなぁとか感じたらまずCPUに負荷がかかっていないか確認する。

## サーマルスロットリング（排熱の確認）
意外と見落としがちかもしれない。

CPUは動作時発熱するが、排熱が適切でないと、CPU自身が性能を落とし、発熱を和らげる機構を持つ。  
例えば300FPSが出るPCを利用していて、FPS設定を300以上にしている場合、FPSに制限をかけていないものと同じ状態になり、

* CPUがめっちゃ動く
* めっちゃ発熱する
* 熱を下げるためにスペックダウンする
* 排熱したのでCPUがめっちゃ動く

を繰り返すことになるため、動作が不安定になりがち。

<iframe width="560" height="315" src="https://www.youtube.com/embed/T1DSZcfa_vc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

上記の動画は、前述したLattePandaにて排熱をしない場合のもの。  
BMSのロードが異常に長く、また動作に関しても不安定。

設定値としては、120FPSぐらいから上げ下げしていくのが良いと思われる。  
60FPSでもダメそうなら垂直同期も試してみる。

開発者のおすすめは「ディスプレイのリフレッシュレートの4倍くらいから」
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">あとVSYNC OFFのFPS 0設定はGPUを限界まで使い切るので熱処理的に長時間起動には向かないと思う。ディスプレイのリフレッシュレートの4倍くらいあれば十分かと</p>&mdash; 両替侍 (@ryougae_samurai) <a href="https://twitter.com/ryougae_samurai/status/1247587473930072067?ref_src=twsrc%5Etfw">April 7, 2020</a></blockquote>

CPU、GPUに対し、適切な冷却を行えていれば、問題ない。

## ディスプレイ解像度を下げる、フルスクリーンモードにする
ウィンドウモードの場合、描画しているのは結局ディスプレイ解像度分なので、フルHDの解像度でHDプレイでも、相応の負荷がかかる。  
フルスクリーンモードであれば、起動時に指定している解像度でディスプレイ解像度が変更されるので、多少負荷が軽減されるはず。

ウィンドウモード（ボーダーレスの場合も同様）でのプレイ時には、ディスプレイ解像度を下げて試してみる。


## beatoraja設定値

### BGA をOFFにする
動画負荷を消すことで、GPUからの発熱を抑える。  
CPU負荷も下げることができる。

### 解像度を下げる
描画に必要な負荷を下げることで、CPU,GPU負荷を軽減する。

### 「起動直後にバックグラウンドで楽曲更新を実行」のチェックボックスを外す
設定画面「リソース」タブにある。  
所持BMSが膨大な場合、CPUがぶん回るので、内部楽曲更新中は不安定になりがち。

### スキン設定：密度グラフ・タイミンググラフ をOFFにする
密度グラフ・タイミンググラフは描画負荷が非常に高いので、余裕がなければOFFにする。  
スキンの設定で変更可能。

### FPS設定
前述の通り、最適な設定を探る。  
[beatoraja動作環境シート](https://docs.google.com/spreadsheets/d/1YF_C12POQxhFR_eX36zWhEQqrRvhu-3uB73Yjq6F2Fg/edit#gid=0) を参考に見るのも良い。

## (おそらく) 間違ってる対応

### beatoraja-config.bat内の「-Xms1g -Xmx4g」定義を書き換える
結論から言うと、効果はない（と思われる）。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">最近、beatoraja-config.bat内のヒープメモリオプションを変えるといいらしい的なコメントを見かけるけど、使用メモリのほとんどはダイレクトバッファ、テクスチャ等のいわゆる非ヒープメモリのためあまり効果はないと思われる</p>&mdash; 両替侍 (@ryougae_samurai) <a href="https://twitter.com/ryougae_samurai/status/1247579969607184384?ref_src=twsrc%5Etfw">April 7, 2020</a></blockquote>

自身でも、上記設定によって確保されるヒープメモリがほとんど使用されないのを確認済み。  
むしろオプションを抜くほうが良いかもしれない。