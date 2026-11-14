type CubeProps = {
  x: number;
  y: number;
  size: number;
  height?: number;
  colors: [string, string, string];
};

function Cube({ x, y, size, height = size, colors }: CubeProps) {
  const half = size / 2;
  return (
    <g>
      <path
        d={`M ${x} ${y} l ${size} ${-half} l ${size} ${half} l ${-size} ${half} Z`}
        fill={colors[0]}
      />
      <path
        d={`M ${x} ${y} l ${size} ${half} v ${height} l ${-size} ${-half} Z`}
        fill={colors[1]}
      />
      <path
        d={`M ${x + size} ${y + half} l ${size} ${-half} v ${height} l ${-size} ${half} Z`}
        fill={colors[2]}
      />
    </g>
  );
}

export function BrandMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="brand-mark"
    >
      <path
        d="M24 3 44 14.5v19L24 45 4 33.5v-19L24 3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m4 14.5 20 12 20-12M24 26.5V45M14 9l20 12v18M34 9 14 21v18"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function HeroSculpture() {
  return (
    <svg className="hero-sculpture" viewBox="0 0 600 580" fill="none">
      <defs>
        <radialGradient id="hero-glow">
          <stop stopColor="#a8cfa9" stopOpacity=".13" />
          <stop offset="1" stopColor="#a8cfa9" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="hero-grid"
          width="38"
          height="38"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M38 0H0v38"
            stroke="#b4c6ad"
            strokeOpacity=".1"
            strokeWidth=".7"
          />
        </pattern>
        <linearGradient id="hero-floor" x2="1" y2="1">
          <stop stopColor="#aec3aa" stopOpacity=".5" />
          <stop offset="1" stopColor="#aec3aa" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="310" cy="295" r="270" fill="url(#hero-glow)" />
      <circle
        cx="300"
        cy="290"
        r="218"
        stroke="#afc4aa"
        strokeOpacity=".16"
        strokeDasharray="3 7"
      />
      <ellipse
        cx="300"
        cy="388"
        rx="267"
        ry="126"
        stroke="#afc4aa"
        strokeOpacity=".2"
        transform="rotate(-24 300 388)"
      />
      <path
        d="m49 387 254-147 254 147-254 147Z"
        fill="url(#hero-grid)"
        stroke="url(#hero-floor)"
      />
      <g className="floating-cubes">
        <Cube
          x={175}
          y={298}
          size={118}
          height={116}
          colors={["#cfdec5", "#7d9c75", "#abc19f"]}
        />
        <Cube
          x={175}
          y={175}
          size={118}
          height={116}
          colors={["#e0ebd9", "#91ac86", "#b6cba9"]}
        />
        <path
          d="m175 175 118 59 118-59M293 234v116"
          stroke="#142119"
          strokeOpacity=".3"
        />
        <Cube
          x={199}
          y={114}
          size={70}
          height={68}
          colors={["#dd996e", "#965738", "#bd7952"]}
        />
        <path d="m226 101 43-22 43 22-43 22Z" fill="#e7b38f" />
        <path
          d="M293 358v41m-18-32v31m36-32v21"
          stroke="#d4e0cc"
          strokeOpacity=".35"
        />
        <path
          d="m190 310 88 44v88m-88-117 73 37v67"
          stroke="#203622"
          strokeOpacity=".3"
        />
      </g>
      <g stroke="#bfd0b6" strokeOpacity=".4">
        <path d="M102 207v18m-9-9h18M474 319v18m-9-9h18M420 96v12m-6-6h12" />
        <path d="m413 184 54-31h42M175 359l-61 35H64" />
      </g>
      <circle cx="510" cy="153" r="3" fill="#d6a279" />
      <circle cx="64" cy="394" r="3" fill="#bdcdb4" />
      <text
        x="400"
        y="496"
        fill="#a8b3a0"
        fontSize="9"
        letterSpacing="2"
        fontFamily="monospace"
      >
        IMAGINATION / IN MOTION
      </text>
    </svg>
  );
}

