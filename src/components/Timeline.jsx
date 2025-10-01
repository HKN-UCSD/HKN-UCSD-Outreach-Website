import "./styles/Timeline.css";
import ServiceCard from "./ServiceCard";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useMemo,
  createRef,
} from "react";
import Trident from "../assets/trident.png";


export default function Timeline({lessonData}) {
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
    
    <div className="services-layout">
      {/* Left column */}
      <aside className="timeline-col" ref={timelineColRef}>
        <div className="timeline-line" />
        {/* Dots aligned to each ServiceCard title */}
        {dotY.map((y, i) => (
          <span
            key={`dot-${i}`}
            className="timeline-dot"
            style={{ top: y }}
            aria-hidden="true"
          />
        ))}

        <div className="trident-block">
          <h1 className="trident-title">Lessons</h1>
          <img className="trident-img" src={Trident} alt="Trident" />
          <h1 className="trident-sub">We come to you</h1>
        </div>
      </aside>

      {/* Right column */}
      <main className="content-col">
        <p className="content-text">
          We craft each lesson to fit your students’ needs—explore our tailored
          resources in
          <span className="highlight"> Computer Science</span>,
          <span className="highlight"> Mechanical Engineering</span>, and
          <span className="highlight"> Electrical Engineering</span> to empower
          every learner.
        </p>

        {lessonData.map(({ title, lesson, image, description }, i) => (
          <ServiceCard
            key={title}
            ref={titleRefs[i]}
            title={title}
            content={lesson}
            image={image}
            description={description}
          />
        ))}
      </main>
    </div>
  );
}
