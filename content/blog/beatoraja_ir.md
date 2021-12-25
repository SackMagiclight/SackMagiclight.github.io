---
title:  "beatoraja IRの登録方法・各IR特色"
createdAt:   2019-10-22 16:00:00 +0900
categories: 
  - BMS
  - beatoraja
alias: '/2019/10/22/beatoraja_ir/'
og:title: 'beatoraja IRの登録方法・各IR特色'
og:image: 'https://www.gaftalk.com/blog/img/logo.png'
---

![リファレンス](/blog/img/logo.png)

beatorajaのIR(※)はLR2と違い、BMSプレイヤー本体とIR機構が1：1ではないため、複数のIRが存在する。  
本稿では、各IRの登録方法及び特色を説明していく。

※ beatoraja では「Internet Ranking」という呼称ではなく、**スコアのクラウドセーブ**の意味合いから「Repository」と呼ばれる事が多いが、本稿ではわかりやすさのため、「IR」を用いる。

## [Mocha-Repository](https://mocha-repository.info/)

Mocha-Repository は beatoraja製作者が運営するIR。  
以下Welcome文より引用。

> Mocha-Repositoryはbeatorajaを始めとした次世代BMSプレイヤー用のリポジトリです。  
> スコアリポジトリ(従来のInternet Ranking)であり、楽曲情報のリポジトリであり、BMSユーザーのリポジトリを目指しています。

### 新規登録
1. 左側メニュー [ACCOUNT] -> [Register] リンクより、登録ページを開く。
   ![](/blog/img/2019-10-22-15-41-57.png)
2. メールアドレス、メールアドレス（確認）、プレイヤー名（IRで表示される名前）、パスワードを入力し、`Register`ボタンをクリック。
3. 認証メールに記載のリンクをクリックする。
   ![](/blog/img/2019-10-22-15-52-38.png)
   > 認証用メールが届かない場合は、[Login] -> [Setting] -> [Validation] で再送されます。  
   > メール認証を行わないとアカウントが有効にならず、スコア送信や登録情報編集が行えません。

### ログイン（IR側）
1. 左側メニュー [ACCOUNT] -> [Login] リンクより、ログインページを開く。
   ![](/blog/img/2019-10-22-15-55-07.png)
2. 登録に利用した`メールアドレス`, `パスワード` を入力し、ログインボタンを押す。

### ログイン（beatoraja側）
1. beatorajaを起動し、設定画面で [IR] タブを開く。
   ![](/blog/img/2019-10-22-15-58-35.png)
2. `IR`を **mocha**に設定する。`User ID` に**メールアドレス**、`Password` に**パスワード**、を入力し、起動ボタンを押す。

※ beatoraja本体側のIRログイン設定は保持されるので、次回以降の入力は不要。

### 主な独自機能

