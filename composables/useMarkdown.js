import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export function renderMarkdown(content) {
  return md.render(content);
}