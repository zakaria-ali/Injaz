import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
import { publicUrl } from '../utils/publicUrl'
import './Specialty.css'
export default function Specialty() {
  return (
    <div className="space-y-8">
      <PageBanner
        title="تخصص صيانة أجهزة الحاسوب والشبكات"
        subtitle="التعريف بالتخصص والمنهاج"
        icon="💻"
      />

      <AnimatedSection className="space-y-8">
        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4">التعريف بالتخصص</h2>
            <p className="text-emerald-900 leading-relaxed mb-4">
              تخصص صيانة أجهزة الحاسوب والشبكات هو أحد التخصصات المهنية في التعليم الفلسطيني، ويهدف إلى إعداد طلبة مؤهلين للعمل في مجال صيانة أجهزة الحاسوب وتركيب وإدارة الشبكات السلكية واللاسلكية والدعم الفني.
            </p>
            <p className="text-emerald-900 leading-relaxed">
              يشمل المنهاج مبادئ الإلكترونيات، والصيانة البرمجية والصلبة (Hardware & Software)، وتصميم وبناء الشبكات، أنظمة التشغيل، وأمن الشبكات، بما يواكب متطلبات سوق العمل المحلي والعالمي.
            </p>
          </motion.section>
        </AnimatedItem>

        <AnimatedItem>
        <motion.section
    whileHover={{ scale: 1.01 }}
    className=" mySection bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
  >
    <h2 className="text-xl font-bold text-emerald-800 mb-6">
    "علم الحاسوب هو الفن الذي تتحول فيه الأفكار إلى شيفرات، وتتحول الشيفرات إلى عوالم رقمية تصنع المستقبل." 💡💻 
    </h2>
          <motion.img
            src={publicUrl('sp.jpeg')}
            alt={`specialty`}
            className="w-full h-48 object-cover rounded-xl shadow"
            whileHover={{ scale: 1.05 }}
          />
  </motion.section>
        </AnimatedItem>
        
        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4">المحتوى الدراسي</h2>
            <ul className="space-y-2 text-emerald-900">
              {[
                'أساسيات الكهرباء والدوائر المنطقية',
                'صيانة مكونات الحاسوب الصلبة (الهاردوير)',
                'صيانة البرمجيات وأنظمة التشغيل',
                'تصميم وبناء الشبكات السلكية واللاسلكية',
                'أمن الشبكات وإدارة الأنظمة',
                'الدعم الفني وحل المشكلات التقنية',
                'تعلم لغات البرمجه الرئيسية',
                'انشاء شبكات مجال العمل وتقسيم الشبكات',
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </AnimatedItem>

        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4">فرص العمل</h2>
            <p className="text-emerald-900 leading-relaxed">
              يؤهل التخصص الخريجين للعمل كفني صيانة حاسوب، فني شبكات، مسؤول دعم فني، أو الانخراط في مشاريع تقنية خاصة. كما يمكنهم إكمال تعليمهم في الجامعات الفلسطينية في تخصصات الحاسوب وتكنولوجيا المعلومات.
            </p>
          </motion.section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  )
}
