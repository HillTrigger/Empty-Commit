import RSS from 'rss';
import { marked, type MarkedOptions } from 'marked';
import sanitizeHtml from 'sanitize-html';

const markedOptions: MarkedOptions = {
  breaks: true,
  gfm: true,
};

marked.setOptions(markedOptions);

export default defineEventHandler(async (event) => {
  try {
    const posts = await $fetch('/api/getItems') as Array<{
      id: string | number
      title: string
      description: string
      content: string
      date: string | Date
      author: string
      image?: string
      tags?: string[]
    }>;

    const feed = new RSS({
      title: 'Мой блог',
      description: 'Свежие статьи и новости',
      site_url: 'http://192.168.1.155:3000',
      feed_url: 'http://192.168.1.155:3000/rss.xml',
      pubDate: new Date(),
      language: 'ru',
      custom_namespaces: {
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'dc': 'http://purl.org/dc/elements/1.1/'
      }
    });

    for (const post of posts) {
      const postUrl = `http://192.168.1.155:3000/post/${post.id}`;
      
			const htmlContent = marked(post.content || post.description) as string;
      
			const cleanContent = sanitizeHtml(htmlContent, {
				allowedTags: [
					'p', 'br', 'img', 'a', 
					'h1', 'h2', 'h3', 'h4',
					'ul', 'ol', 'li',
					'strong', 'em', 'blockquote',
					'pre', 'code'
				],
				allowedAttributes: {
					img: ['src', 'alt', 'width', 'height', 'style'],
					a: ['href', 'target', 'rel']
				},
				transformTags: {
					img: (tagName, attribs) => ({
						tagName: 'img',
						attribs: {
							src: attribs.src,
							alt: attribs.alt || '',
							loading: 'lazy',
							style: 'max-width: 100%; height: auto;'
						}
					})
				}
			});

      const styledContent = `
        <div style="
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          max-width: 800px;
          margin: 0 auto;
        ">
          ${cleanContent}
        </div>
      `;

      feed.item({
        title: post.title,
        url: postUrl,
        guid: postUrl,
        description: post.description,
        date: new Date(post.date),
        author: post.author,
        categories: post.tags || [],
        custom_elements: [
          { 'content:encoded': { _cdata: styledContent } },
          { 'dc:creator': post.author }
        ]
      });
    }

    event.node.res.setHeader('content-type', 'text/xml');
    return feed.xml({ indent: true });

  } catch (error) {
    console.error('RSS generation error:', error);
    event.node.res.statusCode = 500;
    return {
      error: 'Ошибка при генерации RSS-ленты'
    };
  }
});