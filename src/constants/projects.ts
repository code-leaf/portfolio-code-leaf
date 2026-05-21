import { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 1,
    title: '勘定科目クイズアプリ',
    description: `簿記の勘定科目のクイズができるアプリケーション。
    時間を気にせず学習できる「無制限モード」(デフォルト)と、指定回数(5問単位)を設定し、正解率に応じたスコアが表示される「回数指定モード」があります。`,
    technologies: [
      'React 18',
      'Next.js 14',
      'TypeScript',
      'Lucide React',
      'react-circular-progressbar',
      'Recoil',
      'TailwindCSS',
    ],
    imageUrl: '/urlImages/boki-app.png',
    githubUrl: 'https://github.com/code-leaf/boki-app',
    projectUrl: 'https://boki-app-rust.vercel.app/',
  },

  {
    id: 2,
    title: 'CS検定時間計測アプリ',
    description: `Word・ExcelのCS検定の時間計測ができるアプリケーション。
    残り時間と経過時間が表示され、四国めたん（VOICEVOX）の音声ガイダンスで、経過時間の通知や課題切り替えのタイミングをアナウンスします。`,
    technologies: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'Axios',
      'Lucide React',
      'TailwindCSS',
    ],
    imageUrl: '/urlImages/cs-timer.png',
    githubUrl: 'https://github.com/code-leaf/cs-timer',
    projectUrl: 'https://cs-timer-eight.vercel.app/',
  },
  {
    id: 3,
    title: 'メール作成練習アプリ',
    description: `ビジネスメールの授業における送受信トラブルを解消する為に開発したアプリケーション。
    実際には送信されない為、送信までのメール作成の基本操作を安全に練習できます。現在も、授業で活用しています 。`,
    technologies: [
      'React 18',
      'Next.js 14',
      'TypeScript',
      'Recoil',
      'Font Awesome',
      'react-hook-form',
      'TailwindCSS',
    ],
    imageUrl: '/urlImages/mail-practice.png',
    githubUrl: 'https://github.com/code-leaf/mail-practice',
    projectUrl: 'https://mail-practice.vercel.app/',
  },
  {
    id: 4,
    title: 'フォーム作成練習アプリ',
    description: `Googleフォームの操作練習ができるアプリケーション。
    授業において、Gアカウント作成制限により、Googleフォームが使用できない課題を解決するために開発。質問作成の基本操作を効率的に学習できます。`,
    technologies: [
      'React 18',
      'Next.js 14',
      'TypeScript',
      'Chart.js',
      'Font Awesome',
      'Recoil',
    ],
    imageUrl: '/urlImages/google-forms-practice.png',
    githubUrl: 'https://github.com/code-leaf/google-forms-practice',
    projectUrl: 'https://google-forms-practice.vercel.app/',
  },

  {
    id: 5,
    title: 'たんじょうびカウントダウン',
    description: `子供に「誕生日まであと何日？」と何度も聞かれるのが開発のきっかけ。バイブコーディングで実験的に開発。
データ量が少ないため、DBは使わずJSONでデータ管理するシンプルな設計を選択しました。`,
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'TailwindCSS 4'],
    imageUrl: '/urlImages/birth-day-tracker.png',
    githubUrl: 'https://github.com/code-leaf/birth-day-tracker',
    projectUrl: 'https://birth-day-tracker-self.vercel.app/',
  },
  {
    id: 6,
    title: 'パスワードジェネレーター',
    description: `バイブコーディングによる実験的な開発で作成したパスワード生成ツール。
    PythonのCLIツールとして開発後、FlaskでWebアプリ化しRenderにデプロイ。
    文字種・長さをブラウザから設定できます。`,
    technologies: ['Python', 'Flask', 'Gunicorn', 'Render'],
    imageUrl: '/urlImages/password-generator.png',
    githubUrl: 'https://github.com/code-leaf/password-generator',
    projectUrl: 'https://password-generator-qqiw.onrender.com',
  },
  {
    id: 7,
    title: '自己紹介カード生成アプリ',
    description: `Spring Boot入門として作成したWebアプリケーション。
    GET/POSTリクエストの処理とThymeleafによるサーバーサイドレンダリングを、MVCパターンで実装しました。
    MVP段階のためCSSは未適用。スタイリングや入力項目の拡張など、継続的な改善を予定しています。`,
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Maven'],
    imageUrl: '/urlImages/selfintro.png',
    githubUrl: 'https://github.com/code-leaf/springboot-learning',
    projectUrl: '',
  },
] as const;
