import myself from "../../img/myself.jpeg";
import "./styles/selfIntroduce.css";

const SelfIntroduce = () => {
  return (
    <div className="selfIntroduce">
      <div className="selfIntroduce_container">
        <div className="selfIntroduce_left">
          <article className="selfIntroduce_left_title">
            <div>a.k.a. dev_BeHoney</div>
            <div>INTP, HouseKeeper</div>
            <div>
              <span className="font_main_color">Happiness</span> Developer
            </div>
          </article>
          <article className="selfIntroduce_left_desc_container">
            <div className="selfIntroduce_left_desc">
              저는 블록체인 백엔드 개발자라는 목표를 향해 나아가는 중입니다.
            </div>
            <div className="selfIntroduce_left_desc">
              남들과는 다르게 좀 더 제 자신을 보여드리고
            </div>
            <div className="selfIntroduce_left_desc">
              제가 가진 기술을 좀 더 잘 보여드리고 싶어서 제작하게되었습니다.
            </div>
          </article>
          <button className="selfIntroduce_left_button">
            자기소개서 보러가기 📝
          </button>
        </div>
        <div className="selfIntroduce_right">
          <img className="selfIntroduce_right_img" src={myself} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduce;
