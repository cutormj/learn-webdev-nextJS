
interface Post {
    id: number;
    user: string;
    time: string;
    postContent: string;
}

const PostFeed: React.FC<Post> = ({
    id, user: name, time, postContent
}) => (
    <div>
        <h5><b>{name}</b></h5>
        <code>{time}</code>
        <h3>{postContent}</h3>
    </div>
)

export default PostFeed;