import { ImageComponent } from '@/components/ImageComponent';
import { IntroSection } from '@/components/intro/IntroSection';
import { SectionLayout } from '@/components/SectionLayout';
import { INTRODUCTION_SECTIONS } from '@/constants/introSections';

/**
 * 自己紹介ページのメインコンポーネント
 *
 * @returns {JSX.Element} 自己紹介セクションを含むJSXエレメント
 */
export const Introduction = () => {
  return (
    <SectionLayout
      title='自己紹介'
      sectionId='introduction'
      className='mt-[84px]'
    >
      <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4'>
        {/* 画像部分 */}
        <ImageComponent
          srcSet='/images/codeLeaf.webp'
          src='/images/codeLeaf.webp'
          alt='コードリーフの画像'
          width={100}
          height={100}
          className='rounded-full dark:bg-gray-200 dark:p-2'
        />

        {/* 自己紹介概要 */}
        <div>
          <h3 className='text-2xl lg:text-3xl pb-2 lg:pb-0 lg:font-normal'>
            CodeLeaf<span className='text-base'>（コードリーフ）</span>
          </h3>
          <p className='leading-relaxed max-w-[855px]'>
            福岡県在住の34歳、男。製造業の社内SEを経て、DX推進を見据えたICT基盤技術の習得に向け2026年2月より職業訓練を受講しております。
            プログラミングの魅力に取り憑かれ、2024年1月からWeb開発の学習をスタート。
            Next.js、TypeScriptを用いたWebアプリケーションを制作しております。
          </p>
        </div>
      </div>

      {/* 自己紹介詳細 */}
      <section className='space-y-8'>
        {INTRODUCTION_SECTIONS.map((section) => (
          <IntroSection key={section.bracket} {...section} />
        ))}
      </section>
    </SectionLayout>
  );
};
