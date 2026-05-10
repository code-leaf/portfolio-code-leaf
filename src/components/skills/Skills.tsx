import { SectionLayout } from '@/components/SectionLayout';
import { SkillCard } from '@/components/skills/SkillCard';
import { skills } from '@/constants/skills';

/**
 * スキル一覧を表示するセクションコンポーネント
 * @returns {JSX.Element} スキル一覧セクション
 */
export const Skills = () => {
  return (
    // セクションレイアウトコンポーネント
    <SectionLayout
      title='スキル一覧'
      sectionId='skills'
      className='pt-10 dark:bg-[#0a0a0a]'
    >
      {/* セクション説明文 */}
      <p className=' mb-12 max-w-4xl mx-auto text-xl'>
        職業訓練でのJava・Linux・SQL・インフラ学習と、
        独学によるフロントエンド開発を掛け合わせた技術スタック・取得資格の一覧です。
        開発を軸としながらインフラ・バックエンド領域にも精通した、
        幅広く活躍できるエンジニアを目指しております。
      </p>

      {/* スキルカードのグリッドレイアウト */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </SectionLayout>
  );
};
