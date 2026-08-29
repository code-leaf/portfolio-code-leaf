/**
 * プロジェクト情報の型定義
 */
export type Project = {
  /** プロジェクトの一意識別子（例：1） */
  id: number;

  /** プロジェクトの表示名（例：「ECサイトリニューアル」） */
  title: string;

  /** プロジェクトの概要説明。主な機能や目的を記載（例：「既存ECサイトのUI/UXを改善し、モバイル対応を実装」） */
  description: string;

  /** 使用した技術スタックの配列（例：['React', 'TypeScript', 'AWS']） */
  technologies: string[];

  /** プロジェクトのサムネイル画像URL（例：'/images/projects/ec-site.jpg'） */
  imageUrl: string;

  /** ソースコードを公開している場合のGitHubリポジトリURL（例：'https://github.com/username/project'） */
  githubUrl: string;

  /** デモサイトがある場合のURL（例：'https://project.com'） */
  projectUrl: string;

  /** 関連する発表資料などのURL（任意、例：'/documents/xxx.pdf'） */
  presentationUrl?: string;

  /** 移植元・旧バージョンなどのGitHubリポジトリURL（任意、例：PHP版・Java版のリポジトリ）。表示ラベルはoriginLabelで指定 */
  originUrl?: string;

  /** originUrlのリンクに表示するラベル（任意、例：'PHP版'、'Java版'） */
  originLabel?: string;
};
