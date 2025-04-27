import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js'; // Опционально, если нужен кастомный рендеринг

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(str, { language: lang }).value;
    }
    return ''; // Используем стандартное форматирование, если язык не найден
  },
});

export function renderMarkdown(content) {
  return md.render(content);
}