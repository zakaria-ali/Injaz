import { useState } from 'react'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
import { grades, subjects, getLessons } from '../data/teachingAids'

export default function TeachingAids() {
  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [selectedLesson, setSelectedLesson] = useState(null)

  const lessons = grade && subject ? getLessons(grade, subject) : []

  return (
    <div className="space-y-8">

      <PageBanner
        title="الوسائل التعليمية"
        subtitle="عروض تقديمية، فيديوهات، ومواقع تعليمية"
        icon="🎬"
      />

      <AnimatedSection className="space-y-8">

        {/* SELECT GRADE */}
        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.005 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6"
          >
            <h2 className="text-lg font-bold text-emerald-800 mb-4">اختر الصف</h2>

            <select
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value)
                setSubject('')
                setSelectedLesson(null)
              }}
              className="w-full px-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">-- اختر الصف --</option>

              {grades.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>
          </motion.section>
        </AnimatedItem>


        {/* SELECT SUBJECT */}
        {grade && (
          <AnimatedItem>
            <motion.section
              whileHover={{ scale: 1.005 }}
              className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6"
            >
              <h2 className="text-lg font-bold text-emerald-800 mb-4">اختر المادة</h2>

              <select
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value)
                  setSelectedLesson(null)
                }}
                className="w-full px-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">-- اختر المادة --</option>

                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </motion.section>
          </AnimatedItem>
        )}


        {/* LESSONS */}
        {grade && subject && (
          <AnimatedItem>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-6"
            >

              {/* LESSON LIST */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-4"
              >
                <h3 className="font-bold text-emerald-800 mb-4">الدروس</h3>

                <div className="space-y-2">
                  {lessons.map((lesson) => (

                    <motion.button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-right px-4 py-3 rounded-xl transition-colors ${
                        selectedLesson?.id === lesson.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {lesson.title}
                    </motion.button>

                  ))}
                </div>
              </motion.div>


              {/* LESSON CONTENT */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-emerald-100 p-6"
              >

                {selectedLesson ? (

                  <div className="space-y-6">

                    <h3 className="text-xl font-bold text-emerald-800">
                      {selectedLesson.title}
                    </h3>

                    {/* PPT */}
                    {selectedLesson.aids.ppt && (
                      <div className="p-4 bg-emerald-50 rounded-xl">
                        <h4 className="font-medium mb-2">📊 عرض بوربوينت</h4>

                        <a
                          href={selectedLesson.aids.ppt}
                          target="_blank"
                          className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
                        >
                          عرض / تنزيل
                        </a>
                      </div>
                    )}

                    {/* VIDEO */}
                    {selectedLesson.aids.video && (
                      <div className="p-4 bg-emerald-50 rounded-xl">
                        <h4 className="font-medium mb-2">🎬 فيديو</h4>

                        <a
                          href={selectedLesson.aids.video}
                          target="_blank"
                          className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
                        >
                          مشاهدة الفيديو
                        </a>
                      </div>
                    )}

                    {/* WEBSITE */}
                    {selectedLesson.aids.website && (
                      <div className="p-4 bg-emerald-50 rounded-xl">
                        <h4 className="font-medium mb-2">🌐 موقع</h4>

                        <a
                          href={selectedLesson.aids.website}
                          target="_blank"
                          className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
                        >
                          زيارة الموقع
                        </a>
                      </div>
                    )}

                  </div>

                ) : (

                  <p className="text-center text-emerald-600 py-12">
                    اختر درسًا لعرض الوسائل التعليمية
                  </p>

                )}

              </motion.div>

            </motion.div>
          </AnimatedItem>
        )}

      </AnimatedSection>

    </div>
  )
}