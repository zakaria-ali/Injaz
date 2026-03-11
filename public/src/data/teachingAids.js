export const grades = [
  { id: "grade11", label: "الأول الثانوي" },
  { id: "grade12", label: "الثاني الثانوي" }
]

export const subjects = [
  { id: "drawing", label: "رسم صناعي" },
  { id: "industry", label: "علم صناعة" },
  { id: "practical", label: "تدريب عملي" }
]


export const lessonsData = {

  grade11: {

    industry: [
      {
        id: 1,
        title: "المقاومات بالالوان",
        aids: {
          website: "https://zakaria-ali.github.io/Resistor-Project/"
        }
      },
    ]

  },


  grade12: {
    industry: [
      {
        id: 1,
        title: "أساسيات الدوال في جافا",
        aids: {
          ppt: "/aids/grade12/industry/نعم او لا جافا الدرس الثالث.pptx",
          video: "/aids/grade12/industry/أساسيات الدوال في جافا.mp4",
        }
      },
      {
        id: 2,
        title: "أساسيات الشبكات",
        aids: {
          ppt: "/aids/grade12/industry/الفرق  بين فئات العناوين.xlsx",
          video: "/aids/grade12/industry/أساسيات شبكات IP.mp4",
        }
      },
      {
        id: 3,
        title: "أساسيات لغة التجميع",
        aids: {
          video: "/aids/grade12/industry/أساسيات لغة التجميع.mp4",
        }
      },
      {
        id: 4,
        title: "التعليمات الحسابية",
        aids: {
          ppt: "/aids/grade12/industry/التعليمات الحسابية.pptx",
        }
      },
      {
        id: 5,
        title: "تعبيرات لغه جافا",
        aids: {
          ppt: "/aids/grade12/industry/نعم او لا جافا الدرس الثاني.pptx",
          video: "/aids/grade12/industry/تعبيرات جافا التعليمية.mp4",
        }
      },
      {
        id: 6,
        title: "المتغيرات وأنواع البيانات",
        aids: {
          video: "/aids/grade12/industry/جافا المتغيرات وأنواع البيانات.mp4",
        }
      },
      {
        id: 7,
        title: "جافا بداية البرمجة",
        aids: {
          video: "/aids/grade12/industry/جافا بداية البرمجة.mp4",
        }
      },
      {
        id: 8,
        title: "جدول ASCII",
        aids: {
          video: "/aids/grade12/industry/جدول ASCII.mp4",
        }
      },
      {
        id: 9,
        title: "تعليمات التحكم",
        aids: {
          video: "/aids/grade12/industry/لغة التجميع تحكم!.mp4",
        }
      },
      {
        id: 10,
        title: "مصفوفات لغه جافا ",
        aids: {
          video: "/aids/grade12/industry/مصفوفات جافا ببساطة.mp4",
          pptx: "/aids/grade12/industry/نعم او لا جافا المصفوفات.pptx"
        }
      },
      {
        id: 11,
        title: "نظام DNS",
        aids: {
          video: "/aids/grade12/industry/نظام DNS ببساطة.mp4",
          pptx: "/aids/grade12/industry/نعم او لا DNS.pptx"
        }
      },
      {
        id: 12,
        title: "مجال العمل",
        aids: {
          pptx: "/aids/grade12/industry/نعم او لا مجال العمل.pptx"
        }
      },
    ],
    practical: [
      {
        id: 1,
        title: "المصفوفات في لغه جافا",
        aids: {
          website: "https://zakaria-ali.github.io/array/"
        }
      },
    ]

  }

}


export const getLessons = (grade, subject) => {
  return lessonsData?.[grade]?.[subject] || []
}