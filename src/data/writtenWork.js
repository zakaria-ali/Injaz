// الصفوف
export const grades = [
  { id: "11", label: "الصف الأول الثانوي" },
  { id: "12", label: "الصف الثاني الثانوي" }
]

// المواد
export const subjects = [
  { id: "drawing", label: "رسم صناعي" },
  { id: "industry", label: "علم صناعة" },
  { id: "practical", label: "تدريب عملي" }
]

// الفصول
export const semesters = [
  { id: "1", label: "الفصل الدراسي الأول" },
  { id: "2", label: "الفصل الدراسي الثاني" }
]


export const writtenWork = {

  // الصف الأول الثانوي
  11: {

    drawing: {

      1: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/11/drawing/sem1/daily1.doc",
          }
        ],

        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/11/drawing/sem1/mid.doc",
        }],

        dailyExams2: [{
          id: 1,
          title: "امتحان يومي",
          file: "/files/11/drawing/sem1/daily2.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/11/drawing/sem1/final.doc",
          }
        ],

        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/11/drawing/sem1/pl.doc",
        }],

        preparations: [{
          id: 1,
          title: "تحضير المقرر الدراسي",
          file: "/files/11/drawing/sem1/pr.doc",
        }]
      },

      2: {
          monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/11/drawing/sem2/mid.doc",
        }],
       
        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/11/drawing/sem2/final.doc",
          }
        ],

        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/11/drawing/sem2/pl.doc",
        }],

      }

    },
        industry: {

      1: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/11/industry/sem1/daily1.doc",
          }
        ],

        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/11/industry/sem1/mid.doc",
        }],

        dailyExams2: [{
          id: 1,
          title: "امتحان يومي",
          file: "/files/11/industry/sem1/daily2.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/11/industry/sem1/final1.doc",
          },
          {
            id: 2,
            title: "امتحان نهائي",
            file: "/files/11/industry/sem1/final2.doc",
          }
        ],

        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/11/industry/sem1/pl.doc",
        }],

        preparations: [{
          id: 1,
          title: "تحضير المقرر الدراسي",
          file: "/files/11/industry/sem1/pr.doc",
        }]
      },

      2: {
          monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/11/industry/sem2/mid.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/11/industry/sem2/final.doc",
          }
        ],

        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/11/industry/sem2/pl.doc",
        }],

              }

    },
        practical: {

      1: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/11/practical/sem1/daily1.doc",
          }
        ],

        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/11/practical/sem1/mid.doc",
        }],

        dailyExams2: [{
          id: 1,
          title: "امتحان يومي",
          file: "/files/11/practical/sem1/daily2.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/11/practical/sem1/final.doc",
          }
        ],

              },

      2: {
        
        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/11/practical/sem2/mid.doc",
        }],

        
        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/11/practical/sem2/final.doc",
          }
        ],

              }

    }

  },


  // الصف الثاني الثانوي
  12: {

    drawing: {

      1: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/12/drawing/sem1/daily1.doc",
          }
        ],

        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/12/drawing/sem1/mid.doc",
        }],

        dailyExams2: [{
          id: 1,
          title: "امتحان يومي",
          file: "/files/12/drawing/sem1/daily2.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/12/drawing/sem1/final.doc",
          }
        ],

        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/12/drawing/sem1/pl.doc",
        }],

        preparations: [{
          id: 1,
          title: "تحضير المقرر الدراسي",
          file: "/files/12/drawing/sem1/pr.doc",
        }]
      },

      2: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/12/drawing/sem2/daily1.doc",
          }
        ],

        
        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/12/drawing/sem2/pl.doc",
        }],

        preparations: [{
          id: 1,
          title: "تحضير المقرر الدراسي",
          file: "/files/12/drawing/sem2/pr.doc",
        }]
      }

    },
    industry: {

      1: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/12/industry/sem1/daily1.doc",
          },
        ],

        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/12/industry/sem1/mid.doc",
        }],

        dailyExams2: [{
          id: 1,
          title: "امتحان يومي",
          file: "/files/12/industry/sem1/daily2.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/12/industry/sem1/final.doc",
          }
        ],

        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/12/industry/sem1/pl.doc",
        }],

        preparations: [
          {
          id: 1,
          title: "تحضير المقرر الوحدة الأولى",
          file: "/files/12/industry/sem1/pr1.doc",
        },
        {
          id: 2,
          title: "تحضير المقرر الوحدة الثانية",
          file: "/files/12/industry/sem1/pr2.doc",
        }
      ]
      },

      2: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/12/industry/sem2/daily1.doc",
          }
        ],

      
        plans: [{
          id: 1,
          title: "خطة المقرر الدراسي",
          file: "/files/12/industry/sem2/pl.doc",
        }],

        preparations: [
          {
          id: 1,
          title: "تحضير المقرر الوحدة الأولى",
          file: "/files/12/industry/sem2/pr1.doc",
        },
        {
          id: 2,
          title: "تحضير المقرر الوحدة الثانية",
          file: "/files/12/industry/sem2/pr2.doc",
        }
      ]
      }

    },
    practical: {

      1: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/12/practical/sem1/daily1.doc",
          },
        ],

        monthlyExams: [{
          id: 1,
          title: "امتحان شهرين",
          file: "/files/12/practical/sem1/mid.doc",
        }],

        dailyExams2: [{
          id: 1,
          title: "امتحان يومي",
          file: "/files/12/practical/sem1/daily2.doc",
        }],

        finalExams: [
          {
            id: 1,
            title: "امتحان نهائي",
            file: "/files/12/practical/sem1/final.doc",
          }
        ],
      },

      2: {
        dailyExams1: [
          {
            id: 1,
            title: "امتحان يومي",
            file: "/files/12/practical/sem2/daily1.doc",
          }
        ],

              }

    }

  }

}



// جلب البيانات
export const getWrittenWorkData = (gradeId, subjectId, semesterId) => {

  if (!gradeId || !subjectId || !semesterId) return null

  return writtenWork?.[gradeId]?.[subjectId]?.[semesterId] || null
}