export function CubeWorld() {
  const terrain = [
    [1, 2, 2, 1, 1, 1],
    [2, 3, 3, 1, 1, 1],
    [2, 3, 2, 1, 2, 1],
    [1, 1, 1, 1, 2, 1],
    [1, 1, 1, 2, 2, 1],
    [1, 1, 1, 1, 1, 1],
  ];
  return (
    <svg
      className="cube-world"
      viewBox="0 0 720 475"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="world-grid"
          width="56"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="m0 14 28-14 28 14-28 14Z"
            stroke="#7a9874"
            strokeOpacity=".14"
            strokeWidth=".8"
          />
        </pattern>
        <radialGradient id="island-shadow">
          <stop stopColor="#4e6545" stopOpacity=".25" />
          <stop offset="1" stopColor="#4e6545" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M0 0h720v475H0Z" fill="url(#world-grid)" />
      <ellipse cx="360" cy="365" rx="245" ry="83" fill="url(#island-shadow)" />
      <path
        d="m125 295 235-118 235 118-235 118Z"
        stroke="#617c56"
        strokeOpacity=".4"
        strokeDasharray="3 6"
      />
      {terrain.flatMap((row, i) =>
        row.map((height, j) => {
          const x = 324 + (j - i) * 33;
          const y = 163 + (i + j) * 16.5 - height * 22;
          return (
            <Cube
              key={`${i}-${j}`}
              x={x}
              y={y}
              size={33}
              height={height * 22 + 26}
              colors={
                height > 1
                  ? ["#a0b18a", "#69795d", "#7f906e"]
                  : ["#b4c89d", "#7d8d68", "#93a77a"]
              }
            />
          );
        }),
      )}
      <g>
        <Cube
          x={324}
          y={173}
          size={33}
          height={35}
          colors={["#d6b185", "#9f7654", "#bb9168"]}
        />
        <path d="m318 170 39-36 39 36-39 20Z" fill="#c07e55" />
        <path d="m357 134 39 36-39 20Z" fill="#a66847" />
        <path d="M348 191v23l14 7v-23Z" fill="#665540" />
        <path d="m371 190 11-6v12l-11 6Z" fill="#ead3a7" />
      </g>
      <g>
        <Cube
          x={225}
          y={191}
          size={16}
          height={20}
          colors={["#496a43", "#2e5034", "#3e6240"]}
        />
        <Cube
          x={230}
          y={176}
          size={11}
          height={18}
          colors={["#6a8a58", "#3e6240", "#54794b"]}
        />
        <Cube
          x={423}
          y={224}
          size={17}
          height={23}
          colors={["#496a43", "#2e5034", "#3e6240"]}
        />
        <Cube
          x={429}
          y={209}
          size={11}
          height={17}
          colors={["#6a8a58", "#3e6240", "#54794b"]}
        />
        <Cube
          x={258}
          y={257}
          size={13}
          height={18}
          colors={["#608351", "#395b39", "#4a7145"]}
        />
      </g>
      <g className="world-gem">
        <path d="m439 113 15-15 15 15-15 28Z" fill="#d68f63" />
        <path d="m439 113 15 3v25Zm15-15 15 15-15 3Z" fill="#efba86" />
        <path
          d="M454 76v9m0 69v9m-33-49h-9m84 0h-9"
          stroke="#c08256"
          strokeWidth="1.5"
        />
      </g>
      <path
        d="m210 341 19 10m-9-14v19M526 208l19 10m-9-14v19"
        stroke="#698060"
        strokeWidth="1.5"
      />
      <path
        d="m340 255 17 8 18-8m-34 16 16 8 19-9"
        stroke="#dce4ce"
        strokeWidth="7"
      />
      <text
        x="360"
        y="437"
        textAnchor="middle"
        fill="#59704e"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="4"
      >
        ONE MORE BLOCK. ONE MORE ADVENTURE.
      </text>
    </svg>
  );
}
