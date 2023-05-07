// pages/index.js
import Link from 'next/link';
import Layout from '../layouts/layout';

const Home = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-semibold">Home Page</h1>
      <Link href="/dashboard">
        <span className="text-white bg-indigo-500 rounded-lg py-2 px-4 hover:bg-indigo-600 cursor-pointer">
          Go to Dashboard
        </span>
      </Link>
    </Layout>
  );
};

export default Home;
