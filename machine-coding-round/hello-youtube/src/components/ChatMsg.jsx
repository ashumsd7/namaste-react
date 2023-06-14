import React from "react";

function ChatMsg({ name = "Name", msg = "msgs" }) {
  return (
    <div className="flex gap-2 items-center drop-shadow-2xl">
      <img
        id="img"
        draggable="false"
        class="style-scope yt-img-shadow rounded-full"
        alt=""
        height="24"
        width="24"
        src="https://yt4.ggpht.com/ytc/AGIKgqO722L_bFI47P4QVQGgQQ-e0DbX-WgEl0aHtQaYO9uNaM7V0ObgZSGxvMbPI7l_=s32-c-k-c0x00ffffff-no-rj"
      ></img>
      <span className="font-bold">{name}</span>
      <span>{msg}</span>
    </div>
  );
}

export default ChatMsg;
