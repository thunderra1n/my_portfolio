import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

class About_Me extends React.Component {
  render() {
    return (
  <Container className="container" id="about_me">
    <Row className="row featurette">
      <div className="col-md-7 order-md-1">
        <h2 className="featurette-heading">Takuya Kawabata/川畑拓也 <span className="text-muted">a.k.a. ThunderRa1n</span></h2><br />
        <p className="lead" style={{fontSize:"18px"}}><span className="font-weight-bold">Education</span>: 都内の大学の修士1年です。物性物理学の研究室に所属しており、物質の熱伝導率を測定する新たな手法と装置&プログラム(LabVIEW)の開発を行なっています。また、今年度から数種類の物質について熱輸送のメカニズムや超伝導現象を対象に研究する予定です。</p><br />
        <p className="lead" style={{fontSize:"18px"}}><span className="font-weight-bold">Programming</span>: 学部時代はコンピュータ研究会に所属し、Webアプリケーションの開発や勉強をメインで行なっていました。大学祭用にUnityで簡単な3D FPSゲームを作った時もあります。<br />Web開発は今でも続けており、Web検索エンジン「Ellpedia」は代表作です。基本情報技術者試験に合格済み。<br /></p>
      </div>
      <div className="col-md-5 order-md-2">
        <Image className="featurette-image img-fluid mx-auto" src="images/myicon.png" alt="MyIcon" width="300px" />
      </div>
      </Row>
  </Container>
    );
  }
}

export default About_Me;