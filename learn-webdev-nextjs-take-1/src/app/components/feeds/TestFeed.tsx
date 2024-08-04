
interface Post {
    id: number;
    quote: string;
}

const TestFeed: React.FC<Post> = ({
    id, quote, 
}) => (
    <div>
        <h5><b>{quote}</b></h5>
    </div>
)

export default TestFeed;