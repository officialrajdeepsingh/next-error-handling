
type Post = {
    id: number;
    title: string;
    body: string;
    tags: string[]; 
    reactions: { likes: number; dislikes: number; },
    views: number;
    userId: number;

}
type TypeResults = {
   total: 251,
   skip: 0,
   limit: 30
   posts: Post[]
}

export default async function Home() {

  const data = await fetch('https://dummyjson.com/posts?limit=3')
  const result:TypeResults = await data.json()
  const { posts } = result

return (
    <div className="flex mt-12 mx-auto w-3/6 md:justify-between lg:flex-col">
      {  posts.map((post) => (
       <div key={post.id} className="flex mb-10 bg-teal-800 flex-col items-start p-4 lg:px-8">
            <h1 className="mb-2 text-xl font-bold sm:text-base"> {post.title} </h1>
            <p>{post.body}</p>
        </div>
      ))
      }
    </div>
  ) 
}
