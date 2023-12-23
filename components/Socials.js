import Link from 'next/link';
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiYoutubeLine } from 'react-icons/ri';

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    {/* <Link href={''} className='hover:text-accent transition-all duration-300 '>
      <RiYoutubeLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300 '>
      <RiInstagramLine />
    </Link> */}
    <Link target='_blank' href={'https://www.facebook.com/raselrezwan001'} className='hover:text-accent transition-all duration-300 '>
      <RiFacebookLine />
    </Link>
    <Link target='_blank' href={'https://www.linkedin.com/in/md-rasel-1a9957174/'} className='hover:text-accent transition-all duration-300 '>
      <RiLinkedinLine />
    </Link>
    <Link target='_blank' href={'https://github.com/raselcsedev'} className='hover:text-accent transition-all duration-300 '>
      <RiGithubLine />
    </Link>
    
  </div>;
};

export default Socials;
