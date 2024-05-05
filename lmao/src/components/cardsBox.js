import { useRef, useEffect } from "react";
import Card from "./card";

const colors = {
  gray: "#F1F1F1",
  green: "#17FF40",
  blue: "#8AC7FD",
  red: "#F4BCBE"
};

const cardData = [
  {
    color: colors.red,
    id: 1
  },
  {
    color: colors.gray,
    id: 2
  },
  {
    color: colors.blue,
    id: 3
  },
  {
    color: colors.green,
    id: 4
  },
  {
    color: colors.red,
    id: 5
  },
  {
    color: colors.gray,
    id: 6
  },
  {
    color: colors.blue,
    id: 7
  },
  {
    color: colors.green,
    id: 8
  }
];

export default function CardsBox() {
  const boxRef = useRef(null);
  const scrollDistance = useRef(0);

  useEffect(() => {
    function handleScroll(e) {
      scrollDistance.current += e.deltaY;

      const arrayChildren = Array.from(boxRef.current.childNodes);

      if (Math.abs(scrollDistance.current) >= 450) {
        if (scrollDistance.current > 0) {
          // slides to right
          arrayChildren.unshift(arrayChildren.pop());

          scrollDistance.current -= 450;
          console.log("j");
        } else {
          // slides to left
          arrayChildren.push(arrayChildren.shift());
          scrollDistance.current += 450;
        }

        boxRef.current.innerHTML = "";
        boxRef.current.append(...arrayChildren);
      }

      boxRef.current.style.transform = `translateX(${scrollDistance.current}px)`;
    }

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      id="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex"
        }}
        ref={boxRef}
      >
        {cardData.map((item, index) => {
          return <Card key={item.id} color={item.color} />;
        })}
      </div>
    </div>
  );
}
