// pages/index.js
import Link from 'next/link';
import Layout from '../layouts/layout';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <motion.h1
              className="text-5xl font-semibold mb-6 text-indigo-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Home Page
            </motion.h1>
            <motion.p
              className="text-neutral-300 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              This is a simple example of a Next.js application with a dashboard.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link href="/dashboard">
                <span className="inline-block text-white bg-indigo-500 rounded-lg py-2 px-4 hover:bg-indigo-600 cursor-pointer">
                  Go to Dashboard
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        <footer className="py-6 bg-indigo-600">
          <div className="container mx-auto text-center">
            <p className="text-white">
              &copy; {new Date().getFullYear()} - My Application
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
