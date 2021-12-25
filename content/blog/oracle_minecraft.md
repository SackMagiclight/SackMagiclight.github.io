---
title:  "Oracle Cloud の Always FreeなインスタンスでMinecraftサーバーを建ててみるテスト"
createdAt:   2021-02-08 21:30:00 +0900
categories: 
  - Minecraft
  - Cloud
alias: '/2021/02/08/oracle-minecraft/'
og:title: 'Oracle Cloud の Always FreeなインスタンスでMinecraftサーバーを建ててみるテスト'
og:image: 'https://www.gaftalk.com/blog/img/img_mc.png'
---

![](/blog/img/img_mc.png)

### Always Freeなインスタンスを建てる

（略）

### Security List の設定
下記をIngress Rulesに追加

* 0.0.0.0/0 TCP All->25565
* 0.0.0.0/0 UDP All->25565

### インスタンスにSSH接続して下記を実行

```shell
cd /etc/yum.repos.d/
sudo wget http://yum.oracle.com/public-yum-ol7.repo
sudo yum install docker-engine
sudo systemctl start docker.service
sudo docker run -d -v ~/minecraft_data:/data -p 25565:25565 -e TYPE=SPIGOT -e EULA=TRUE --name mc itzg/minecraft-server

sudo firewall-cmd --permanent --zone=public --add-port=25565/tcp
sudo firewall-cmd --permanent --zone=public --add-port=25565/udp
sudo firewall-cmd --reload
```

### マイクラクライアントからインスタンスのIPに接続する

おわり -NHK-  
メモリがカツカツで厳しい印象。  
1-3人程度？