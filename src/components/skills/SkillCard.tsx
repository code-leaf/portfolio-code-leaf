import { Skill } from '@/types/skills'; // スキル型定義をインポート
import { Star } from 'lucide-react'; // 星アイコンコンポーネントをインポート
import Image from 'next/image';

/**
 * スキルを視覚的に表示するためのカードコンポーネント
 * @component
 * @param props - スキル情報を含むプロパティ
 * @returns {JSX.Element} スキルを表示するカードコンポーネント
 */
export const SkillCard = ({
  title,
  icon: Icon,
  level,
  description,
  textColor,
  badge,
}: Skill) => {
  return (
    //カード全体のコンテナ要素
    <div className='p-6 rounded-lg text-gray-800 bg-white/90 border border-gray-400 shadow-md relative flex flex-col'>
      {/* アイコンとタイトルを横並びにするコンテナ */}
      <div className='flex items-center mb-4 min-h-[5rem]'>
        {/* アイコン部分 */}
        <div className='w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-shrink-0'>
          <Icon className={`w-12 h-12 ${textColor}`} />
        </div>
        {/* タイトルと評価の星 */}
        <div className='flex-1'>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <div className='flex items-center'>
            {/* 5つの星を生成するループ */}
            {Array.from({ length: 5 }).map((_, i) => (
              // 星アイコンコンポーネント
              <Star
                key={i} // Reactのキーを設定
                size={16}
                className={`${
                  // 星の色を条件分岐で設定
                  i < level // 現在の星がレベル未満なら
                    ? 'text-yellow-400 fill-yellow-400' // 黄色で塗りつぶし
                    : 'text-gray-400' // そうでなければグレー
                }`}
              />
            ))}
          </div>
        </div>

        {/* バッジ：タイトル横・アスペクト比1:1 */}
        {badge && (
          <div className='relative w-16 h-16 flex-shrink-0 ml-2'>
            <Image
              src={badge}
              alt={`${title} Badge`}
              fill
              className='object-cover rounded-md'
            />
          </div>
        )}
      </div>

      {/* スキルの説明文を表示 */}
      <p className='text-lg flex-1'>{description}</p>
    </div>

  );
};
