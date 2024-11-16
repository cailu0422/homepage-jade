import React from 'react';
import { CONTENT_INFO } from '../data/content';

type Props = {
  menuName: string;
};

const Content: React.FC<Props> = (props: Props) => {
  return (
    <div className="content">
      {Object.keys(CONTENT_INFO).map((item, index) => {
        return (
          <video
            key={index}
            className={props.menuName === item ? 'active' : ''}
            src={`/videos/${item}.mp4`}
            autoPlay
            muted
            loop></video>
        );
      })}
      <div className={`video-overlay video-overlay-${props.menuName}`}></div>
      <section className="text-description">
        <h1>{CONTENT_INFO[props.menuName].h1}</h1>
        <h2>{CONTENT_INFO[props.menuName].h2}</h2>
        <p>{CONTENT_INFO[props.menuName].p}</p>
        <a href="#">Explore</a>
      </section>
    </div>
  );
};

export default Content;
