export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/api/post/${params.id}`)
    const data = await req.json()

    return {
        props: {
            blogPost: data
        }
    }
}

const BlogPost = ({ blogPost }) => {

    return (
        <>
        <h1 className="text-5xl font-bold my-4">{blogPost.title}</h1>
        <p>{blogPost.content}</p>
        </>
    )
}

export default BlogPost