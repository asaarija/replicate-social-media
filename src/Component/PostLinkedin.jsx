import React from "react";
import { POSTLINKEDIN } from "../Contains/contains.js";

function CommentSection({ post }) {
  return (
    <>
      {post.comments && post.comments.length > 0
        ? post.comments.map((comment, idx) => (
            <div key={idx} className="p-1">
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2 justify-between">
                  <div className="flex items-center  mb-2">
                    <img
                      src={comment.imagecomentar}
                      alt=""
                      className="w-[30px] rounded-full m-2"
                    />
                    <div>
                      <h1 className="font-bold">{comment.profile}</h1>
                      <p className="text-[10px]">{comment.bio}</p>
                    </div>
                  </div>
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#1f1f1f"
                  >
                    <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                  </svg>
                </div>
                <div>{comment.commentText}</div>
                <div>
                  <button className="cursor-pointer text-black"> Like</button> |
                  <button className="cursor-pointer text-black ml-2">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

const PostLinkedin = () => {
  const [followed, setFollowed] = React.useState(false);
  const [Liked, setLiked] = React.useState(false);
  return (
    <>
      {POSTLINKEDIN.map((post, index) => (
        <div key={index} className="p-3 min-md:w-[50%] m-auto">
          <div className="bg-white p-4 rounded-lg mb-4">
            {/* // Header section with user information */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <a href="">
                  <img
                    src={post.image}
                    alt=""
                    width="50px"
                    className="rounded-full"
                  />
                </a>
                <a href="">
                  <h1 className="font-bold">{post.name}</h1>
                  <h2 className="text-[12px]">{post.bio}</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-[10px]">{post.date}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#1f1f1f"
                    >
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z" />
                    </svg>
                  </div>
                </a>
              </div>
              <button
                onClick={() => {
                  setFollowed((prev) => !prev);
                }}
                className="font-bold cursor-pointer text-blue-400"
              >
                {followed ? "Followed" : "+ Follow"}
              </button>
            </div>
          </div>
          {/* // Post content */}
          <div className="bg-white p-4 rounded-lg mb-2">
            <p>{post.post}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="cursor-pointer">
                {Liked ? "1" : "0"} Like
              </button>
              <div className="flex items-center gap-4">
                <button className="cursor-pointer">
                  {post.comments?.length || 0} comments
                </button>
                <button className="cursor-pointer">
                  {post.repost} repost{" "}
                </button>
              </div>
            </div>
          </div>
          {/* // Interaction buttons */}
          <div className="border-t border-gray-300">
            <div className="flex justify-between items-center mt-4  w-[80%] m-auto">
              <button className="flex cursor-pointer items-center gap-1">
                <img
                  src={post.image}
                  alt=""
                  className="w-[30px] rounded-full h-[30px]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#1f1f1f"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </button>

              <button
                onClick={() => {
                  setLiked((prev) => !prev);
                }}
                className="flex cursor-pointer items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill={Liked ? "blue" : "#1f1f1f"}
                >
                  <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                </svg>
                <h1>{Liked ? "Liked" : "Like"}</h1>
              </button>

              <button className="flex cursor-pointer items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#1f1f1f"
                >
                  <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                </svg>
                <h1>Comment</h1>
              </button>

              <button className="hidden min-md:flex cursor-pointer items-center">
                <svg
                  fill="#000000"
                  width="24px"
                  height="24px"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                </svg>
                <h1>Repost</h1>
              </button>

              <button className="hidden min-md:flex cursor-pointer items-center gap-1">
                <svg
                  fill="#000000"
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <path d="M11.499,19.173l5.801,-5.849c0.389,-0.392 1.022,-0.394 1.414,-0.006c0.392,0.389 0.395,1.022 0.006,1.414l-5.798,5.847l5.306,8.002c0.207,0.313 0.572,0.483 0.945,0.441c0.373,-0.042 0.691,-0.289 0.824,-0.64l9.024,-23.904c0.138,-0.366 0.05,-0.78 -0.226,-1.058c-0.276,-0.278 -0.689,-0.369 -1.057,-0.233l-24.004,8.892c-0.353,0.13 -0.602,0.448 -0.646,0.821c-0.044,0.373 0.125,0.74 0.438,0.948l7.973,5.325Z" />
                  <g id="Icon" />
                </svg>
                <h1>Send</h1>
              </button>
            </div>
          </div>
          {/* Comment */}
          <div className="my-4">
            <form
              action=""
              className="rounded-full border-1 border-gray-400  p-2 w-[100%] m-auto flex justify-between items-center"
            >
              <input
                type="text"
                placeholder="add a comment..."
                className="w-[90%]  border-none outline-none focus:ring-0 focus:outline-none focus:border-transparent"
              />
              <div className="flex items-center gap-2">
                <button className="cursor-pointer">
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#1f1f1f"
                  >
                    <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
                  </svg>
                </button>
                <button className="cursor-pointer">
                  <svg
                    version="1.1"
                    id="svg2"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    sodipodi:docname="picture.svg"
                    inkscape:version="0.48.4 r9939"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 1200 1200"
                  >
                    <path
                      id="path16525"
                      inkscape:connector-curvature="0"
                      d="M0,99.243v1001.514h1200V99.243H0z M92.065,192.847h1015.869v814.307
  H92.065V192.847z M301.465,310.4c-28.65,0-52.756,9.762-72.29,29.297c-19.534,19.535-29.297,43.64-29.297,72.29
  c0,27.349,9.763,50.777,29.297,70.312c19.534,19.535,43.64,29.297,72.29,29.297c27.348,0,50.778-9.763,70.313-29.297
  c19.535-19.534,29.297-42.964,29.297-70.312c0-28.65-9.763-52.755-29.297-72.29C352.244,320.162,328.813,310.4,301.465,310.4z
   M733.154,359.912L502.661,709.57L380.273,607.983L199.878,842.358v68.407h800.244V635.962L733.154,359.912z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          {/* select Comments */}
          <form className="w-full flex justify-start mt-2">
            <select
              name="commentSort"
              id="Comment"
              className="rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue="most-relevant"
            >
              <option value="most-relevant">Most relevant</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </form>
          <CommentSection post={post} />
        </div>
      ))}
    </>
  );
};

export default PostLinkedin;
