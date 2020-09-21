import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Hare Qoqe: By Andreas Motsie{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
    </div>
    {users ? (
      <div>
        <h3>People currently chatting:</h3>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}

    <p>
      Created with React, Express, Node and Socket.IO{" "}
      <span role="img" aria-label="emoji">
        ❤️
      </span>
    </p>
  </div>
);

export default TextContainer;
