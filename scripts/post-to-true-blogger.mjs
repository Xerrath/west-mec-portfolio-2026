// Posts one draft (src/data/blogDrafts.js) to True Blogger.
//
//   npm run post-blog -- <slug>                    preview only, nothing is sent
//   npm run post-blog -- <slug> --send             create it as PRIVATE (only you can see it)
//   npm run post-blog -- <slug> --send --public    create it as PUBLIC (shows on the portfolio too)
//
// Needs TRUE_BLOGGER_WRITE_KEY in .env.local: a read + write key, and a Professional account.
// The website itself only uses the read-only TRUE_BLOGGER_API_KEY.
//
// True Blogger doesn't allow headings or links in posts, so h2 blocks become bold paragraphs.
// Local cover images aren't uploaded; add a cover on True Blogger after posting if you want one.

import { drafts as blogs } from "../src/data/blogDrafts.js";

const API = "https://true-blogger-api.app/api/v1/blogs";
const args = process.argv.slice(2);
const slug = args.find((arg) => !arg.startsWith("--"));
const send = args.includes("--send");
const visibility = args.includes("--public") ? "public" : "private";

const post = blogs.find((item) => item.slug === slug);
if (!post) {
  console.error(`No draft with slug "${slug}". Slugs:\n  ${blogs.map((item) => item.slug).join("\n  ")}`);
  process.exit(1);
}

const text = (value, marks) => ({ type: "text", text: value, ...(marks ? { marks } : {}) });

// Local blocks -> Tiptap JSON (only the node types True Blogger accepts)
function toTiptap(block) {
  switch (block.type) {
    case "h2":
      return { type: "paragraph", content: [text(block.text, [{ type: "bold" }])] };
    case "list":
      return {
        type: "bulletList",
        content: block.items.map((item) => ({ type: "listItem", content: [{ type: "paragraph", content: [text(item)] }] })),
      };
    case "code":
      return { type: "codeBlock", content: [text(block.code)] };
    case "quote":
      return { type: "blockquote", content: [{ type: "paragraph", content: [text(block.text)] }] };
    default:
      return { type: "paragraph", content: [text(block.text)] };
  }
}

const payload = {
  title: post.title,
  excerpt: post.excerpt.slice(0, 200),
  content: { type: "doc", content: post.body.map(toTiptap) },
  tags: post.tags.slice(0, 4).map((tag) => tag.toLowerCase().slice(0, 32)),
  visibility,
  commentsEnabled: true,
};

console.log(`\n${payload.title}  (${visibility})`);
console.log(`Tags: ${payload.tags.join(", ")}`);
console.log(`Excerpt: ${payload.excerpt}\n`);
for (const block of post.body) {
  if (block.type === "h2") console.log(`**${block.text}**  (bold paragraph)`);
  else if (block.type === "list") block.items.forEach((item) => console.log(`  - ${item}`));
  else if (block.type === "code") console.log(block.code.replace(/^/gm, "    | "));
  else if (block.type === "quote") console.log(`  > ${block.text}`);
  else console.log(block.text);
  console.log("");
}

if (!send) {
  console.log("Preview only. Nothing was sent. Add --send to post it.");
  process.exit(0);
}

const key = process.env.TRUE_BLOGGER_WRITE_KEY;
if (!key) {
  console.error("TRUE_BLOGGER_WRITE_KEY is missing from .env.local.");
  process.exit(1);
}

const response = await fetch(API, {
  method: "POST",
  headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
const result = await response.json().catch(() => ({}));

if (!response.ok) {
  console.error(`True Blogger returned ${response.status}: ${result.error || JSON.stringify(result)}`);
  process.exit(1);
}
const newSlug = result.blog?.slug || result.slug;
console.log(`Posted as ${visibility}.${newSlug ? ` https://true-blogger-api.app/blogs/${newSlug}` : ""}`);
