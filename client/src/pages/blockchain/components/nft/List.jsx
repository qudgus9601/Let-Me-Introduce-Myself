import { useEffect, useState } from "react";
import { Loader } from "../../../../common/components/Loader";
import "./styles/list.css";

export const List = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(list);
  });
  useEffect(() => {
    let sse;
    try {
      sse = new EventSource(
        `${process.env.REACT_APP_BLOCKCHAIN_SERVER}/api/v1/nft/list`,
        {
          withCredentials: true,
        }
      );

      sse.onopen = () => {};

      sse.onmessage = async (event) => {
        const res = await event?.data;
        const resJSON = JSON.parse(res);
        list.push(resJSON);
        setList([...list]);

        if (isLoading) {
          setIsLoading(false);
        }
      };

      sse.onerror = async (event) => {
        // if (!event?.error?.message.includes("No activity")) sse.close();
      };
    } catch (error) {
      console.log(error);
    }

    return () => sse.close();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="bc_list">
      {isLoading ? <Loader text={"NFT 리스트를 가져오는중"} /> : ""}
      <div className="bc_list_container">
        {[...list]?.reverse().map((e, idx) => {
          return (
            <div className="bc_list_card" key={idx}>
              <div className="bc_list_card_container">
                <img className="bc_list_card_img" src={e.imageURI} alt="" />

                <div className="bc_list_card_title">
                  {e.name.length > 12
                    ? `${e.name.substring(0, 12)}...`
                    : e.name.length}
                </div>
                <div className="bc_list_card_description">{e.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
