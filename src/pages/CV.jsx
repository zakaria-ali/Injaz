import { useState } from 'react'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const contact = {
  email: 'zakaria.wildali.7@gmail.com',
  phone: '+970 569407090',
  linkedin: 'https://www.linkedin.com/in/zakaria-wildali',
  github: 'https://github.com/zakaria-ali',
  location: 'جنين',
}

const experiences = [
  {
    title: 'معلم',
    company: 'مدرسة محمود خليل ابو الرب المهنية',
    period: 'أيلول 2025 - الان ',
    description: 'تدريس أساسيات الكهرباء، تصميم الدوائر المنطقية، واستكشاف أعطال أجهزة الحاسوب. تغطية الشبكات اللاسلكية، برمجة الموجهات، وتقسيم الشبكات. تدريس منهاج التوجيهي في لغة التجميع، جافا، بروتوكولات الإنترنت، وإدارة خوادم ويندوز.',
  },
  {
    title: 'معلم',
    company: 'مدرسة جنين الثانوية الصناعية',
    period: 'أيلول 2024 - حزيران 2025',
    description: 'تدريس أساسيات الكهرباء، تصميم الدوائر المنطقية، واستكشاف أعطال أجهزة الحاسوب. تغطية الشبكات اللاسلكية، برمجة الموجهات، وتقسيم الشبكات. تدريس منهاج التوجيهي في لغة التجميع، جافا، بروتوكولات الإنترنت، وإدارة خوادم ويندوز.',
  },
  {
    title: 'مطوّر منصات',
    company: 'شركة Path Tech',
    period: 'شباط 2024 - آب 2024',
    description: 'التطوير على Salesforce: محفزات (Triggers)، كائنات مخصصة، وإدارة قواعد البيانات. تنفيذ منطق الأعمال، أتمتة العمليات، وتحسين هياكل البيانات ضمن بيئة Salesforce.',
  },
  {
    title: 'مطوّر Full Stack',
    company: 'شركة Falak Solutions',
    period: 'تموز 2023 - آذار 2024',
    description: 'التطوير على Odoo: إنشاء وتخصيص مواقع، بناء تطبيقات ونماذج وثيمات وقوائم Odoo، وتعديل الكود الحالي لتلبية احتياجات العملاء. تعزيز مهارات التطوير الشامل وحلول مخصصة للعملاء.',
  },
  {
    title: 'مطوّر واجهات أمامية',
    company: 'شركة ITG',
    period: 'كانون الثاني - آذار 2023',
    description: 'تجربة في HTML, CSS, JavaScript, SASS، واختبار الوحدات وReact. من أبرز المهام: إنشاء صفحة إدارة بـ React وموقع طقس.',
  },
]

const education = [
  {
    degree: 'بكالوريوس هندسة أنظمة الحاسوب (CSE)',
    school: 'الجامعة العربية الأمريكية، جنين',
    period: '2018 - 2023',
    note: 'المعدل: 3.2',
  },
  {
    degree: 'توجيهي, المسار المهني، هندسة الحاسوب',
    school: 'مدرسة سيلة الظهر الثانوية الصناعية',
    period: '2017 - 2018',
    note: 'المعدل: 96.4',
  },
]

const skills = [
  'JavaScript',
  'CSS',
  'Odoo',
  'SASS',
  'Unit Testing',
  'React',
  'PL-SQL',
  'MySQL',
  'Bootstrap',
  'Java',
  'HTML',
  'C++',
  'Assembly',
  'Python',
  'Data Structures',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Project Management',
]

const projects = [
  {
    name: 'React Admin App',
    year: '2023',
    description: 'صفحة مصادقة تتيح إنشاء حساب، تسجيل الدخول والخروج، تغيير كلمة المرور عبر Firebase API، والتنقل بين الصفحات باستخدام react-router-dom.',
  },
  {
    name: 'AAUP Engineering Robot',
    year: '2021 - 2023',
    description: 'روبوت يسمع سؤال المتحدث عن هندسة أنظمة الحاسوب ويجيب بالعربية. تم تطويره باستخدام Python وgTTS وChatterBot ومكتبة تحويل الصوت إلى نص من Google.',
  },
]

