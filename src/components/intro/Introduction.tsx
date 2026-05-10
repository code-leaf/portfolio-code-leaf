import { ImageComponent } from '@/components/ImageComponent';
import { IntroSection } from '@/components/intro/IntroSection';
import { SectionLayout } from '@/components/SectionLayout';
import { INTRODUCTION_SECTIONS } from '@/constants/introSections';
import { calculateAge } from '@/utils/calculateAge';

/**
 * 自己紹介ページのメインコンポーネント
 *
 * @returns {JSX.Element} 自己紹介セクションを含むJSXエレメント
 */
export const Introduction = () => {
  // 環境変数から生年月日を読み込み、年齢を計算して表示
  const birthDate = process.env.NEXT_PUBLIC_BIRTH_DATE || '';
  const age = calculateAge(birthDate);

  return (
    <SectionLayout
      title='自己紹介'
      sectionId='introduction'
      className='mt-[84px]'
    >
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6'>
        {/* 画像部分 */}
        <ImageComponent
          srcSet='/images/codeLeaf.webp'
          src='/images/codeLeaf.webp'
          alt='コードリーフの画像'
          width={150}
          height={150}
          className='rounded-full dark:bg-gray-200 dark:p-2 flex-shrink-0'
        />

        {/* 自己紹介概要 */}
        <div>
          <h3 className='text-2xl lg:text-3xl pb-2 lg:pb-0 lg:font-normal'>
            CodeLeaf<span className='text-base'>（コードリーフ）</span>
          </h3>
          <p className='leading-relaxed max-w-[855px]'>
            福岡県在住の{age}歳、
            男。30代未経験という状況から、まずIT業界への入口として保守業務を経験。
            3年程度実務を積んだ後に開発へステップアップするプランを描いておりましたが、
            AIの台頭で「3年積み上げる間に居場所がなくなる」と危機感を覚え退職。
            職業訓練校にてJava・Linux・クラウドの基礎を集中的に学習しながら、
            基本情報技術者・Java Silverを取得いたしました。
            開発を軸足にインフラ・クラウドの知識も併せ持つエンジニアとして、
            AI・DX領域へ接続できるキャリアを目指しております。現在、就職活動中です。
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
