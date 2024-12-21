import React, { ReactNode } from "react";
import { parseSimpleMD } from "./mdParser";
export interface LabelTemplateParserOption {
  context?: { [key: string]: string | number | null | undefined };
  onClick?: (e: React.MouseEvent, url: string) => void;
  autoReplaceLink?: boolean;
}

export const replaceVar = (
  str: string | null,
  context: LabelTemplateParserOption["context"]
) => {
  if (!str) {
    return "";
  }
  const ctx = context || {};
  return str.replaceAll(/\{\{([^{}]*)\}\}/gim, (_, match) => {
    const key = match.trim();
    if (ctx[key] === undefined || ctx[key] === null) {
      return "";
    } else {
      return ctx[key] as string;
    }
  });
};

const replaceLink = (str: string) => {
  return str.replaceAll(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,20}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gim,
    (matchStr) => {
      return `[${matchStr}](${matchStr})`;
    }
  );
};
export const ContentParser = {
  parse: (str: string, options: LabelTemplateParserOption = {}): ReactNode => {
    if (!str) {
      return "";
    }
    const { autoReplaceLink } = options;
    let replacedStr = replaceVar(str, options.context);
    if (autoReplaceLink) {
      replacedStr = replaceLink(replacedStr);
    }
    return parseSimpleMD(replacedStr);
  },
};
