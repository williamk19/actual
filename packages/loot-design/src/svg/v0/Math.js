import * as React from 'react';

const SvgMath = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <path
      fill="currentColor"
      d="M2.813 0A2.81 2.81 0 0 0 0 2.812v8.022a2.8 2.8 0 0 0 2.813 2.802h8.01a2.8 2.8 0 0 0 2.813-2.802V2.812A2.81 2.81 0 0 0 10.824 0H2.813zm16.363 0a2.81 2.81 0 0 0-2.812 2.812v8.022a2.8 2.8 0 0 0 2.812 2.802h8.012A2.8 2.8 0 0 0 30 10.834V2.812A2.81 2.81 0 0 0 27.187 0h-8.01zM6.796 2.365c.73-.011 1.397.657 1.386 1.385v1.705h1.704c.72-.01 1.383.643 1.383 1.363s-.662 1.374-1.383 1.364H8.182v1.704c.01.72-.643 1.383-1.364 1.383-.72 0-1.374-.662-1.363-1.383V8.182H3.75c-.72.01-1.383-.643-1.383-1.364 0-.72.663-1.374 1.383-1.363h1.705V3.75c-.012-.714.628-1.374 1.342-1.385zm15.182 1.321 1.204 1.204 1.204-1.204c.573-.468 1.285-.54 1.841-.101.605.531.563 1.545.087 2.03L25.11 6.817l1.204 1.204c.522.5.531 1.437.02 1.948-.512.512-1.447.502-1.948-.02l-1.204-1.204-1.204 1.204c-.501.522-1.437.532-1.948.02-.512-.511-.502-1.447.02-1.948l1.204-1.204-1.204-1.204c-.53-.769-.48-1.4.062-2.008.617-.41 1.322-.464 1.866.08zM2.812 16.364A2.81 2.81 0 0 0 0 19.176v8.022A2.8 2.8 0 0 0 2.813 30h8.01a2.8 2.8 0 0 0 2.813-2.802v-8.022a2.81 2.81 0 0 0-2.812-2.812H2.813zm16.364 0a2.81 2.81 0 0 0-2.812 2.812v8.022A2.8 2.8 0 0 0 19.176 30h8.012A2.8 2.8 0 0 0 30 27.198v-8.022a2.81 2.81 0 0 0-2.813-2.812h-8.01zm.8 3.409h6.274c.72-.01 1.383.643 1.383 1.363S26.97 22.51 26.25 22.5h-6.136c-.714.036-1.397-.58-1.433-1.294-.037-.714.58-1.397 1.294-1.433zM3.611 21.818h6.274c.72-.01 1.383.643 1.383 1.364 0 .72-.662 1.374-1.383 1.363H3.75c-.714.037-1.397-.58-1.433-1.294-.036-.714.58-1.397 1.295-1.433zm16.363 2.046h6.275c.72-.01 1.383.643 1.383 1.363s-.663 1.374-1.383 1.364h-6.136c-.714.036-1.397-.58-1.433-1.295-.037-.714.58-1.396 1.294-1.432z"
    />
  </svg>
);

export default SvgMath;