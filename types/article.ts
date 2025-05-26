interface ParagraphContent {
  type: "paragraph";
  content: string;
}

interface SubHeaderContent {
  type: "sub_header";
  content: string;
}

interface BulletListContent {
  type: "bullet_list";
  content: string;
  bulletPoints: string[];
}

interface CodeContent {
  type: "code";
  content: string;
}

type ContentItem =
  | ParagraphContent
  | SubHeaderContent
  | BulletListContent
  | CodeContent;

interface Podcast {
  id: string;
  title: string;
  audio: string;
  img: string;
}

interface ArticleData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  content: ContentItem[];
  podcast: Podcast;
}

//Type used for articles/index.json
interface ArticlePreview {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}
