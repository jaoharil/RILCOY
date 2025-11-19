import { getImagePrefix } from '@/utils/util';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src={`${getImagePrefix()}images/logo/rcoy-.png`} alt="logo" width={60} height={60} style={{ width: '90', height: 'auto' }} quality={100} />
    </Link>
  );
};

export default Logo;
