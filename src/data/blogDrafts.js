// Blog DRAFTS. These are NOT shown on the website: the blog only shows posts from True Blogger.
// Write a post here, then send it to True Blogger with the posting script:
//   npm run post-blog -- <slug>                  preview
//   npm run post-blog -- <slug> --send --public  post it (it appears on the site within 5 minutes)
//
// slug: lowercase words with dashes. date: "YYYY-MM-DD". cover is ignored by the script.
// body: blocks shown in order. True Blogger has no headings, so h2 is sent as a bold paragraph.
//   { type: "p", text: "..." }          paragraph
//   { type: "h2", text: "..." }         section heading (bold paragraph on True Blogger)
//   { type: "list", items: ["...", ] }  bullet list
//   { type: "code", code: "..." }       code block
//   { type: "quote", text: "..." }      pull quote

export const drafts = [];
