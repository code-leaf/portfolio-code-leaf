import { SocialIconLink } from '@/components/contact/SocialIconLink';
import { Github } from 'lucide-react';
import Image from 'next/image';

/**
 * SNSアカウントへのリンクをアイコン付きで表示するコンポーネント
 */
export const SocialLinks = () => {
  return (
    /* SNSリンクを横並びに配置するコンテナ */
    <div className='flex space-x-6 justify-center'>
      {/* Qiitaリンク */}
      <SocialIconLink
        href='https://qiita.com/CodeLeaf'
        label='Qiita'
        className='transition-all hover:brightness-125'
      >
        <Image
          alt='Qiita'
          src='/images/qiita-icon.png'
          width={32}
          height={32}
          className='w-10 h-10'
        />
      </SocialIconLink>

      {/* ポートフォリオ Githubリンク */}
      <SocialIconLink
        href='https://github.com/code-leaf/portfolio-code-leaf'
        label='Portfolio Repository'
        className='transition-opacity opacity-80'
      >
        <Image
          alt='Portfolio Repository'
          src='/images/favicon.ico'
          width={32}
          height={32}
          className='w-10 h-10'
        />
      </SocialIconLink>

      {/* Githubリンク */}
      <SocialIconLink
        href='https://github.com/code-leaf'
        label='GitHub'
        className='text-gray-600 hover:text-gray-900 transition-colors'
      >
        <Github className='w-8 h-8' />
      </SocialIconLink>
    </div>
  );
};
