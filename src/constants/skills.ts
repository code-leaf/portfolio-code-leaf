import { Skill } from '@/types/skills';
import { FaJava, FaLinux } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';
import {
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// スキル情報の配列を定義
export const skills: Skill[] = [
  {
    title: 'Next.js',
    icon: SiNextdotjs,
    level: 4,
    description:
      'App Routerを用いたWebアプリケーションの画面遷移やフォーム処理、クライアントコンポーネントとサーバーコンポーネントの使い分けなど、基本機能を実装できます。',
    textColor: 'text-black',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    level: 4,
    description:
      'コンポーネントのProps型や配列・オブジェクト、オプショナルな値の型定義など、開発に必要な基本的な型定義を行うことができます。型定義には、typeを使用しております。',
    textColor: 'text-blue-600',
  },
  {
    title: 'TailwindCSS',
    icon: SiTailwindcss,
    level: 4,
    description:
      'レスポンシブデザインの実装、flexboxやgridを活用したレイアウト調整、hoverなどの擬似クラスを使用したインタラクションの実装ができます。コンポーネント間でのスタイルの再利用も意識して実装しております。',
    textColor: 'text-cyan-500',
  },
  {
    title: 'React',
    icon: SiReact,
    level: 4,
    description:
      '基本的なHooksの活用とRecoilによる状態管理、カスタムフックの作成による共通ロジックの抽出など、基本的な機能実装ができます。また、コンポーネントの分割と再利用を意識した実装を心掛けております。',
    textColor: 'text-sky-500',
  },
  {
    title: 'Java',
    icon: FaJava,
    level: 4,
    description:
      'ポリテクにて『スッキリわかるJava入門』でJavaの基礎を習得後、授業外4週間弱・紫本＆黒本各1周でJava Silverを取得。効率的に学習を進める姿勢を大切にしております。',
    textColor: 'text-orange-500',
  },
  {
    title: '基本情報技術者',
    icon: MdOutlineVerified,
    level: 4,
    description:
      'ポリテク入校後2ヶ月で取得。授業でカバーされた内容は進数変換程度で、約9割は隙間時間を徹底活用した独学によるものです。入社後も同様のスタンスで自己研鑽を継続してまいります。',
    textColor: 'text-blue-500',
  },
  {
    title: 'SQL',
    icon: SiPostgresql,
    level: 3,
    description:
      'ポリテクにて『SQLゼロからはじめるデータベース操作』を使用し、データベースの基本概念・基本的なクエリ操作を学習しております。業務システム開発やデータ活用の場面で活かしていきたいと考えております。',
    textColor: 'text-sql',
  },
  {
    title: 'Linux',
    icon: FaLinux,
    level: 3,
    description:
      'ポリテクにてLPI-Japan「Linux標準教科書（ver4.0.1）」を使用し、基本コマンド・ファイル管理・ネットワーク設定など、Linuxの基礎を一通り学習しております。まだ入門レベルではありますが、クラウド・インフラの土台として実務の中で着実に伸ばしていきたいと考えております。',
    textColor: 'text-slate-600',
  },
  {
    title: 'Python',
    icon: SiPython,
    level: 2,
    description:
      'プログラミング学習プラットフォームで基礎を学習し、変数、条件分岐、ループなどの基本的な文法を理解しています。リストや辞書を使用した簡単なプログラムを作成できます。',
    textColor: 'text-python',
  },
] as const;
