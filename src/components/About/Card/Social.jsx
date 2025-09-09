import React from 'react';

import InstaIcon from './InstaIcon';
import TwitterIcon from './TwitterIcon';
import LinkedinIcon from './LinkedinIcon';

const Social = () => {
  return (
    <div className='py-9 space-x-3 flex flex-row items-center justify-center relative'>
      {/* Border at the top center */}
  <InstaIcon className='w-[50px] h-[50px] hover:scale-110 transition-transform text-black dark:text-white' />
  <TwitterIcon className='w-[50px] h-[50px] hover:scale-110 transition-transform text-black dark:text-white' />
  <LinkedinIcon className='w-[50px] h-[50px] hover:scale-110 transition-transform text-black dark:text-white' />
    </div>
  );
};

export default Social;
