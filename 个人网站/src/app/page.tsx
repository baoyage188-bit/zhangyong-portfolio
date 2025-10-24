import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import Articles from '@/components/Articles'
import ResumeSection from '@/components/ResumeSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Works />
      <Articles />
      <ResumeSection />
      <Footer />
    </main>
  )
}
