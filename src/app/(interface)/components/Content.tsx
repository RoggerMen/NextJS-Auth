import Link from 'next/link';

const Content = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Barra de navegación centrada y adaptable */}
      <nav className="flex justify-between w-full max-w-lg mb-4 space-x-4">
        <Link href="/overview/edit">
          <button className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            Overview
          </button>
        </Link>
        <Link href="/profile/edit">
          <button className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            Profile
          </button>
        </Link>
        <Link href="/resumeCV/edit">
          <button className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            Resume/CV
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Content;
