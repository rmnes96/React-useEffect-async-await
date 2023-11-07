import "../components/post.css";

function Post(props) {
  const { first_name, last_name, avatar, email } = props;
  return (
    <div className="post">
      <img src={avatar} alt="avatar" />
      <h2>
        {first_name} {last_name}
      </h2>
      <small>{email}</small>
    </div>
  );
}

export default Post;
