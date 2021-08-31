import { useState } from "react";
import "./Item.scss";

const Item = (props) => {
  const [showContent, changeContent] = useState(false);

  const handleClick = (event) => {
    if (showContent) {
      changeContent(false);
    } else {
      changeContent(true);
    }
  };

  return (
    <div className="row col-6 d-flex mx-auto item" role="presentation">
      <div className="col-1 d-flex">
        <div className="text-muted">#</div>
        {props.id}
      </div>
      <div className="col-11 align-items-start d-flex flex-column">
        <div className="">{props.who}</div>
        <div className="story_date text-muted">{props.date}</div>
        <button className="story_title" onClick={handleClick}>
          {props.title}
        </button>

        <div className="story_content">{showContent ? props.content : ""}</div>

        <div className="story_tags">
          <div className="d-inline-flex ">
            <div className="text-muted">#</div>
            {props.tags[0]}&nbsp;&nbsp;
          </div>
          <div className="d-inline-flex">
            <div className="text-muted">#</div>
            {props.tags[1]}&nbsp;&nbsp;
          </div>
          <div className="d-inline-flex">
            <div className="text-muted">#</div>
            {props.tags[2]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
