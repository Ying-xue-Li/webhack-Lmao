import { useEffect, useRef } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

function MovingEye() {
  const eyeRef = useRef(null);

  const angleMove = useMotionValue(0);

  const disMove = useMotionValue(800);

  const moveX = useTransform(angleMove, [0, 180], [0, 14]);

  const moveY = useTransform(angleMove, [0, 90, 180], [0, 3, 0]);

  const scaleX = useTransform(disMove, [30, 800], [1, 0.4]);

  const scaleY = useTransform(disMove, [30, 800], [1, 0.75]);

  useEffect(() => {
    if (eyeRef.current) {
        // 在这里执行获取元素的代码
        const elementRect = eyeRef.current.getBoundingClientRect();
    
    window.addEventListener("mousemove", (e) => {
      // 获取鼠标位置
      const mousePos = { x: 0, y: 0 };
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;

      // 获取元素中心位置
      const elementRect = eyeRef.current.getBoundingClientRect();
      const elementCenter = {
        x: elementRect.left + elementRect.width / 2,
        y: elementRect.top + elementRect.height / 2
      };

      // 计算角度
      const deltaX = mousePos.x - elementCenter.x;
      const deltaY = mousePos.y - elementCenter.y;
      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      console.log(angle);

      const disDeltaX = mousePos.x - elementCenter.x;
      const disDeltaY = mousePos.y - elementCenter.y;
      const distance = Math.sqrt(disDeltaX * disDeltaX + disDeltaY * disDeltaY);

      angleMove.set(180 - Math.abs(angle));
      disMove.set(distance);
    });
  }}, [angleMove, disMove]);

  return (
    <div>
      <div
        x-name="blackEye"
        className="rounded-full bg-black h-8 w-8 relative"
        style={{
          backgroundColor: "black",
          position: "relative",
          height: "2rem",
          width: "2rem",
          borderRadius: "50%"
        }}
      >
        <motion.div
          ref={eyeRef}
          style={{
            x: moveX,
            y: moveY,
            scaleX: scaleX,
            scaleY: scaleY,
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: "white",
            height: "0.75rem",
            width: "0.75rem",
            bottom: "0.5rem",
            left: "0.25rem"
          }}
          x-name="whiteEye"
        ></motion.div>
      </div>
    </div>
  );
}

export default function MovingEyes() {
  return (
    <div
      style={{
        backgroundColor:"white",
        display: "flex",
        gap: "0.5rem"
      }}
    >
      <MovingEye />
      <MovingEye />
    </div>
  );
}
