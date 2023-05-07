// pages/index.js
import Link from 'next/link';
import Layout from '../layouts/layout';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
          <h1 className="text-4xl font-semibold mb-6 text-center text-indigo-600">
            Home Page
          </h1>
          <p className="text-gray-700 mb-4">
            This is a simple example of a Next.js application with a dashboard.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard">
              <span className="inline-block text-white bg-indigo-500 rounded-lg py-2 px-4 hover:bg-indigo-600 cursor-pointer">
                Go to Dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
