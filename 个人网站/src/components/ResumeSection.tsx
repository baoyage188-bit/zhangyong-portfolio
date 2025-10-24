'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ResumeSection() {
  const handleDownload = () => {
    // 创建一个临时的下载链接
    const link = document.createElement('a')
    link.href = siteConfig.cvUrl
    link.download = `${siteConfig.name}-简历.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="mb-12"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <FileText className="w-12 h-12 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              我的简历
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              下载我的详细简历，了解我的工作经历和技能
            </p>
          </motion.div>

          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            下载简历 (PDF)
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">年工作经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-300">完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">技术栈</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
