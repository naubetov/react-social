import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Akgul21",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/14170543/pexels-photo-14170543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc: "2023",
      img: "https://images.pexels.com/photos/14170543/pexels-photo-14170543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Akgul21",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/14170543/pexels-photo-14170543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc: "",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;