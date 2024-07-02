import React from "react";

type Props = {
  topic: string;
};

const TopicComp = ({ topic }: Props) => {
  return <div>{topic}</div>;
};

export default TopicComp;
