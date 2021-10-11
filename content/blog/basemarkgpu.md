---
title:  "GPUベンチマーク「Basemark GPU」を試す"
createdAt:   2018-06-21 21:30:00 +0900
categories: 
  - Benchmark
  - GPU

og:title: 'GPUベンチマーク「Basemark GPU」を試す'
og:image: 'https://www.gaftalk.com/blog/img/basemarkgpu/preview-4.jpg'
---

フィンランドを拠点とする[Basemark社](https://www.basemark.com/)が新しいGPUベンチマークである[Basemark GPU](https://www.basemark.com/products/basemark-gpu/)を公開しました。
Basemark社は主にAR/VR用エンジン[Rocksolid Engine](https://www.basemark.com/rocksolid/)の開発を行っています。

***

### 概要

![](/blog/img/preview-4.jpg)

> Basemark GPU Enables Objective Comparisons Between Vulkan, OpenGL and OpenGL ES Graphics Performance Across Multiple Operating Systems
> 
> Basemark GPUにより、複数のオペレーティングシステム間でのVulkan、OpenGLおよびOpenGL ESグラフィックスのパフォーマンスの客観的な比較が可能。

> Helsinki, Finland, June 19, 2018 – Basemark launched today Basemark GPU, a new graphics performance evaluation tool for systems with Vulkan 1.0, OpenGL 4.5 or OpenGL ES 3.1 graphics APIs. This tool enables the industry to objectively and reliably quantify and compare graphics performance of next generation mobile, automotive and desktop processors.
>
> ヘルシンキ、フィンランド、2018年6月19日 - Basemarkは本日、Vulkan 1.0、OpenGL 4.5またはOpenGL ES 3.1グラフィックスAPIを搭載したシステム用の新しいグラフィックス性能評価ツールBasemark GPUを発表しました。 このツールにより、業界では、次世代のモバイル、自動車、デスクトッププロセッサのグラフィックス性能を客観的かつ確実に数値化し、比較することができます。

([プレスリリース](https://www.basemark.com/blog/basemark-debuts-new-graphics-performance-evaluation-tool/)より一部抜粋)

<br><br>
対応OSは Android, Windows(7/8/10), Linux(Debian, Ubuntu)です。  
無料版と、有料（Corporate)版が存在し、無料版では3DMarkのように機能制限がかかっています。  
内容は下記のとおりです。

|                                                                | Free | Corporate |
|----------------------------------------------------------------|------|-----------|
| GPU Score (Native and Offscreen) : スコア表示                  | Yes  | Yes       |
| Test Score Details : スコア詳細表示                            | No   | Yes       |
| Select Test : テスト選択                                       | No   | Yes       |
| Forced result submit : (オンラインへの)結果の送信              | Yes  | No        |
| Internet Connection Required : 常時オンライン                  | Yes  | No        |
| Custom Configurations : テスト詳細設定                         | Yes  | Yes       |
| Test Automation :  オートテスト                                | No   | Yes       |
| Ability to render arbitrary screen(s) : 任意の画面レンダリング | No   | Yes       |
| Data Export : テスト結果のエクスポート                         | No   | Yes       |

<br><br>
テストは**High-Quality mode**と**Medium Quality mode**の2種類があります。

> Basemark®GPU - 高品質モードは、高解像度のテクスチャ、高度なエフェクト、オブジェクトの数の増加、および今日のAAA PCゲーム規格に基づく厳しいジオメトリを使用するデスクトップシステムを対象としています。

| オフスクリーン解像度 | Max Triangles Per Frame | テクスチャ解像度 | 最大要求メモリ | DrawCall  |
|---------------------------------|-------------------------|------------------------|------------------------|--------------------------|
| 3840×2160                       | ~2 M                    | 4096×4096              | 4 GB                   | ~10k                     |


<br><br>
> Basemark®GPU - 中品質モードは、今日のAAA Mobileゲーム規格に基づいてモバイルシステムをターゲットにしています。 中品質モードは、減少したテクスチャ解像度、オブジェクトの数、幾何学的形状の量および限定された効果に関する高品質モードのサブセットです。

| オフスクリーン解像度 | Max Triangles Per Frame | テクスチャ解像度 | 最大要求メモリ | DrawCall  |
|---------------------------------|-------------------------|------------------------|------------------------|--------------------------|
| 1920×1080                       | ~0.7 M                  | 2048×2048              | 1 GB                   | ~2000                    |

***

### ベンチマークを試す

今回はサクッと「Official Test」を試してみます。

![](/blog/img/BasemarkGPULauncher_2018-06-23_00-51-45.png)

「Run Official Test」ボタンを押すだけです。

テスト中はこんな感じ。上の緑のバーは進捗バーです。右端に行ったら終了。  
テスト自体は1分ほどで意外とかかりません。

![](/blog/img/BasemarkGPU_vk_2018-06-21_23-37-03.png)

### テスト結果

無料版ではテスト結果を送信できると、テスト結果が表示されます。  
テスト結果は [Basemark Power Board](https://powerboard.basemark.com/)に送信されます。  
**送信できないと、テスト結果は表示されません。**  
回線不良、送信先サーバー落ちの場合、テストしても意味がありません…  
（実際、配信直後はサーバー落ちのため、テストをまわしても意味がありませんでした…）

<br><br>
#### GTX 1080 (Vulkan)

![](/blog/img/BasemarkGPULauncher_2018-06-22_23-56-13.png)

[https://powerboard.basemark.com/hwsubmit/17011/result](https://powerboard.basemark.com/hwsubmit/17011/result)

<br><br>
#### GTX 1080 (OpenGL)

![](/blog/img/BasemarkGPULauncher_2018-06-23_00-08-59.png)

[https://powerboard.basemark.com/hwsubmit/17059/result](https://powerboard.basemark.com/hwsubmit/17059/result)

<br><br>
#### RX Vega 64 (Vulkan)
ドライバ18.6.1でクラッシュ。   
ドライバ18.5.11だと動くらしいが入れ直すのめんどくさかった…

<br><br>
#### RX Vega 64 (OpenGL)

![](/blog/img/BasemarkGPULauncher_2018-06-23_00-35-20.png)

[https://powerboard.basemark.com/hwsubmit/17115/result](https://powerboard.basemark.com/hwsubmit/17115/result)

低すぎるような気がする…

<br><br>
因みに、GTX 1080Tiだと9000点ほど出るようです。

***

### 感想

現段階では**未完成**と言わざるを得ません。  
AMDGPUは事実上計測できてませんし…  
特に無料版の制限「スコア送信できないと結果見せない」は致命的です。  
サーバー落ちが全く考慮されていないのはいかがなものかと…  

テストツール本体のサイズ（展開前ファイル）は約3GBですが、3DMark(3.7GB)より少し少ない程度なのでこんなものでしょう。

良い点は、テスト自体は早い、ぐらいですかねぇ…  

うーん、今後に期待、かな？
