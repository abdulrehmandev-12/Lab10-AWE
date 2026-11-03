
export default function SSRPage({ post }) {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>Dynamic Server-Side Rendering</h1>
  
        <h2>{post.title}</h2>
  
        <p>{post.body}</p>
  
        <p><strong>Post ID:</strong> {post.id}</p>
  
        <p><strong>User ID:</strong> {post.userId}</p>
      </div>
    );
  }
  
  export async function getServerSideProps(context) {
    const { id } = context.params;
  
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  
    if (!res.ok) {
      return {
        notFound: true
      };
    }
  
    const data = await res.json();
  
    return {
      props: {
        post: data
      }
    };
  }
  