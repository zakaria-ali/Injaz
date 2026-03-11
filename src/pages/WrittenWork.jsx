import { useState } from "react"
import { motion } from "framer-motion"
import PageBanner from "../components/PageBanner"
import AnimatedSection, { AnimatedItem } from "../components/AnimatedSection"
import { grades, subjects, semesters, getWrittenWorkData } from "../data/writtenWork"


const getFileIcon = (file) => {

  if (!file) return "📄"

  if (file.endsWith(".pdf")) return "📕"
  if (file.endsWith(".doc") || file.endsWith(".docx")) return "📘"
  if (file.endsWith(".ppt") || file.endsWith(".pptx")) return "📙"
  if (file.endsWith(".xls") || file.endsWith(".xlsx")) return "📗"

  return "📄"
}



function FileCard({ item }) {

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className=" text-center flex-shrink-0 w-48 md:w-56 bg-white rounded-xl shadow border border-emerald-100 p-4 hover:shadow-lg transition-shadow"
    >

      <div className="text-3xl mb-2">
        {getFileIcon(item.file)}
      </div>

      <h3 className="font-medium text-emerald-900 truncate">
        {item.title}
      </h3>

      <p className="text-sm text-emerald-600">
        {item.date}
      </p>

      <div className="flex gap-2 mt-3">

                <a
          href={item.file}
          download
          className="flex-1 text-center py-1.5 text-sm bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg"
        >
          تنزيل
        </a>

      </div>

    </motion.div>
  )
}



function FileSection({ title, items }) {

  if (!items || items.length === 0) return null

  return (
    <section>

      <h3 className="text-lg font-bold text-emerald-800 mb-4">
        {title}
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-4">

        {items.map((item) => (
          <FileCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  )
}



export default function WrittenWork() {

  const [grade, setGrade] = useState("")
  const [subject, setSubject] = useState("")
  const [semester, setSemester] = useState("")

  const data = grade && subject && semester
  ? getWrittenWorkData(grade, subject, semester)
  : null


  return (
    <div className="space-y-8">

      <PageBanner
        title="الأعمال الكتابية"
        subtitle="الامتحانات والخطط والتحضيرات"
        icon="📝"
      />

      <AnimatedSection className="space-y-8">

        <AnimatedItem>

          <motion.section className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">

            <h2 className="text-lg font-bold text-emerald-800 mb-4">
              تحديد المادة والفصل
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">

<label className="block text-sm font-medium text-emerald-700 mb-2">
الصف
</label>

<select
  value={grade}
  onChange={(e)=>{
    setGrade(e.target.value)
    setSubject("")
    setSemester("")
    e.target.blur()
  }}
  className="w-full px-4 py-2 border border-emerald-200 rounded-xl"
>

<option value="">
-- اختر الصف --
</option>

{grades.map((g)=>(
  <option key={g.id} value={g.id}>
    {g.label}
  </option>
))}

</select>

</div>

              <div className="flex-1">

                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  المادة
                </label>

                <select
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value)
                    setSemester("")
                    e.target.blur()

                  }}
                  className="w-full px-4 py-2 border border-emerald-200 rounded-xl"
                >

                  <option value="">
                    -- اختر المادة --
                  </option>

                  {subjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}

                </select>

              </div>


              <div className="flex-1">

                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  الفصل الدراسي
                </label>

                <select
                  value={semester}
                  onChange={(e) => {setSemester(e.target.value); e.target.blur()}}
                  className="w-full px-4 py-2 border border-emerald-200 rounded-xl"
                >

                  <option value="">
                    -- اختر الفصل --
                  </option>

                  {semesters.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}

                </select>

              </div>

            </div>

          </motion.section>

        </AnimatedItem>



        {data ? (

          <AnimatedItem>

            <div className="space-y-8">

              <FileSection title="الامتحانات اليومية (الأولى)" items={data.dailyExams1} />

              <FileSection title="امتحانات الشهرين" items={data.monthlyExams} />

              <FileSection title="الامتحانات اليومية (الثانية)" items={data.dailyExams2} />

              <FileSection title="الامتحان النهائي" items={data.finalExams} />

              <FileSection title="الخطط الدراسية" items={data.plans} />

              <FileSection title=" التحضيرات الدراسية" items={data.preparations} />

            </div>

          </AnimatedItem>

        ) : (

          <AnimatedItem>

            <div className="text-center py-12 bg-white rounded-2xl border border-emerald-100">

              <p className="text-emerald-600">
                اختر المادة والفصل الدراسي لعرض الملفات
              </p>

            </div>

          </AnimatedItem>

        )}

      </AnimatedSection>

    </div>
  )
}