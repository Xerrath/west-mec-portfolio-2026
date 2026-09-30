import Image from "next/image";
import { trueBloggerUrl } from "@/lib/trueBlogger";

// Renders a True Blogger post body (Tiptap JSON) as HTML elements.
// True Blogger allows: paragraphs, line breaks, lists, images, code blocks, quotes,
// horizontal rules, and bold / italic / strike / code marks. Unknown types render their children.

function Text({ node }) {
  let out = node.text;
  for (const mark of node.marks || []) {
    if (mark.type === "bold") out = <strong>{out}</strong>;
    else if (mark.type === "italic") out = <em>{out}</em>;
    else if (mark.type === "strike") out = <s>{out}</s>;
    else if (mark.type === "code") out = <code>{out}</code>;
  }
  return out;
}

function Children({ node, codeClass, quoteClass }) {
  return (node.content || []).map((child, index) => <Node key={index} node={child} codeClass={codeClass} quoteClass={quoteClass} />);
}

function Node({ node, codeClass, quoteClass }) {
  const kids = <Children node={node} codeClass={codeClass} quoteClass={quoteClass} />;
  switch (node.type) {
    case "text":
      return <Text node={node} />;
    case "hardBreak":
      return <br />;
    case "paragraph":
      return node.content?.length ? <p>{kids}</p> : null;
    case "bulletList":
      return <ul>{kids}</ul>;
    case "orderedList":
      return <ol>{kids}</ol>;
    case "listItem":
      return <li>{kids}</li>;
    case "blockquote":
      return <blockquote className={quoteClass}>{kids}</blockquote>;
    case "codeBlock":
      return (
        <pre className={codeClass}>
          <code>{(node.content || []).map((child) => child.text).join("")}</code>
        </pre>
      );
    case "horizontalRule":
      return <hr />;
    case "image":
      return node.attrs?.src ? (
        <Image
          src={trueBloggerUrl(node.attrs.src)}
          alt={node.attrs.alt || ""}
          width={1280}
          height={800}
          sizes="(min-width: 1024px) 46rem, 100vw"
          style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md)", margin: "var(--space-md) 0" }}
        />
      ) : null;
    default:
      return kids;
  }
}

export default function TiptapContent({ doc, codeClass, quoteClass }) {
  if (!doc) return null;
  return <Children node={doc} codeClass={codeClass} quoteClass={quoteClass} />;
}
