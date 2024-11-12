'use client';
import Link from 'next/link';

const Content = () => {
  return (
    <div className="ml-64 p-4">
      <div className="flex space-x-4">
        <Link href="/overview/edit">
          <p className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Overview</p>
        </Link>
        <Link href="/profile/edit">
          <p className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Profile</p>
        </Link>
        <Link href="/resumeCV/edit">
          <p className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Resume/CV</p>
        </Link>
      </div>
    </div>
  );
};

export default Content;
