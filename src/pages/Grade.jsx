import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
import l1 from '/11a.jpg'
import l2 from '/11b.jpg'
import l3 from '/11c.jpg'
import l4 from '/11d.jpg'
import l12 from '/12.mp4'
import './Grade.css'

const gradeData = {
  1: {
    title: 'الصف الأول الثانوي',
    desc: 'مرحلة تأسيسية في المسار المهني لتخصص الحاسوب والشبكات.',
    icon: '1️⃣',
    subjects: [
      'في الوحدة الاولى يتعلم الطالب اساسيات الكهرباء والالكترونيات  والتعرف على العناصر الاساسية وفحص صلاحيتها وكيفيه قياسها.',
      'في الوحدة الثانيه يبدا الطالب بالدخول الى عالم الحاسوب والتعرف على الدوائر المنطقية والمشتقه بالاضافه الى التعرف على انظمة العد المختلفه التي يتعامل معها الحاسوب.',
      'في الوحدة الثالثه  يتعرف الطالب على اجزاء جهاز الحاسوب ومكوناته الرئيسيه مع وظيفة كل جزء منها.',
      'في الوحدة الرابعة يدخل الطالب في تفاصيل مكونات جهاز الحاسوب ويتعلم فحص وتحديد مشكله كل قطعه ومكون من مكونات جهاز الحاسوب. ',
      'في الوحدة الخامسه يتعلم الطالب اساسيات انشاء شبكه انترنت سلكيه وفق القواعد المعتمدة عالميا.',
      'في الوحدة السادسه وبعد التعرف على قواعد الشبكات السلكيه وكيفية تأسيسها يتعلم الطالب كيفيه انشاء واعداد الشبكات  اللاسلكيه ودمجها مع الشبكات السلكية. ',
    ],
  },
  2: {
    title: 'الصف الثاني الثانوي',
    desc: 'مرحلة تطويرية تركز على الشبكات و لغات البرمجة.',
    icon: '2️⃣',
    subjects: [
      'في الوحدة الاولى يتعرف الطالب على لغه الاله التي يتعامل معها جهاز الحاسوب كيف يقوم بتصميم وبرمجه اكواد بسيطه  تعتمد على لغة الاله  فيتعرف على اساسيات لغة التجميع  وكيفية كتابة كود يقوم بوظيفة معينه في جهاز الحاسوب.',
      'في الوحدة الثانيه وبعد التعرف على اللغات متدنية المستوى ينتقل الطالب الى تعلم احد اللغات عالية المستوى وهي لغة جافا فيتعلم كيفية انشاء اكواد برمجيه متطور وتصميم برامجه متقدم بخطوات اسهل واكثر كفائة من لغه التجميع.',
      'في الوحدة الرابعه يدخل الطالب في عمق الشبكات حيث يتعلم عن عناوين الانترنت وكيفيه تقسيم الشبكات و من ثم التعرف على بروتوكولات الانترنت وما هو دورها في وظيفة طلب اتصال بالانترنت العالمي',
      'في الوحدة الرابعه يدخل الطالب الى شبكات مجال العمل ويتعلم كيف ينشىء مجال ويكون قادر على ادارته وانشاء حسابات المستخدمين والمجموعات وادارتها وتوزيع الصلاحيات على المستخدمين فيها.',
    ],
  },
}

export default function Grade() {
  const { id } = useParams()
  const data = gradeData[id]

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-emerald-600">الصفحة غير موجودة</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <PageBanner
        title={data.title}
        subtitle={data.desc}
        icon={data.icon}
      />

      <AnimatedSection className="space-y-8">
        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4">الخطة الدراسية</h2>
            <ul className="space-y-3">
              {data.subjects.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl"
                >
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.section>
          <AnimatedItem>
  <motion.section
    whileHover={{ scale: 1.01 }}
    className="myMidea bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
  >
    <h2 className="text-xl font-bold text-emerald-800 mb-6">
      صور ووسائط 
    </h2>

    {id === '1' && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[l1, l2, l3, l4].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`lab-${i}`}
            className="w-full h-48 object-cover rounded-xl shadow"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    )}

    {id === '2' && (
      <div className="w-full aspect-video myVideo">
        <iframe
          className="rounded-xl"
          src={l12}
          title="Educational Video"
          allowFullScreen
        />
      </div>
    )}
  </motion.section>
</AnimatedItem>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  )
}
