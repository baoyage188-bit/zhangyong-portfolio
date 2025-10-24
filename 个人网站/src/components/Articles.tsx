'use client'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Articles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="articles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            最新文章
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            分享我的思考、经验和学习心得
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {siteConfig.articles.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2 lg:mb-0 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(article.date)}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <motion.a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
                whileHover={{ x: 4 }}
              >
                阅读全文
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#resume"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            下载简历
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
