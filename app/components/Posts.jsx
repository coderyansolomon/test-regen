import Post from "./Post";

// Sleep function to introduce a delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Posts({delay}) {
    // Introduce an artificial delay of 5 seconds
    await sleep(delay);

    // Fetch data directly since this runs on the server
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2').then(res => res.json());

    return (
        <div>
            {res.map((post) => <Post key={post.id} postData={post} />)}
        </div>
    );
}