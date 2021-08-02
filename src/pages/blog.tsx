// import { Link } from 'gatsby';
// import React from 'react';
// import LayoutBlog from '../components/LayoutBlog';
//
// interface IBlogPost {
//   slug: string;
//   excerpt: string;
//   frontmatter: {
//     title: string;
//     description: string;
//     published: boolean;
//     date: string;
//     lang: string;
//     imageCover: string;
//     imageAlt: string;
//   };
// }
// interface IBlogPageQuery {
//   blogposts: {
//     edges: { node: IBlogPost }[];
//   };
// }
//
// const Blog = ({ data }: { data: IBlogPageQuery }) => {
//   const posts = data?.blogposts?.edges;
//
//   return (
//     <LayoutBlog>
//       <div className="container max-w-3xl pb-3 mx-auto">
//         {posts.map((post) => (
//           <Link
//             to={`/${post.node.slug}`}
//             className="block mt-10 bg-white border-2 rounded-md shadow-sm first:mt-3"
//             key={post.node.slug}
//           >
//             <img
//               src={post.node?.frontmatter?.imageCover ?? 'https://assets.taskalia.com/blog/macbook.jpg'}
//               alt={post.node?.frontmatter?.imageAlt ?? 'Photo by Nikolay Tarashchenko on Unsplash'}
//             />
//             <div className="p-6">
//               <h2 className="text-4xl font-bold">{post.node?.frontmatter?.title}</h2>
//               <h5 className="mb-2 text-xl">{post.node?.frontmatter?.description}</h5>
//               <p className="mt-2 text-lg">{post.node?.excerpt}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </LayoutBlog>
//   );
// };
//
// export default Blog;
