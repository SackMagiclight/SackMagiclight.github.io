(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{243:function(v,a,t){"use strict";t.r(a);var r=t(1),n=Object(r.a)({},function(){var v=this,a=v.$createElement,r=v._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h2",{attrs:{id:"はじめに"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#はじめに","aria-hidden":"true"}},[v._v("#")]),v._v(" はじめに")]),v._v(" "),r("p",[v._v("beatorajaの認知度が高まっていくに連れて、"),r("strong",[v._v("IRがない")]),v._v(" という声を多く目にするようになりました。"),r("br"),v._v("\n正確に言えばIRがないというのは誤りで、"),r("code",[v._v("Chroma IR")]),v._v("が存在していましたが、広く公開されているIRではありませんでした。")]),v._v(" "),r("p",[v._v("というわけで、「ないなら作ればいい」のノリで作成したのが現在稼働中の"),r("code",[v._v("MinIR")]),v._v("です。"),r("br"),v._v("\n本記事では、このMinIRがどのようにして作られたかを解説します。")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"やることはそんなに多くない"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#やることはそんなに多くない","aria-hidden":"true"}},[v._v("#")]),v._v(" やることはそんなに多くない")]),v._v(" "),r("p",[v._v("さて、そもそもIRはどのような仕組みなのでしょうか。")]),v._v(" "),r("p",[v._v("やることは「データを送り、保存する」「データを取得し、表示する」の2つです。"),r("br"),v._v(" "),r("img",{attrs:{src:t(77),alt:""}})]),v._v(" "),r("p",[v._v("必要なのは")]),v._v(" "),r("ul",[r("li",[v._v("IRのデータの受け口")]),v._v(" "),r("li",[v._v("IRのデータを保存するための場所")]),v._v(" "),r("li",[v._v("IRデータの送信機構")]),v._v(" "),r("li",[v._v("IRデータの表示機構")])]),v._v(" "),r("p",[v._v("の4つです。"),r("br"),v._v("\nそんなに多くありません。")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"必要なものを具体的に"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#必要なものを具体的に","aria-hidden":"true"}},[v._v("#")]),v._v(" 必要なものを具体的に")]),v._v(" "),r("p",[v._v("必要な「機能」を抽出したところで、具体的に何が必要かを考えていきます。")]),v._v(" "),r("h3",{attrs:{id:"irのデータの受け口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#irのデータの受け口","aria-hidden":"true"}},[v._v("#")]),v._v(" IRのデータの受け口")]),v._v(" "),r("p",[v._v("データを受け取る「サーバー」が必要です。")]),v._v(" "),r("h3",{attrs:{id:"irのデータを保存するための場所"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#irのデータを保存するための場所","aria-hidden":"true"}},[v._v("#")]),v._v(" IRのデータを保存するための場所")]),v._v(" "),r("p",[v._v("保存箇所である「データベース」が必要です。")]),v._v(" "),r("h3",{attrs:{id:"irデータの送信機構"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#irデータの送信機構","aria-hidden":"true"}},[v._v("#")]),v._v(" IRデータの送信機構")]),v._v(" "),r("p",[v._v("同じく、データ取得命令を処理する「サーバー」が必要です。")]),v._v(" "),r("h3",{attrs:{id:"irデータの表示機構"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#irデータの表示機構","aria-hidden":"true"}},[v._v("#")]),v._v(" IRデータの表示機構")]),v._v(" "),r("p",[v._v("表示用に「Webページ」が必要です。")]),v._v(" "),r("p",[v._v("こうしてみると、レンタルサーバを借りて、内部にデータベースとWebページ機構を組み込めば良さそうですが…")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"サーバーレスという選択-amazon-web-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#サーバーレスという選択-amazon-web-service","aria-hidden":"true"}},[v._v("#")]),v._v(" サーバーレスという選択 - Amazon Web Service")]),v._v(" "),r("p",[v._v("レンタルサーバを借りてどうこうするのは、意外と管理・維持が面倒です。"),r("br"),v._v("\n死活監視やリソース監視、パッチの適用など、サーバーを正常に動作させ続けるためにさまざまな作業が必要です。")]),v._v(" "),r("p",[v._v("そのため、MinIRでは、「サーバーレスアーキテクチャ」を採用しています。")]),v._v(" "),r("h3",{attrs:{id:"サーバーレスアーキテクチャ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#サーバーレスアーキテクチャ","aria-hidden":"true"}},[v._v("#")]),v._v(" サーバーレスアーキテクチャ")]),v._v(" "),r("p",[r("strong",[v._v("サーバを自前で用意せず")]),v._v("、サーバーを持つ事業者が提供するサービスを活用してシステムを構築します。")]),v._v(" "),r("p",[v._v("MinIRでは「サーバーを持つ事業者」は"),r("code",[v._v("Amazon")]),v._v("、「サーバーを持つ事業者が提供するサービス」は"),r("a",{attrs:{href:"https://aws.amazon.com/jp/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Amazon Web Service"),r("OutboundLink")],1),v._v("です。")]),v._v(" "),r("h3",{attrs:{id:"amazon-web-service-aws"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-service-aws","aria-hidden":"true"}},[v._v("#")]),v._v(" Amazon Web Service (AWS)")]),v._v(" "),r("p",[r("img",{attrs:{src:t(78),alt:""}})]),v._v(" "),r("blockquote",[r("p",[v._v("アマゾン ウェブ サービスでは、コンピューティング、ストレージ、データベース、分析、ネットワーキング、モバイル、開発者用ツール、管理ツール、IoT、セキュリティ、エンタープライズアプリケーションなど、グローバルなクラウドベース製品を幅広く利用できます。これらのサービスを使用すると、企業や組織はより迅速かつ低い IT コストでスケールすることができます。AWS は最大規模の企業と注目を集めている新興企業から信頼されており、ウェブアプリケーション、モバイルアプリケーション、ゲーム開発、データ処理、データウェアハウス、ストレージ、アーカイブなど多様なワークロードを支援しています。")]),v._v(" "),r("p",[v._v("製品ページより引用 "),r("a",{attrs:{href:"https://aws.amazon.com/jp/products/",target:"_blank",rel:"noopener noreferrer"}},[v._v("(https://aws.amazon.com/jp/products/)"),r("OutboundLink")],1)])]),v._v(" "),r("p",[v._v("簡単言えば "),r("strong",[v._v("いろんなサービスがあるから、それらをうまく組み合わせて活用してね！")]),v._v(" でしょうか。"),r("br"),v._v("\n実際、その通りなので、MinIRで利用しているサービスを解説します。")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"minirで利用するawsサービス"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minirで利用するawsサービス","aria-hidden":"true"}},[v._v("#")]),v._v(" MinIRで利用するAWSサービス")]),v._v(" "),r("p",[v._v("MinIRで利用するサービスは主に下記の3つです。")]),v._v(" "),r("ul",[r("li",[v._v("AWS Lambda (lambda)")]),v._v(" "),r("li",[v._v("Amazon DynamoDB (DynamoDB)")]),v._v(" "),r("li",[v._v("Amazon Cognito (Cognito)")])]),v._v(" "),r("h3",{attrs:{id:"aws-lambda"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws-lambda","aria-hidden":"true"}},[v._v("#")]),v._v(" AWS Lambda")]),v._v(" "),r("p",[r("img",{attrs:{src:t(79),alt:""}})]),v._v(" "),r("p",[v._v("(「ラムダ」って読みます)"),r("br"),v._v("\nイベントに対してコードを実行するサービスです。"),r("br"),v._v("\n「データを受け取る」「データ要求に対して送信する」の2つの役割に対してこのサービスを使います。")]),v._v(" "),r("p",[v._v("具体的には")]),v._v(" "),r("ul",[r("li",[v._v("データを受け取る\n"),r("ul",[r("li",[v._v("受け取ったスコア・譜面データを"),r("code",[v._v("DynamoDB")]),v._v("に保存する")])])]),v._v(" "),r("li",[v._v("データ要求に対して送信する\n"),r("ul",[r("li",[v._v("要求に沿う形でスコア・譜面データを"),r("code",[v._v("DynamoDB")]),v._v("から取得し、返却する")])])])]),v._v(" "),r("p",[v._v("を行います。")]),v._v(" "),r("p",[v._v("コードは"),r("code",[v._v("Node.js")]),v._v("、"),r("code",[v._v("Java")]),v._v("、"),r("code",[v._v("C#")]),v._v("、"),r("code",[v._v("Go")]),v._v("、"),r("code",[v._v("Python")]),v._v("が選択できますが、MinIRでは"),r("code",[v._v("Node.js")]),v._v("を採用しています。\n（"),r("code",[v._v("Node.js")]),v._v("の説明は"),r("a",{attrs:{href:"https://eng-entrance.com/what-is-nodejs",target:"_blank",rel:"noopener noreferrer"}},[v._v("この辺"),r("OutboundLink")],1),v._v("とかかな？）")]),v._v(" "),r("p",[v._v("ひと月あたり")]),v._v(" "),r("ul",[r("li",[v._v("1,000,000回（100万回）の呼び出し")]),v._v(" "),r("li",[v._v("メモリを400,000GB（40万GB）秒利用する\n"),r("ul",[r("li",[v._v("例1：256MBの処理を4秒で1GB秒")]),v._v(" "),r("li",[v._v("例2：1GBの処理を0.5秒で0.5GB秒")])])])]),v._v(" "),r("p",[v._v("を満たすまでは"),r("strong",[v._v("無料")]),v._v("です。")]),v._v(" "),r("p",[v._v("("),r("a",{attrs:{href:"https://aws.amazon.com/jp/lambda/pricing/",target:"_blank",rel:"noopener noreferrer"}},[v._v("AWS Lambda 料金"),r("OutboundLink")],1),v._v(")")]),v._v(" "),r("h3",{attrs:{id:"amazon-dynamodb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amazon-dynamodb","aria-hidden":"true"}},[v._v("#")]),v._v(" Amazon DynamoDB")]),v._v(" "),r("p",[r("img",{attrs:{src:t(80),alt:""}})]),v._v(" "),r("p",[v._v("(「ダイナモDB」って読みます)"),r("br"),v._v("\nデータベースサービスですが、一般的な"),r("a",{attrs:{href:"https://aws.amazon.com/jp/relational-database/",target:"_blank",rel:"noopener noreferrer"}},[v._v("リレーショナルデータベース (RDB)"),r("OutboundLink")],1),v._v("ではありません。"),r("br"),v._v(" "),r("a",{attrs:{href:"https://aws.amazon.com/jp/nosql/",target:"_blank",rel:"noopener noreferrer"}},[v._v("NoSQL データベース (NoSQL)"),r("OutboundLink")],1),v._v("と呼ばれる非リレーショナルデータベースです。")]),v._v(" "),r("p",[v._v("NoSQL データベースとは"),r("strong",[v._v("一意キー")]),v._v("と"),r("strong",[v._v("値")]),v._v("の単純な組み合わせを格納したデータベースです。"),r("br"),v._v("\n以下は簡単な例です。")]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("一意キー")]),v._v(" "),r("th",[v._v("値")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("ユーザーID + 譜面ID")]),v._v(" "),r("td",[v._v("スコア、記録日時 …")])]),v._v(" "),r("tr",[r("td",[v._v("譜面ID")]),v._v(" "),r("td",[v._v("タイトル、BPM、総ノーツ数 …")])]),v._v(" "),r("tr",[r("td",[v._v("ユーザーID")]),v._v(" "),r("td",[v._v("bio、ライバル情報 …")])])])]),v._v(" "),r("p",[v._v("※MinIRが上記の例の通りに作られているわけではありません")]),v._v(" "),r("p",[v._v("キーと値のペアのため、RDBとは違ったメリット、デメリットが存在します。")]),v._v(" "),r("table",[r("thead",[r("tr",[r("th"),v._v(" "),r("th",[v._v("RDB")]),v._v(" "),r("th",[v._v("NoSQL")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("データ参照")]),v._v(" "),r("td",[v._v("複数の表と関係性を持ち、SQLを用いて、高度な条件でのデータを取得できる")]),v._v(" "),r("td",[v._v("他のデータとの関係性がないため、複雑な参照には不向き")])]),v._v(" "),r("tr",[r("td",[v._v("トランザクション")]),v._v(" "),r("td",[v._v("データの不整合は起こらない")]),v._v(" "),r("td",[v._v("結果整合性を持つ（即座にデータの変更が反映されるとは限らない）")])]),v._v(" "),r("tr",[r("td",[v._v("処理速度")]),v._v(" "),r("td",[v._v("強固なトランザクション処理を行うため、それほど速くはない")]),v._v(" "),r("td",[v._v("大量のデータを扱うサービスで参照や追加処理が主な処理である場合、高速")])])])]),v._v(" "),r("p",[v._v("上記だけ見ると、IRのようなデータ保存・更新サービスではNoSQLは不向きなのでは？と思われると思います。"),r("br"),v._v(" "),r("strong",[v._v("その通りです。")]),r("br"),v._v("\nユーザー・スコア・譜面 など、リレーショナルなデータ参照があるのでRDBのほうが向いているのですが…。")]),v._v(" "),r("p",[r("strong",[v._v("残念ながら、RDBは無料で運用できません。")])]),v._v(" "),r("p",[v._v("AWSにも"),r("code",[v._v("Amazon Relational Database Service (RDS)")]),v._v("というサービスがありますが、無料で利用することはできません。"),r("br"),v._v("\nAmazon以外のサービスも同様です。")]),v._v(" "),r("p",[r("code",[v._v("DynamoDB")]),v._v("は料金体系が複雑ですが、IRのような単純なWebサービス構築ならば無料で運用できるはずです。")]),v._v(" "),r("ul",[r("li",[v._v("25 GB の保管は無料")]),v._v(" "),r("li",[v._v("読み込み/書き込み容量が少なければ無料")])]),v._v(" "),r("p",[v._v("("),r("a",{attrs:{href:"https://aws.amazon.com/jp/dynamodb/pricing/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Amazon DynamoDB 料金"),r("OutboundLink")],1),v._v(")")]),v._v(" "),r("p",[v._v("MinIRでは前述した"),r("code",[v._v("lambda")]),v._v("と連携して、データの書き込み、読み込みを行います。")]),v._v(" "),r("h3",{attrs:{id:"amazon-cognito"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amazon-cognito","aria-hidden":"true"}},[v._v("#")]),v._v(" Amazon Cognito")]),v._v(" "),r("p",[r("img",{attrs:{src:t(81),alt:""}})]),v._v(" "),r("p",[v._v("(「コグニト」って読みます)"),r("br"),v._v("\nユーザー認証や情報を取り扱うサービスです。")]),v._v(" "),r("ul",[r("li",[v._v("パスワードや個人情報の管理")]),v._v(" "),r("li",[v._v("(自前でやろうとすると大変な)2段階認証")]),v._v(" "),r("li",[v._v("自前の認証サービス")])]),v._v(" "),r("p",[v._v("と、ユーザー管理・運用に最低限必要なのが揃ってます。"),r("strong",[v._v("めっちゃ楽です。")]),r("br"),v._v("\n（やろうと思えばtwitterでのログインも実装できますが、MinIRでは採用してません。）")]),v._v(" "),r("p",[v._v("同じく、"),r("code",[v._v("lambda")]),v._v("と連携して、ログイン処理、ユーザーデータの追加・取得を行います。")]),v._v(" "),r("p",[v._v("ひと月あたり5万ユーザーまでは"),r("strong",[v._v("無料")]),v._v("です。"),r("br"),v._v("\n("),r("a",{attrs:{href:"https://aws.amazon.com/jp/cognito/pricing/",target:"_blank",rel:"noopener noreferrer"}},[v._v("AWS Cognito 料金"),r("OutboundLink")],1),v._v(")")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"サービスを組み合わせる"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#サービスを組み合わせる","aria-hidden":"true"}},[v._v("#")]),v._v(" サービスを組み合わせる")]),v._v(" "),r("p",[v._v("上記で紹介したAWSサービスを組み合わせるとこんな感じになります")]),v._v(" "),r("ul",[r("li",[v._v("ログイン処理\n"),r("ol",[r("li",[v._v("lambdaにログイン情報送信")]),v._v(" "),r("li",[v._v("lambdaからCognitoに情報問い合せ")]),v._v(" "),r("li",[v._v("Cognitoからlambdaに結果返却")]),v._v(" "),r("li",[v._v("lambdaから結果返却")])])]),v._v(" "),r("li",[v._v("スコア送信処理\n"),r("ol",[r("li",[v._v("lambdaにスコア情報送信")]),v._v(" "),r("li",[v._v("lambdaからDynamoDBに書き込み")]),v._v(" "),r("li",[v._v("（必要なら）lambdaから処理結果を返却")])])])]),v._v(" "),r("p",[v._v("なんとかうまくいきそうです。"),r("br"),v._v("\n残りは保存されたスコアを表示するIRページの作成です。")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"webページも無料で作る-github-pages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webページも無料で作る-github-pages","aria-hidden":"true"}},[v._v("#")]),v._v(" Webページも無料で作る -Github Pages-")]),v._v(" "),r("p",[r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("GitHub Pages"),r("OutboundLink")],1),v._v(" とは、"),r("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("GitHub"),r("OutboundLink")],1),v._v("による、静的サイトのホスティングサービスです。"),r("br"),v._v(" "),r("code",[v._v("GitHub")]),v._v("のアカウントがあればすぐに公開できるので、非常に手軽です。")]),v._v(" "),r("ul",[r("li",[v._v("静的サイト (HTML や CSS, 画像など) を公開できます")]),v._v(" "),r("li",[v._v("JavaScriptが動作します")]),v._v(" "),r("li",[v._v("独自ドメインOK")]),v._v(" "),r("li",[r("strong",[v._v("無料")])])]),v._v(" "),r("p",[v._v("htmlをうまーく配置すれば、それだけでサイトが公開できます。"),r("br"),v._v("\nデータの取得（lambdaの呼び出し）には"),r("code",[v._v("javascript")]),v._v("を用います。")]),v._v(" "),r("p",[v._v("サイトのソースコードは"),r("a",{attrs:{href:"https://github.com/SackMagiclight/minir",target:"_blank",rel:"noopener noreferrer"}},[v._v("こちら"),r("OutboundLink")],1),v._v("です。"),r("br"),v._v("\n静的サイトなので、基本全公開です。")]),v._v(" "),r("p",[v._v("MinIRのデザインには"),r("a",{attrs:{href:"https://getmdl.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Material Design Lite"),r("OutboundLink")],1),v._v("、テンプレートエンジンには"),r("a",{attrs:{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("React"),r("OutboundLink")],1),v._v("を利用しています。"),r("br"),v._v("\n（詳細情報は各公式ページへ。）")]),v._v(" "),r("p",[v._v("というわけで、スコアビューワーもできました。\n"),r("img",{attrs:{src:t(82),alt:""}})]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"まとめ（システム全体像）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#まとめ（システム全体像）","aria-hidden":"true"}},[v._v("#")]),v._v(" まとめ（システム全体像）")]),v._v(" "),r("p",[r("img",{attrs:{src:t(83),alt:""}})]),v._v(" "),r("p",[v._v("こんな感じになりました。"),r("br"),v._v("\n基本的にはlambdaを経由して、データの流れを作ります。")]),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"おわりに"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#おわりに","aria-hidden":"true"}},[v._v("#")]),v._v(" おわりに")]),v._v(" "),r("p",[v._v("というわけで、このような流れがあってMinIRは作られました。"),r("br"),v._v("\n無料でクラウドサービスを利用でき、サービス開発ができるなんていい時代だぁ…"),r("br"),v._v("\nAWS便利だからみんな使おうね！"),r("br"),v._v("\nIRを新しく作るのもいいぞ。")])])},[],!1,null,null,null);a.default=n.exports},77:function(v,a,t){v.exports=t.p+"assets/img/server1.0c50eb88.png"},78:function(v,a){v.exports="data:image/png;base64,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"},79:function(v,a,t){v.exports=t.p+"assets/img/lambda.aef6916a.png"},80:function(v,a,t){v.exports=t.p+"assets/img/dynamodb.3d17f175.png"},81:function(v,a,t){v.exports=t.p+"assets/img/cognito.d668537d.png"},82:function(v,a,t){v.exports=t.p+"assets/img/minir_score.b403e71a.png"},83:function(v,a,t){v.exports=t.p+"assets/img/minir_system.9727a061.png"}}]);