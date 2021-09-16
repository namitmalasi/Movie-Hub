import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      ></img>
      <b className="title">{title}</b>
      <div>
        <span className="subtitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span className="subtitle2">{date}</span>
      </div>
    </div>
  );
};

export default SingleContent;
