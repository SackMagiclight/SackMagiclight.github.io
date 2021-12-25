---
title:  "beatoraja を Ubuntuで最速で動かす"
createdAt: 2020-03-22 14:30:00 +0900
categories: 
  - Linux
  - Ubuntu
  - beatoraja
alias: '/2020/03/22/beatoraja_ubuntu/'
og:title: 'beatoraja を Ubuntuで最速で動かす'
og:image: 'https://www.gaftalk.com/blog/img/ubuntu-logo14.png'
---

![](/blog/img/ubuntu-logo14.png)

めんどくさいことをせずに、Ubuntuでbeatoraja環境を構築する手順箇条書き。

## 1. Ubuntu をインストールする

省略。  
imgは[ここ](https://www.ubuntulinux.jp/download/ja-remix)

## 2. Liberica Package をインストールする

下記を順番にターミナルで実行。

```
wget -q -O - https://download.bell-sw.com/pki/GPG-KEY-bellsoft | sudo apt-key add -

echo "deb [arch=amd64] https://apt.bell-sw.com/ stable main" | sudo tee /etc/apt/sources.list.d/bellsoft.list

sudo apt-get update

sudo apt-get install bellsoft-java11-runtime-full
```

※ java8以上ならOKのはず

## 3. beatoraja 本体を落としてくる

-> [https://mocha-repository.info/download.php](https://mocha-repository.info/download.php)

## 4. 展開して `beatoraja-config.command` を ターミナルで実行。

![](/blog/img/img1.png)


以上。