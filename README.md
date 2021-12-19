# Jackson's website (mostly)
Currently, this repo is the backbone for [my blog (blog.jacksonrakena.com)](https://blog.jacksonrakena.com), using a fairly standard Next.js setup using MDX files.

### Structure
`_posts/*.mdx` -> blog post content  
`api/posts.tsx` -> build-time generators for compiling posts into usable pages  
`pages` -> home page and other Next-related data  
`pages/posts/[slug].tsx` -> Next static path handler for rendering posts  

### Copyright
All files under `_posts` are copyright &copy; 2021 Jackson Rakena, all rights reserved.  
Everything else, including the blog's infrastructure, is &copy; Jackson Rakena under the MIT License.
