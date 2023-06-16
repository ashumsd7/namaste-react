import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/ChatSlice";

function generateRandomName() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomFirstName = randomLetter + "ohn";
  const randomLastName = randomLetter + "mith";
  return randomFirstName + " " + randomLastName;
}
function generateRandomMessage() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomLetter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomLetter3 = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomWord1 = randomLetter1 + "ello";
  const randomWord2 = randomLetter2 + "orld";
  const randomWord3 = randomLetter3 + "essage 🚀";
  return randomWord1 + " " + randomWord2 + " " + randomWord3;
}
function LiveChat() {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");
  const chats = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMsg({
          name: generateRandomName(),
          msg: generateRandomMessage(),
        })
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h3 className="text-lg font-extrabold">Live Chat</h3>

      <div className="flex  gap-4 flex-col-reverse p-2 border bg-slate-100  overflow-y-auto rounded-lg w-full h-[500px]">
        {chats?.map((item, index) => (
          <ChatMsg name={item.name} msg={`${item?.msg}`} />
        ))}
      </div>

      <div className="flex gap-2 p-2 ml-2">
        <form
        className="flex gap-2 p-2 ml-2 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMsg({
                name: "Ashu",
                msg: liveMsg,
              })
            );
            setLiveMsg("");
          }}
        >
          <input
            value={liveMsg}
            onChange={(e) => {
              setLiveMsg(e.target.value);
            }}
            autoFocus
            placeholder="Chat here.."
            className="p-2 border rounded-lg w-full"
          ></input>
          <button
            disabled={!liveMsg}
       
            type="submit"
            className="border rounded-lg bg-gray-300 px-2 py-1"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default LiveChat;