export default function CV() {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-8">
      <PageBanner
        title="السيرة الذاتية"
        subtitle="م. زكريا ولدعلي — مهندس أنظمة حاسوب ومعلم"
        icon="📄"
      />

      <AnimatedSection className="space-y-8">
        {/* Profile photo + Download */}
        <AnimatedItem>
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex-shrink-0 w-full max-w-md aspect-[16/10] rounded-xl overflow-hidden bg-emerald-100 border-2 border-emerald-200 relative"
            >
              <img
                src="/profile.jpg"
                alt="م. زكريا ولدعلي"
                className="w-full h-full profile-photo-img"
                onError={(e) => {
                  e.target.classList.add('hidden')
                  const placeholder = e.target.parentElement.querySelector('.profile-photo-placeholder')
                  if (placeholder) placeholder.classList.remove('hidden')
                }}
              />
              
            </motion.div>
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-xl font-bold text-emerald-800 mb-2">م. زكريا ولدعلي</h2>
              <p className="text-emerald-600 mb-4">مهندس أنظمة حاسوب — معلم الحاسوب والشبكات في مدرسة محمود خليل أبو الرب المهنية</p>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <span>📥</span>
                تنزيل السيرة الذاتية (PDF)
              </a>
            </div>
          </div>
        </AnimatedItem>

        {/* Contact */}
        <AnimatedItem>
          <section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-lg font-bold text-emerald-800 mb-4">وسائل التواصل</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: 'email', label: 'البريد الإلكتروني', value: contact.email, icon: '✉️' },
                { key: 'phone', label: 'رقم الهاتف', value: contact.phone, icon: '📱' },
                { key: 'linkedin', label: 'لينكد إن', value: contact.linkedin, icon: '💼' },
                { key: 'github', label: 'جيت هب', value: contact.github, icon: '🐙' },
                { key: 'location', label: 'مكان السكن', value: contact.location, icon: '📍' },
              ].map(({ key, label, value, icon }) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl text-right"
                >
                  <span className="text-2xl">{icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-emerald-600">{label}</p>
                    <p dir="ltr" className="font-medium text-emerald-900 truncate">{value}</p>
                  </div>
                  {key !== 'location' && (
                    <button
                      onClick={() => copyToClipboard(value, key)}
                      className="px-3 py-1 text-sm bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                    >
                      {copied === key ? '✓ نسخ' : 'نسخ'}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedItem>

        {/* نبذة عني */}
        <AnimatedItem>
          <section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-lg font-bold text-emerald-800 mb-4">نبذة عني</h2>
            <p className="text-emerald-900 leading-relaxed">
              مهندس أنظمة حاسوب، أعمل معلمًا للحاسوب والشبكات في مدرسة محمود خليل ابو الرب المهنية. لدي خبرة في التطوير البرمجي (Front end, Back End,  Odoo، Salesforce) وفي التدريس التقني: أساسيات الكهرباء، الدوائر المنطقية، صيانة الحاسوب، الشبكات، وبرمجة الموجهات. أسعى إلى ربط المعرفة الأكاديمية بالتطبيق العملي وإعداد الطلبة لسوق العمل.
            </p>
          </section>
        </AnimatedItem>

        {/* الخبرات */}
        <AnimatedItem>
          <section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-lg font-bold text-emerald-800 mb-4">الخبرات</h2>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-r-4 border-emerald-500 pr-4 pl-2 py-2"
                >
                  <h3 className="font-bold text-emerald-800">{exp.title} — {exp.company}</h3>
                  <p className="text-sm text-emerald-600 mb-2">{exp.period}</p>
                  <p className="text-emerald-900 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedItem>

        {/* التعلم */}
        <AnimatedItem>
          <section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-lg font-bold text-emerald-800 mb-4">التعلم</h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="p-4 bg-emerald-50 rounded-xl"
                >
                  <h3 className="font-bold text-emerald-800">{edu.degree}</h3>
                  <p className="text-emerald-700">{edu.school}</p>
                  <p className="text-sm text-emerald-600">{edu.period} — {edu.note}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedItem>

        {/* المهارات */}
        <AnimatedItem>
          <section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-lg font-bold text-emerald-800 mb-4">المهارات</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.02 * i }}
                  whileHover={{ scale: 1.05 }}
                  className=" cursor-default px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </section>
        </AnimatedItem>

        {/* المشاريع */}
        <AnimatedItem>
          <section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
            <h2 className="text-lg font-bold text-emerald-800 mb-4">المشاريع</h2>
            <div className="space-y-4">
              {projects.map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="p-4 bg-emerald-50 rounded-xl border border-emerald-100"
                >
                  <h3 className="font-bold text-emerald-800">{proj.name}</h3>
                  <p className="text-sm text-emerald-600 mb-2">{proj.year}</p>
                  <p className="text-emerald-900 text-sm leading-relaxed">{proj.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  )
}
