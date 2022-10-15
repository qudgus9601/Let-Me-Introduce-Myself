import Card from "../components/common/Card";
import "./styles/work.css";

const Works = () => {
  const dummy = [
    {
      _id: "nlfqj",
      title: "DIDNOW",
      author: "작가1",
      content: "내용1",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 1,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "DID와 스마트컨트랙트 신원증명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj2",
      title: "제목2",
      author: "작가2",
      content: "내용2",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 2,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj3",
      title: "제목3",
      author: "작가3",
      content: "내용3",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 3,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj4",
      title: "제목4",
      author: "작가4",
      content: "내용4",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 4,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj4",
      title: "제목4",
      author: "작가4",
      content: "내용4",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 4,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj4",
      title: "제목4",
      author: "작가4",
      content: "내용4",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 4,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj4",
      title: "제목4",
      author: "작가4",
      content: "내용4",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 4,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
    {
      _id: "nlfqj4",
      title: "제목4",
      author: "작가4",
      content: "내용4",
      thumbnail: "didnow.png",
      createdAt: "2022-10-14",
      updtaedAt: "2022-10-14",
      notice: false,
      viewCount: 4,
      startDate: "2022-01-01",
      finishDate: "2022-01-02",
      teamMate: ["안병현"],
      desc: "대충 간략한 설명",
      size: "토이프로젝트",
      type: "블록체인 프로젝트",
    },
  ];

  return (
    <div className="works">
      <div className="works_center">
        {dummy.map((e, idx) => {
          return (
            <div key={idx} className="works_post_card_container">
              <Card data={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
