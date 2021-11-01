import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕 내이름 {name}이야{children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

export default MyComponent;
