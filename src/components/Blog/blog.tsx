//import React, { useContext } from 'react';
//import { ProfileContext } from '../../pages';
//import classNames from 'classnames';
//import { graphql, useStaticQuery } from 'gatsby';

//const Blog = ({ props }): JSX.Element => {
  //const context = useContext(ProfileContext);
  //const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  //console.log(props);
  //const posts = props?.posts;

  //return (
    //<section
      //className={classNames('py-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    //>
      //<div className="container mx-auto">
        //<h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>Blog</h2>
        //<div className="flex flex-col sm:flex-row">
          //{posts?.edges.map((post: any) => (
            //<PostCard key={post.node.slug} post={post} />
          //))}
        //</div>
      //</div>
    //</section>
  //);
//};

//export default Blog;

//export const query = graphql`
  //query ($language: String!) {
    //locales: allLocale(filter: { language: { eq: $language } }) {
      //edges {
        //node {
          //ns
          //data
          //language
        //}
      //}
    //}
  //}
//`;
//const PostCard = (props: { post: any }) => {
  //console.log(post);
  //const context = useContext(ProfileContext);
  //const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  //return (
    //<a
      //className={classNames('flex-1 m-5 shadow-xl rounded-lg bg-gray-200', {
        //'bg-gray-200': context.isLightTheme,
        //'bg-gray-700': !context.isLightTheme,
      //})}
      //href={`https://blog.helmerdavila.com${props.post.node.slug}`}
      //target="_blank"
      //rel="noopener noreferrer"
    //>
      //<div className="relative mb-3 bg-black rounded-lg pb-2/3">
        //<img
          //className="absolute object-cover w-full h-full rounded-t-lg"
          //alt={props.post.node.featuredImage ?? 'Helmer blog'}
          //src={
            //props.post.node.featuredImage ??
            //'https://blog.helmerdavila.com/wp-content/uploads/2019/03/business-code-coding-943096-1-868x579.jpg'
          //}
        ///>
      //</div>
      //<h3 className={classNames('text-4xl font-semibold text-center p-4', textColor)}>{props.post.node.title}</h3>
    //</a>
  //);
//};
