import React from "react";

const LoadingComponent = () => {
  return (
    <div>
      <div className="loader-background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="animation"
        >
          <circle fill="#022937" stroke="none" cx="16" cy="50" r="12">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#022937" stroke="none" cx="66" cy="50" r="12">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#022937" stroke="none" cx="116" cy="50" r="12">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default LoadingComponent;
