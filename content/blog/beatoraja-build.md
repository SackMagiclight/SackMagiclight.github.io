---
title:  "beatoraja ビルド＆デバッグ方法"
createdAt:   2017-11-04 22:30:00 +0900
categories: 
  - bms
  - java
  - development
alias: '/2017/11/04/beatoraja-build/'
og:title: 'beatoraja ビルド＆デバッグ方法'
og:image: 'https://www.gaftalk.com/blog/img/2017-11-04-beatoraja_build_b.png'
---

![](/blog/img/2017-11-04-beatoraja_build_b.png)

### わかってる人向け

**Antビルドしてbat実行。デバッグはIDEから普通に。**

Antビルドしてデバッグ構成定義して実行でOK。

***

### 開発環境構築

いろいろなIDE（統合開発環境）がありますが、一番楽そうなeclipseで進めます。

※Windows環境での実践です。Mac、Linux環境では適当に読み替えてください。
<br><br>

#### eclipseのダウンロード

日本語化等ある程度整備された環境である**[Pleiades All in One Eclipse](http://mergedoc.osdn.jp/index.html#/pleiades_distros4.7.html)**をダウンロードします。

![](/blog/img/2017-11-04-beatoraja_build_eclipse.png)

beatorajaはJavaアプリケーションなので、JavaのFull Editionを選んでください。
<br><br>

#### git clone

[beatorajaのgithub](https://github.com/exch-bms2/beatoraja)から最新のコードをcloneします。
<br><br>

#### eclipseへインポート

ワークスペースを適当に作成(デフォルトは "../workspace")して、eclipseを起動します。

[ファイル]-[インポート]を選択し、「フォルダまたはアーカイブからプロジェクト」を選択します。

![](/blog/img/2017-11-04-beatoraja_build_eclipse_2.png)

インポート・ソースにcloneしたbeatorajaのフォルダを選択し、完了します。

![](/blog/img/2017-11-04-beatoraja_build_eclipse_3.png)
<br><br>

#### buildの実行

build.xmlを右クリックして、[実行]-[Ant ビルド]を選択します。

![](/blog/img/2017-11-04-beatoraja_build_eclipse_4.png)
<br><br>

#### 実際の起動

cloneしたbeatorajaプロジェクトフォルダの中にある**beatoraja-config.bat**ファイルを起動してください。
<br>
もしくは下記デバッグ構成から起動できます。

#### デバッグ

* eclipseで、beatorajaフォルダを右クリック-[デバッグ]-[デバッグの構成] を選択します。

![](/blog/img/2017-11-04-beatoraja_build_eclipse_7.png)

* javaアプリケーションを選択し新規ボタンを押します。 
* 下記画像のように設定します。  

![](/blog/img/2017-11-04-beatoraja_build_eclipse_5.png)

![](/blog/img/2017-11-04-beatoraja_build_eclipse_6.png)

* デバッグ ボタンを押してデバッグを開始します。
* beatorajaのコンフィグ画面が起動されるはずです。

***

意外とbeatorajaの使い方は書かれてるけど、デバッグとかそこら辺の情報がないので書きました。

オープンソースで、割りとわかりやすい作りしてるのでGit周りの練習に最適ですね。
