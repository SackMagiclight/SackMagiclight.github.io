---
title:  "beatoraja トラブルシューティング"
createdAt:   2017-11-23 13:00:00 +0900
categories: 
  - bms
  - beatoraja
alias: '/2017/11/23/beatoraja-qa/'
og:title: 'beatoraja トラブルシューティング'
og:image: 'https://www.gaftalk.com/blog/img/2017-11-23-beatoraja_qa1.png'
---

### これは何？

beatorajaのエゴサでよく見かけたトラブルのまとめ。  
v0.6.7 が対象。

### Q&A
***

#### Q:入れ方わからん

**A:導入解説動画作ったんで見て…**  

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">beatoraja インストールから起動まで（Windows環境） <a href="https://t.co/16zqFJcAVA">pic.twitter.com/16zqFJcAVA</a></p>&mdash; 海岸砂丘 (@sack_magiclight) <a href="https://twitter.com/sack_magiclight/status/1028612578719592448?ref_src=twsrc%5Etfw">2018年8月12日</a></blockquote>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">beatoraja コンフィグ設定編（かなり端折り気味）<br><br>詳細はここ確認してな→<a href="https://t.co/7mQecuwRTK">https://t.co/7mQecuwRTK</a> <a href="https://t.co/UaQl9z4qgk">pic.twitter.com/UaQl9z4qgk</a></p>&mdash; 海岸砂丘 (@sack_magiclight) <a href="https://twitter.com/sack_magiclight/status/1029019509946867719?ref_src=twsrc%5Etfw">2018年8月13日</a></blockquote>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">2分半でできる beatoraja プレイ編 <a href="https://t.co/voWRhB77YN">pic.twitter.com/voWRhB77YN</a></p>&mdash; 海岸砂丘 (@sack_magiclight) <a href="https://twitter.com/sack_magiclight/status/1049313119690838017?ref_src=twsrc%5Etfw">2018年10月8日</a></blockquote>

***

#### Q:ぶっちゃけ重くね？

**A:思い込みです**  
当たり前ですが、解像度を高く設定すればLR2より重くなります。  
（LR2は640*480のみサポート）

LR2 vs beatoraja (0.6.4時点。0.6.7では更に軽い)
https://docs.google.com/spreadsheets/d/1NGPc_qBwAk-vrl3zVtz-y-14BhXVQkWHwyV2fCaLkIQ/edit#gid=1998369886

ぶっちゃけAtomとかのモバイル向けCPUでなければ60FPS以上は問題なく出せるはず。

***
#### Q:選曲したらなんか画面いっぱいにコーヒー豆が…

**A:プレイスキンを設定していないのが理由です**  
起動時のコンフィグで[Skin]タブを確認してください。

![](/blog/img/2017-11-23-beatoraja_qa1.png)

「スキン」欄が空欄であれば設定されていません。  
最低限下記のモードについて設定することをおすすめします。
* 7KEYS
* 5KEYS
* 14KEYS
* MUSIC SELECT
* DESIDE (選曲決定時)
* RESULT
* COURCE RESULT

***
#### Q:判定位置、ノーツ表示時間って選曲画面とかで変えられないの？…いちいち再起動するの面倒なんだけど…

**A:START+SELECT同時長押し or 数字[5]キー長押し で詳細設定オプションが開きます**  

![](/blog/img/2017-11-23-beatoraja_qa2.png)

* DURATION : ノーツ表示時間
* JUDGE TIMING：判定位置

となります。

***
#### Q:LR2では動いてbeatorajaも選曲時までは動くんだけどプレイ画面になった瞬間スタートボタン以外効かなくなってしまう…

**A:選曲時にキーボードで選曲決定していませんか？**  
専コンで選曲決定しましょう。  
確か不正対策による仕様だったはず。  
（選曲時に利用した形式(コントローラorKB)以外は無効化される…はず）

***
#### Q:起動時に専コンが効かないんだけど… というかなんかキーアサインがおかしい？

**A:コントローラーごとのキーコンフィグが可能なので、まずそこを見直そう**  
* キーコンフィグ([6]キー)を開く
* [2]キーで使用するデバイス（専コン）を選択できます
* 複数コントローラーを挿している場合、動かしたいコントローラーが選択されているか確認してください

***
#### Q:カスタムフォルダ無いの？

**A:あるよ**  
`folder\default.json`を参考に真似して作ってみて、どうぞ。  
LR2と同じくSQL形式です。

***
#### Q:楽曲追加の仕方は？

**A:コンフィグ起動から`[リソース]->[BMS Path]`で[+]ボタンを押すか、フォルダをリスト領域にD&Dする**  

***
#### Q:`[リソース]->[BMS Path]`にフォルダ追加したけど、楽曲読み込んでくれない…

**A1:`起動直後にバックグラウンドで楽曲更新を実行`にチェックを入れるか、手動で楽曲更新する**  

**A2:起動後、選曲画面でフォルダ選択中に[F2]キーを押す**  

***
#### Q:3,5,7鍵盤で選曲するとなんかプレイできないんだけど…

**A:鍵盤の機能の割当がLR2とは異なります**  

* 1鍵：プレイ
* 3鍵：練習モード（Practice Mode)
* 5鍵：オートプレイ
* 7鍵：リプレイ

***
#### Q:INFコンとかDAOのINFモードのコントローラ使えないの？

**A:使えるはずです**  
コンフィグ起動から`[Input] -> アナログスクラッチ` のチェックボックスをオンで対応します。  
コントローラー別の設定がないので、**混ぜて利用できない**のは注意です。  
(例)：INFコンと虹コン、INFコンと専コンコンバータ など

