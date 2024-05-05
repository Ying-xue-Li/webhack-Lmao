import '../index.css';

export default function Card({ color, title, text1, text2 }) {
    return (
      <div
        className='advice-card'>
        <div
          className="flex flex-col"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <span
            className="heading-style-headline"
          >
            Suki says:{title}
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
            <circle cx="5" cy="5" r="4.5" stroke="white" />
            <circle cx="17.5" cy="5" r="5" fill="white" />
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
              fontWeight: 200,
              opacity: 0.8,
              fontSize: 16,
              wordBreak: "break-word"
            }}
          >
            <p
            className='text-style-footnote'
              style={{
                marginBottom: 0
              }}>
              {text1}
            </p>

            <p
            className='text-style-footnote'>
              {text2}
            </p>
          </div>
        </div>
      </div>
    );
  }