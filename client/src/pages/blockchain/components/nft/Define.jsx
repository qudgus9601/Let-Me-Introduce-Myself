import "./styles/define.css";
import meowcat from "../../img/meowcat.webp";
import opensea from "../../img/opensea.webp";

export const Define = () => {
  return (
    <div className="bc_define">
      <div className="bc_define_title">📚 NFT 란?</div>
      <div className="bc_define_content">
        <p>
          대체 불가능 토큰(Non-fungible token, NFT)이란 블록체인 기술을 이용해서
          디지털 자산의 소유주를 증명하는 가상의 토큰(token)이다. 그림·영상 등의
          디지털 파일을 가리키는 주소를 토큰 안에 담음으로써 그 고유한 원본성 및
          소유권을 나타내는 용도로 사용된다. 즉, 일종의 가상 진품 증명서.
          대체불가능한 토큰은 고유성을 지니며, 동일품이 존재할 수 없는
          주민등록증과 비슷하다. NFT는 거래내역을 블록체인에 영구적으로
          남김으로써 그 고유성을 보장받는다.
        </p>
        <span>
          출처: <span className="color-blue">업비트</span> 투자자 보호센터
          <a
            href="https://upbitcare.com/academy/education/nft/95"
            target={"_blank"}
            rel="noreferrer"
          >
            ({" "}
            <span className="underline">
              https://upbitcare.com/academy/education/nft/95
            </span>{" "}
            )
          </a>
        </span>
      </div>

      <div className="bc_define_title">💵 유명한 사건</div>
      <div className="bc_define_content">
        <p>
          인터넷을 자주 이용한다면 한번쯤 봤을 냥캣으로 유명한 움짤이 있는데
          <br />이 움짤은 NFT 화 되어서 약 59만 달러에 팔렸다.
        </p>
        <img src={meowcat} alt="" />
      </div>

      <div className="bc_define_title">🖥 유명 사이트</div>
      <div className="bc_define_content">
        <p>미국의 한 기업에서 개발, 운영하는 opensea라는 사이트이다.</p>
        <p>세계 1위를 달리고 있다.</p>
        <p>
          자신들만의 NFT 거래소 contract를 사용하는데 이 모델이 세계적으로
          통용되고 있다.
        </p>
        <p>wyvern protocol {"=>"} seaport protocol 로 최근 구조를 바꿨다.</p>
        <img src={opensea} alt="" />
        <p>
          오픈씨 바로가기 ({" "}
          <a
            className="underline"
            href="https://opensea.io/kr"
            rel="noreferrer"
            target={"_blank"}
          >
            https://opensea.io/kr
          </a>{" "}
          )
        </p>
      </div>
    </div>
  );
};
