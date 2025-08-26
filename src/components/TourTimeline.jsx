import "./styles/TourTimeline.css";
import ServiceCard from "./ServiceCard";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useMemo,
  createRef,
} from "react";
import Trident from "../assets/trident.png";



export default function TourTimeline({lessonData}) {
  const [dotY, setDotY] = useState(() => Array(lessonData.length).fill(0));

  // Left column ref (positioning frame)
  const timelineColRef = useRef(null);

  // One ref per ServiceCard title
  const titleRefs = useMemo(
    () => lessonData.map(() => createRef()),
    [] 
  );

  const computePositions = () => {
    const tlBox = timelineColRef.current?.getBoundingClientRect();
    if (!tlBox) return;

    const centerYInTimeline = (el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2 - tlBox.top; // center relative to timeline-col
    };

    const ys = titleRefs.map((r) => centerYInTimeline(r.current));
    setDotY(ys);
  };

  useLayoutEffect(() => {
    computePositions();
    const onResize = () => computePositions();
    const onScroll = () => computePositions();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="tour-services-layout">
      {/* Left column */}
      <main className="tour-content-col">
        <p className="content-text">
          We design every tour to showcase what matters most to your students—explore 
          our
          <span className="highlight"> customized </span>
          campus experiences, from
          <span className="highlight"> cutting-edge labs </span>
          to vibrant
          <span className="highlight"> student life </span>
          all designed to inspire future engineers.
        </p>

        {lessonData.map(({ title, lesson , image}, i) => (
          <ServiceCard
            key={title}
            ref={titleRefs[i]}
            title={title}
            content={lesson}
            image={image}
            note="" // optional note next to photo card
            reverse={true} // smart idea to swop the grids for image box and note box
          />
        ))}
      </main>


      {/* Right column */}
      <aside className="tour-timeline-col" ref={timelineColRef}>
        <div className="tour-timeline-line" />
        {/* Dots aligned to each ServiceCard title */}
        {dotY.map((y, i) => (
          <span
            key={`dot-${i}`}
            className="timeline-dot"
            style={{ top: y }}
            aria-hidden="true"
          />
        ))}

        <div className="tour-trident-block">
          <h1 className="tour-trident-title">Tours</h1>
          <img className="tour-trident-img" src={Trident} alt="Trident" />
          <h1 className="tour-trident-sub">You come to us</h1>
        </div>
      </aside>
    </div>
  );
}
