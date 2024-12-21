import { fromMarkdown } from "mdast-util-from-markdown";
import { ReactNode } from "react";
import React from "react";
import type { Node, Root } from "mdast";

const parseWithoutParagrapth = (str: string) => {
  const parsedAST = fromMarkdown(str);
  const walk = (node: Node, key: string | number): ReactNode => {
    const children = (node as Root).children || [];
    const type = node.type;
    const childNodes = children.map((child, idx) => walk(child, idx));
    switch (type) {
      case "root":
        return childNodes;
      case "text":
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (node as any).value;
      case "emphasis":
        return (
          <span className="md-emphasis" key={key}>
            {childNodes}
          </span>
        );
      case "strong":
        return (
          <span className="md-strong" key={key}>
            {childNodes}
          </span>
        );
      case "link":
        return (
          <a
            key={key}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={(node as any).url}
            target="_blank"
            rel="noopener noreferrer"
            className="md-link"
          >
            {childNodes}
          </a>
        );
      case "paragraph":
        return childNodes;
      default:
   
        return null;
    }
  };
  return walk(parsedAST, "root");
};

export const parseSimpleMD = (str: string): ReactNode => {
  // split \n as paragraph parser
  const paragraphList = str
    .split("\n")
    .map((x) => x.trim())
    .filter((x) => !!x);
  const ret: ReactNode[] = [];
  for (let idx = 0; idx < paragraphList.length; idx++) {
    const pStr = paragraphList[idx];
    const node = parseWithoutParagrapth(pStr);
    ret.push(<p key={idx}>{node}</p>);
  
  }
  return <>{ret}</>;
};
