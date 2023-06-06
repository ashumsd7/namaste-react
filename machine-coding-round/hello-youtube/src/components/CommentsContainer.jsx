import React from "react";
const commentsData = [
  {
    name: "Jignesh Yadav",
    text: "I have commented on your post",
    replies: [],
  },
  {
    name: "Lopa Maurya",
    text: "I have commented on your post",
    replies: [
      {
        name: "Pranjal Gupta",
        text: "I have commented on your post",
        replies: [
          {
            name: "Tarkeshwar Ji",
            text: "I have commented on your post",
            replies: [
              {
                name: "Manoj Verma",
                text: "I have commented on your post",
                replies: [
                  {
                    name: "Tarkeshwar Ji",
                    text: "I have commented on your post",
                    replies: [
                      {
                        name: "Manoj Verma",
                        text: "I have commented on your post",
                        replies: [],
                      },
                      {
                        name: "Rapchik Yadav",
                        text: "I have commented on your post",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Hello Dr",
                    text: "I have commented on your post",
                    replies: [],
                  },
                ],
              },
              {
                name: "Rapchik Yadav",
                text: "I have commented on your post",
                replies: [],
              },
            ],
          },
          {
            name: "Hello Dr",
            text: "I have commented on your post",
            replies: [],
          },
        ],
      },
      {
        name: "Abhishesk S Yadav",
        text: "I have commented on your post",
        replies: [
          {
            name: "Ravi Bopara",
            text: "I have commented on your post",
            replies: [],
          },
          {
            name: "James Sir",
            text: "I have commented on your post",
            replies: [],
          },
          {
            name: "Writer P Wade",
            text: "I have commented on your post",
            replies: [],
          },
          {
            name: "Dev K Kumar",
            text: "I have commented on your post",
            replies: [
              {
                name: "Tarkeshwar Ji",
                text: "I have commented on your post",
                replies: [
                  {
                    name: "Manoj Verma",
                    text: "I have commented on your post",
                    replies: [],
                  },
                  {
                    name: "Rapchik Yadav",
                    text: "I have commented on your post",
                    replies: [
                      {
                        name: "Tarkeshwar Ji",
                        text: "I have commented on your post",
                        replies: [
                          {
                            name: "Manoj Verma",
                            text: "I have commented on your post",
                            replies: [],
                          },
                          {
                            name: "Rapchik Yadav",
                            text: "I have commented on your post",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Hello Dr",
                        text: "I have commented on your post",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Hello Dr",
                text: "I have commented on your post",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ramesh Jr Yadav",
    text: "I have commented on your post I have commented on your post I have commented on your post I have commented on your post I have commented on your post",
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="border px-4 py-2 my-2 flex flex-col bg-gray-100 rounded-xl ">
      <div className="flex gap-2 items-center">
        <img
          className="h-10"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        ></img>
        <div className="flex flex-col ">
          <h3 className="text-xl font-bold">{data?.name} </h3>
          <h3 className=" font-semibold ">{data?.text} </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment,index) => {
        return (
          <div key={index}>
            <Comment data={comment}></Comment>
            <div className="border-l-2 border-black rounded-lg ml-6">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
function CommentsContainer() {
  return (
    <div className="px-4 py-2 h-96 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Comments:</h1>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
}

export default CommentsContainer;
