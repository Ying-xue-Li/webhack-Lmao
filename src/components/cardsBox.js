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
    id: 1,
    title: "Short Extension",
    text1:"Did you forget to book a short extension? Every student can get a two-day extension unconditionally. ",
    text2:"Give yourself 2 days to catch your breath at https://forms.monash.edu/special-consideration "
  },
  {
    color: colors.gray,
    id: 2,
    title: "Mental Therapy",
    text1:"Feeling overwhelmed? call (03) 9905 3020",
    text2:"Did you know that every student can has 10 free therapy sessions per year at the uni? https://www.monash.edu/students/support/health/mental-health/resources "
  },
  {
    color: colors.blue,
    id: 3,
    title: "To Another Timezone",
    text1:"Deadline approaching? Book a ticket to a different timezone!",
    text2:"The further you go, the further your deadline gets away from you! https://www.virginaustralia.com/au/en/ "
  },
  {
    color: colors.green,
    id: 4,
    title:"Gamble",
    text1:"Sign a gamble agreement with your friend!",
    text2:"Pledge $100 to your friend, and if you fail to complete the task on time, you will lose the money. Let's pray that you don't end up both failing to complete the task and losing $100."
  },
  {
    color: colors.red,
    id: 5,
    title:"Buy Lottery",
    text1:"Life is already tough, but if you still hold onto hope, go ahead and buy a lottery ticket. ",
    text2:"Even though the odds of winning are low, at least you'll have that moment of excitement and anticipation right before the draw."
  },
  {
    color: colors.gray,
    id: 6,
    title:"Dopamine Detox",
    text1:"I know it's harsh, but putting your phone in cabinet, or uninstalling YouTube and TikTok.",
    text2:"I'm just a cat, I don't know why you deleted and reinstalled these apps so many times."
  },
  {
    color: colors.blue,
    id: 7,
    title:"Emotional Support",
    text1:"Call your family, friends, or anyone you trust.",
    text2:"Meeting up with them, hugging, and talking will all be very helpful in reconnecting you with a sense of community."
  },
  {
    color: colors.green,
    id: 8,
    title:"Death Loop Alarm",
    text1:"If you're tough enough on yourself, then set a reminder every five minutes to pull your attention back on track. ",
    text2:"This will not only torture you but also your roommates, and me."
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
        backgroundColor: "#131316",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px"
      }}
    >
      <div
        style={{
          backgroundColor:"#131316",
          display: "flex"
        }}
        ref={boxRef}
      >
        {cardData.map((item, index) => {
          return <Card 
          key={item.id} color={item.color} title={item.title} text1={item.text1} text2={item.text2}/>;
        })}
      </div>
    </div>
  );
}
