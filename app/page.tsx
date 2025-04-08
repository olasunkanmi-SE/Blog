import About from "./about/page"

export default async function Home() {
  // const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  // const posts = allCoreContent(sortedPosts)

  return (
    <div style={{ marginTop: "-50px" }}>
      <About />
    </div>
  )
}