#### Level Review
> Level Reviewはユーザーから投票可能な難易度のことで、スコア登録することでコメントとともに投票できます。  
> （[How to use](https://mocha-repository.info/howtouse.php) より抜粋）

スコアを送信した譜面に対して、譜面ページで難易度を投票することができる。(要ログイン)
![](/blog/img/2019-10-22-16-52-40.png)

beatorajaでMocha-Repositoryにログインしている場合、投票された楽曲が独自難易度表としてメニューに表示される。

![](/blog/img/2019-10-22-16-08-24.png)

## [MinIR](https://www.gaftalk.com/minir/#)

このブログを書いている人が運営しているIR。  
詳しくは[こちらの記事](/_posts/development_of_minir/development_of_minir.md)で。

### 新規登録
1. 上側メニュー [SIGN UP] リンクより、登録ページを開く。
   ![](/blog/img/2019-10-22-16-16-29.png)
2. メールアドレス、プレイヤー名（IRで表示される名前）、パスワードを入力し、`CONTINUE`ボタンをクリック。
3. 認証メールに記載のリンクをクリックする。
   ![](/blog/img/2019-10-22-16-18-44.png)

### ログイン（IR側）
1. 上側メニュー [LOGIN] リンクより、ログインページを開く。
   ![](/blog/img/2019-10-22-16-20-38.png)
2. 登録に利用した`メールアドレス`, `パスワード` を入力し、ログインボタンを押す。

### ログイン（beatoraja側）
1. beatorajaを起動し、設定画面で [IR] タブを開く。
   ![](/blog/img/2019-10-22-16-21-57.png)
2. `IR`を **MinIR**に設定する。`User ID` に**メールアドレス**、`Password` に**パスワード**、を入力し、起動ボタンを押す。

### 主な独自機能

#### Stella/Satellite難易度表連携
[Stella](https://stellabms.xyz/#/difftable)/[Satellite](https://lite.stellabms.xyz/#/difftable)難易度表のアカウントをbeatorajaアカウントで作成すると、Stella/Satellite難易度表楽曲プレイ時に、自動的にプレイデータがStella/Satellite側に送信される。  
事前にMinIRの登録が必要。

##### 連携・作成方法
1. 右上のボタンからログインページを開き、`Sign up (with Beatoraja & MinIR)` ボタンを押す。
   ![](/blog/img/2019-10-22-16-32-23.png)
2. `ログインID`、`パスワード`、`パスワード（再確認）`、`MinIR ID`、`難易度表 表示名（ニックネーム）` を入力して `Submit` ボタンを押す。  
   `MinIR ID` は、 MinIRログイン後、[SETTING] メニューから確認できる。
   ![](/blog/img/2019-10-22-16-39-26.png)
   ![](/blog/img/2019-10-22-16-39-54.png)
3. MinIR 側に遷移し、`Service Authorize` 画面が表示される。MinIRに登録してあるメールアドレスとパスワードを入力し、`CONFILM`ボタンを押す。
   ![](/blog/img/2019-10-22-16-43-52.png)
4. 再度Stella/Satellite難易度表に遷移するので、右上のボタンからログインページを開きログインできればOK。

#### コンテスト
単純に言えば「指定期間の間だけ記録されるスコア群」。

##### コンテスト作成
1. MinIRにログインした状態で [Contest] -> [Create Contest] を開く。
   ![](/blog/img/2019-10-22-16-58-30.png)
2. 上から
   * コンテスト名（必須）
   * コンテスト概要
   * 参加パスワード（参加を制限する場合必須）
   * コンテスト開始・終了日時（必須）
   * コンテスト楽曲（1曲以上必須。SHA256とLNMODEを指定して追加ボタンを押す。SHA256はMocha-Repositoryで楽曲検索を行い、楽曲URLの`sha256=XXX` を確認するのが早い。）
  
   を設定し、`CREATE CONTEST` ボタンを押す。

##### コンテスト参加・脱退方法
1. メニュー [Contest List] または共有されたContestページのURLから`Contest` ページを開く。
2. コンテストに参加する場合は`JOIN CONTEST`ボタン、  
   コンテストの参加をやめる場合は`LEAVE CONTEST`ボタンを押す。

※ 一度に参加できるコンテストは5つまで。  
※ コンテスト参加状況はMinIRログイン後、[SETTING] メニューから確認できる。（ここから`LEAVE CONTEST`も可能）

## プライマリIR と セカンダリIR （設定）
beatorajaでは、複数IRへのスコア送信を可能としており、IR設定は複数登録できる。  
IR設定にはプライマリIR と セカンダリIRの概念がある。

### プライマリIR
メインで使用されるIR設定。  
スコア送受信及びライバルデータの取得、IRから送信される独自難易度表の取得が行われる。

### セカンダリIR
スコア送受信のみを行うIR設定。  
ライバルデータなどは取得されない。

プライマリIRとセカンダリIRの設定はIRタブで行うことができる。
![](/blog/img/2019-10-22-17-17-02.png)

`Set Primary` ボタンを押すことで、表示しているIRをプライマリIRにできる。  
（逆に、このボタンが表示されているということは、現在表示しているIR設定はセカンダリIRであることを意味する）