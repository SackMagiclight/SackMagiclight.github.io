---
title:  "beatoraja 0.5.2 リリースノートもどき"
createdAt: '2017-12-01 21:30:00 +0900'
alias: '/2017/12/01/beatoraja-0-5-2/'
og:title: 'beatoraja 0.5.2 リリースノートもどき'
---

beatoraja 0.5.2 がリリースされました。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="en" dir="ltr">We&#39;ve released beatoraja 0.5.2. It supports 2dx premium controller, enhances rendering performance and response of loading skins, fixes many problems.<a href="https://t.co/xG37VrY81A">https://t.co/xG37VrY81A</a></p>&mdash; 両替侍 (@ryougae_samurai) <a href="https://twitter.com/ryougae_samurai/status/936244061672955904?ref_src=twsrc%5Etfw">2017年11月30日</a></blockquote>

以下は0.5.1 からの変更点です。  
Gitログから追ったのでちょっと間違ってるかも…

***
## beatmania IIDX INFINITAS プレミアムコントローラーがサポートされました
オプションの[Input]->[アナログスクラッチ] をチェックすることで動作します。  
**アルゴリズムが異なるコントローラーを併用することはできません。**  
（例：INFコンと虹コン、DAO INFモードと専コンPADなど）

***

## 検索バー追加
(LITONE5の導入をおすすめします)  
楽曲検索バーが追加されました。 検索結果はフォルダにまとめられ、起動中はいつでも参照できます。

***

## IRを正式にサポート
記述段階では Chroma IRがβテスト中です。

***

## コースモードのゲージに「LR2」を追加
`gauge_lr2`が追加されました。  
この制約で指定されたコースは、LR2のゲージで演奏されます。

***

## 0.4.2以前で読めていたLR2互換のPMSスキンが読み込めなかったのを修正
LPEX、Light Pop等。

***

## 空POOR範囲の修正
0.5.1と比較して空POORが減少します。

***

## **コンボ重視**のアルゴリズムが変更されました
0.5.1と比較して繋がるようになりました。

***

## ALL-SCRのスクラッチ以外のノーツ配置が易しくなりました
LR2みたいに128分皿とかはなくなりました。    
DPはスクラッチレーンに寄るようになりました。

***

## 選曲BGM、決定音、リザルトBGMのランダム再生が正式に可能になりました
手っ取り早く体験するのであればLITONE5(v0.7)の導入をおすすめします。

***

## スキンのLR2互換を向上
OADX等の描画に関して修正されています。

***

## コンフィグ周りの不具合修正
* 起動時にキーコンフィグが読み込まれない問題
* 初回起動時にjarファイルからの起動で2回目以降起動しない問題
* 複数の外部コントローラー利用時の対応

***

## 操作性能の向上
* 選曲画面のスクロール速度の改善

***

## 音声・動画再生の不具合修正

***

## その他軽微な不具合修正

