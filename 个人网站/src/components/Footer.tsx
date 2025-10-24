'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-2">{siteConfig.name}</h3>
            <p className="text-gray-400">{siteConfig.oneLiner}</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <div className="flex space-x-8 mb-4 sm:mb-0">
              {siteConfig.navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              回到顶部
            </motion.button>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
              <p>© {siteConfig.year} {siteConfig.name}</p>
              <p className="mt-2 sm:mt-0">
                Built with{' '}
                <span className="text-primary-400 font-semibold">Cursor</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
