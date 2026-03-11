import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

export default function Home() {
  return (
    <div className="space-y-8">
      <PageBanner
        title="ملف الانجاز"
        subtitle="لمعلم الحاسوب والشبكات — م. زكريا ولدعلي"
        icon="📚"
      />

      <AnimatedSection className="space-y-8">
        {/* Header with optional small photo */}
        <AnimatedItem>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center py-6 bg-white rounded-2xl shadow-lg border border-emerald-100 px-4 flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <div className="w-full">
              <div className="flex flex-wrap justify-around text-emerald-700">
                <span><strong>التخصص:</strong> الحاسوب والشبكات</span>
                <span><strong>المدرسة:</strong> محمود خليل أبو الرب المهنية</span>
              </div>
            </div>
          </motion.header>
        </AnimatedItem>

        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
               رؤية المعلم
            </h2>
            <p className="text-emerald-900 leading-relaxed">
              أسعى إلى إعداد طالب مهني يمتلك الكفاءة التقنية، والقدرة على التفكير التحليلي، والجاهزية المهنية، ليكون قادرًا على التعامل مع أنظمة الحاسوب وتقنيات الشبكات باحترافية، ومواكبة التطور التكنولوجي ومتطلبات سوق العمل.
              وأعمل على تحويل غرفة الصف إلى بيئة تعلم تطبيقية محفزة قائمة على الممارسة العملية، وحل المشكلات، والتعلم الذاتي، بما يسهم في إعداد خريج يمتلك المهارة والمعرفة والقيم المهنية، وقادر على الابتكار والمشاركة الفاعلة في خدمة المجتمع.
            </p>
          </motion.section>
        </AnimatedItem>

        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📋</span>
               رسالة المعلم
            </h2>
            <p className="text-emerald-900 leading-relaxed">
              تقديم تعليم مهني نوعي يجمع بين الجانب النظري والتطبيقي في مجالي الحاسوب والشبكات، يركز على تنمية المهارات التقنية للطلبة، وتعزيز التفكير الناقد، وبناء الشخصية المهنية المنضبطة، من خلال استراتيجيات تعليم حديثة، وتوظيف التكنولوجيا، ومراعاة الفروق الفردية، بما يضمن إعداد طلبة مؤهلين علميًا وعمليًا للحياة المهنية.
            </p>
          </motion.section>
        </AnimatedItem>

        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span>
               أهداف المعلم
            </h2>
            <ul className="space-y-2 text-emerald-900">
              {[
                'إكساب الطلبة المهارات الأساسية والمتقدمة في الحاسوب والشبكات.',
                'ربط المفاهيم النظرية بالتطبيق العملي داخل المختبر.',
                'إعداد الطلبة للانخراط في سوق العمل بثقة وكفاءة.',
                'غرس قيم احترام الوقت والمحافظة على الأجهزة.',
                'تعزيز ثقافة الانضباط والمسؤولية المهنية.',
                'تعزيز روح المبادرة والتعلم المستمر.',
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-2"
                >
                  <span className="text-emerald-500 mt-1">•</span>
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
            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
               السمات المهنية
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'الالتزام بأخلاقيات المهنة',
                'مواكبة التطورات التقنية',
                'التخطيط الجيد للحصص',
                'استخدام استراتيجيات تعليم نشطة',
                'مراعاة الفروق الفردية',
                'إدارة الصف والمختبر بكفاءة',
                'تشجيع الإبداع',
                'العمل بروح الفريق',
              ].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </AnimatedItem>

        <AnimatedItem>
          <motion.section
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span>
               مؤشرات الأداء
            </h2>
            <ul className="space-y-2 text-emerald-900">
              {[
                'إعداد خطط واضحة',
                'توظيف المختبر بفاعلية',
                'تقويم متنوع',
                'متابعة الطلبة',
                'تطبيق التعلم بالمشاريع',
                'توثيق الإنجازات',
                'المحافظة على الأجهزة',
                'المشاركة في الأنشطة المدرسية',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  {item}
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
            <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📈</span>
               رؤية المعلم للتقييم السنوي
            </h2>
            <p className="text-emerald-900 leading-relaxed mb-4">
              أحرص على تطوير أدائي المهني باستمرار من خلال الاطلاع على المستجدات التربوية والتقنية، وتوظيف استراتيجيات تدريس حديثة، وتفعيل التعلم القائم على التطبيق العملي.
            </p>
            <p className="text-emerald-900 leading-relaxed">
              وأعمل على متابعة الطلبة بصورة منتظمة، واستخدام أدوات تقويم متعددة، وبناء بيئة صفية إيجابية داعمة للتعلم، مع تعزيز الشراكة مع إدارة المدرسة والزملاء وأولياء الأمور.
            </p>
          </motion.section>
        </AnimatedItem>
      </AnimatedSection>
    </div>
  )
}
