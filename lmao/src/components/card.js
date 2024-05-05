export default function Card({ color }) {
    return (
      <div
        // className={
        //   `bg-hc-${courseData.color} w-full h-full rounded-3xl p-10 border border-black flex flex-col justify-between cursor-pointer`
        // }
        style={{
          width: 500,
          border: "1px solid black",
          height: 300,
          borderRadius: 20,
          padding: 22,
          backgroundColor: color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          cursor: "pointer",
          flexShrink: 0,
          margin: 15,
          boxSizing: "border-box"
        }}
      >
        <div
          className="flex flex-col"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <span
            // className={` ${OpticianSans.className} text-5xl`}
            style={{
              fontFamily: "Optician Sans",
              fontSize: 56
            }}
          >
            Hope this one helps
          </span>
          <span
            className="text-4xl font-thin"
            style={{
              fontSize: 38,
              letterSpacing: 2,
              fontWeight: 100
            }}
          >
            Suki's advice
          </span>
        </div>
        <div
          // className="flex flex-col gap-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <svg
            width="23"
            height="10"
            viewBox="0 0 23 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="4.5" stroke="black" />
            <circle cx="17.5" cy="5" r="5" fill="black" />
          </svg>
          <div
            className="text-xl font-thin flex flex-col gap-2 leading-8"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              lineHeight: 1.5,
              textAlign: "left",
              fontWeight: 100,
              opacity: 0.8,
              fontSize: 20
            }}
          >
            <p
              style={{
                marginBottom: 0
              }}
            >
              Get out, hydrate, sunshine, meat, and birds.
            </p>
            <p>
              Book a therapy, extension, or a ticket to another timezone.
            </p>
          </div>
        </div>
      </div>
    );
  }