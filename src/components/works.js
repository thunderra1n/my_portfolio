import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

class Works extends React.Component {
  render() {
    return (
  <Container className="container works" id="works">
    <h2 className="featurette-heading">Works(製作物一覧)</h2><br />
    <Row className="row">
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Ellpedia</h2>
        <div className="text-center">
        <Image src="images/ellpedia.png" className="img-thumbnail" />
        </div>
        <p>自作Web検索エンジン。GoogleやBing、ニュース、画像の検索結果を1ページにまとめて表示できる。プライバシーに配慮した設計で、入力クエリはPOSTメソッドで処理する。</p>
        <p className="text-center"><span className="plang python">Python</span> <span className="plang python">Flask</span> <span className="plang js">JavaScript</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://www.ellpedia.com" target="_blank" role="button">Ellpedia.com &raquo;</a>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/Ellpedia" target="_blank" role="button">GitHub &raquo;</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Ellpedia Academic</h2>
        <div className="text-center">
        <Image src="images/academic.png" className="img-thumbnail" />
        </div>
        <p>自作論文検索エンジン。Google ScholarやCrossRef、arXivの検索結果を1ページにまとめて表示できる。</p>
        <p className="text-center"><span className="plang python">Python</span> <span className="plang python">Flask</span> <span className="plang js">JavaScript</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://academic.ellpedia.com" target="_blank" role="button">Ellpedia.com &raquo;</a>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/Ellpedia/tree/master/academic" target="_blank" role="button">GitHub &raquo;</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Ellpedia Chat</h2>
        <div className="text-center">
        <Image src="images/ellza.png" className="img-thumbnail" />
        </div>
        <p>LINE風にWeb検索ができるチャット型検索エンジン。機械学習の勉強の一貫として極簡易な対話型チャットボットも作成し、搭載させた。</p>
        <p className="text-center"><span className="plang python">Python</span> <span className="plang python">Flask</span> <span className="plang js">JavaScript</span> <span className="plang js">ajax</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://ellza.ellpedia.com" target="_blank" role="button">Ellpedia.com &raquo;</a>&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/ellza_in_japanese" target="_blank" role="button">GitHub &raquo;</a></p>
        </div>
      </div>
    </Row>

    <Row className="row">
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Ellvator</h2>
        <div className="text-center">
        <Image src="images/ellvator.png" className="img-thumbnail" />
        </div>
        <p>上の3つのEllpedia関連プログラムを1つのパッケージにしたWebブラウザ。ブラウザを立ち上げるだけでlocalhost上でEllpediaを使用できる。</p>
        <p className="text-center"><span className="plang electron">Electron</span> <span className="plang python">Python</span> <span className="plang python">Flask</span> <span className="plang js">JavaScript</span> <span className="plang js">ajax</span> <span className="plang js">Node.js</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/Ellvator_Japanese" target="_blank" role="button">&nbsp;&nbsp;GitHub &raquo;&nbsp;&nbsp;</a></p>
      </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Ellbrowser(iOS)</h2>
        <div className="text-center">
        <Image src="images/ellbrowser.png" className="img-thumbnail" />
        </div>
        <p>Swiftの勉強がてら、Ellpedia.com用に作成したiOS向けブラウザアプリ。WKWebViewを使用。App Storeには公開していない。</p>
        <p className="text-center"><span className="plang swift">&nbsp;&nbsp;Swift&nbsp;&nbsp;</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/Ellbrowser" target="_blank" role="button">&nbsp;&nbsp;GitHub &raquo;&nbsp;&nbsp;</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Twitter-Like</h2>
        <div className="text-center">
        <Image src="images/twitter-like.png" className="img-thumbnail" />
      </div>
        <p>RubyとRuby on Railsの勉強として作成したTwitterもどき。複数のユーザーを登録できる。ツイートの投稿や、他の人の投稿をいいねすることができる。</p>
        <p className="text-center"><span className="plang ruby">Ruby</span> <span className="plang ruby">Ruby on Rails</span> <span className="plang mysql">MySQL</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/twitter-like" target="_blank" role="button">&nbsp;&nbsp;GitHub &raquo;&nbsp;&nbsp;</a></p>
        </div>
      </div>
    </Row>

    <Row className="row">
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">CRUD_Test</h2>
        <div className="text-center">
        <Image src="images/crud_test.png" className="img-thumbnail" />
        </div>
        <p>Laravelを使用して作成した簡易掲示板。これを発展させてCMSを作成する構想あり。</p>
        <p className="text-center"><span className="plang php">PHP</span> <span className="plang php">Laravel</span> <span className="plang mysql">MySQL</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/crud_test" target="_blank" role="button">&nbsp;&nbsp;GitHub &raquo;&nbsp;&nbsp;</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">Ellpedia初期Ver.</h2>
        <div className="text-center">
        <Image src="images/legacy_ellpedia.png" className="img-thumbnail" />
      </div>
        <p>検索エンジンEllpediaの初期はPHPで作成しており、Searxという有名メタ検索エンジンのAPIを使用していた。</p>
        <p className="text-center"><span className="plang php">PHP</span> <span className="plang js">JavaScript</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/searx_futuristic_design" target="_blank" role="button">&nbsp;&nbsp;GitHub &raquo;&nbsp;&nbsp;</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">PUFG</h2>
        <div className="text-center">
        <Image src="images/pufg.png" className="img-thumbnail" />
        </div>
        <p>Unityで作成した3D FPSゲーム。自分を標的に迫ってくるロボットを全て倒したらクリアという簡単なルール。</p>
        <p className="text-center"><span className="plang clang">Unity</span> <span className="plang clang">C#</span></p>
        </div>
      </div>
    </Row>

    <Row className="row">
      <div className="col-md-4">
        <div className="col-md-11">
        <h3 className="text-center">Random UA Generator</h3>
        <div className="text-center">
        <Image src="images/ua.png" className="img-thumbnail" />
        </div>
        <p>User Agentをランダムで返すプログラム。Ellpediaの開発の上で必要になったので作成。他の場面でも便利に使えると思い、これ単体でGitHubにて公開した。</p>
        <p className="text-center"><span className="plang python">&nbsp;&nbsp;Python&nbsp;&nbsp;</span></p>
        <p className="text-center"><a className="btn btn-secondary btn-sm" href="https://github.com/thunderra1n/random_ua_generator" target="_blank" role="button">&nbsp;&nbsp;GitHub &raquo;&nbsp;&nbsp;</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">数値解析</h2>
        <div className="text-center">
        <Image src="images/cs.png" className="img-thumbnail" />
        </div>
        <p>大学での情報処理や数値解析の授業ではC言語やJavaScriptを用いて積分計算や行列計算、各種方程式の時間経過シミュレーション、簡単な2Dゲームの作成などを行った。現在はLabVIEWで自動実験・測定プログラムを開発中。</p>
        <p className="text-center"><span className="plang clang">C, C++</span> <span className="plang js">JavaScript</span> <span className="plang clang">LabVIEW</span></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="col-md-11">
        <h2 className="text-center">本ポートフォリオ</h2>
        <div className="text-center">
        <Image src="images/portfolio.png" className="img-thumbnail" />
        </div>
        <p>本ポートフォリオはReact-Bootstrapを用いて作成した。</p>
        <p className="text-center"><span className="plang js">React</span> <span className="plang html">Bootstrap</span></p>
        </div>
      </div>
    </Row>

  </Container>
    );
  }
}

export default Works;