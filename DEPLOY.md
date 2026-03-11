# نشر المشروع مجاناً (Publish for Free)

يمكنك نشر مشروع **ملف إنجاز المعلم** على الإنترنت مجاناً باستخدام أحد الخدمات التالية.

---

## النشر التلقائي على GitHub Pages (مفعّل)

تم إعداد **GitHub Actions** بحيث يتم البناء والنشر تلقائياً عند كل `git push` إلى `main`.

**تفعيل الموقع لأول مرة:**
1. ادخل إلى المستودع على GitHub: **https://github.com/zakaria-ali/Injaz**
2. **Settings** → **Pages**
3. تحت **Build and deployment** → **Source** اختر **GitHub Actions**
4. احفظ. بعد اكتمال العملية (Actions) سيكون الموقع متاحاً على:
   **https://zakaria-ali.github.io/Injaz/**

---

## الطريقة 1: Vercel (موصى بها)

1. **إنشاء حساب**: ادخل إلى [vercel.com](https://vercel.com) وسجّل دخولك (يمكن استخدام GitHub).
2. **رفع المشروع إلى GitHub**:
   - أنشئ مستودعاً جديداً على [github.com/new](https://github.com/new) (مثلاً اسمه `injaz`).
   - في مجلد المشروع على جهازك، نفّذ في الطرفية:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/injaz.git
     git push -u origin main
     ```
     (استبدل `YOUR_USERNAME` باسم مستخدمك على GitHub.)
3. **النشر على Vercel**:
   - من لوحة Vercel اضغط **Add New** → **Project**.
   - اختر المستودع `injaz` (أو اسم المستودع الذي أنشأته).
   - اترك الإعدادات الافتراضية واضغط **Deploy**.
4. بعد دقائق ستظهر لك رابط مثل: `https://injaz-xxxx.vercel.app` — هذا هو رابط موقعك المجاني.

---

## الطريقة 2: Netlify

1. **إنشاء حساب**: ادخل إلى [netlify.com](https://netlify.com) وسجّل (يمكن عبر GitHub).
2. **رفع المشروع إلى GitHub** كما في الخطوة 2 أعلاه.
3. **النشر على Netlify**:
   - من Netlify: **Add new site** → **Import an existing project**.
   - اختر **GitHub** واختر مستودع المشروع.
   - تأكد أن:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - اضغط **Deploy site**.
4. ستحصل على رابط مثل: `https://random-name.netlify.app`. يمكنك تغيير الاسم من **Site settings** → **Domain management**.

---

## الطريقة 3: GitHub Pages (بدون Vercel/Netlify)

إذا أردت النشر على GitHub Pages فقط:

1. في `vite.config.js` غيّر `base` إلى اسم المستودع:
   ```js
   base: '/injaz/',   // استبدل injaz باسم مستودعك
   ```
2. في `src/App.jsx` أعد إضافة الـ basename:
   ```jsx
   <BrowserRouter basename="/injaz">
   ```
3. ثبّت الإضافة: `npm install -D gh-pages`
4. في `package.json` أضف:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
5. نفّذ: `npm run deploy`. الموقع سيكون على: `https://YOUR_USERNAME.github.io/injaz/`

---

## ملاحظات

- **Vercel** و **Netlify** يعطيانك رابط HTTPS ويدعمان React Router تلقائياً (تم إعداد الملفات `vercel.json` و `netlify.toml` لذلك).
- لا ترفع ملف `.env` أو أي أسرار إلى GitHub؛ تأكد أن `.env` موجود في `.gitignore` (وهو كذلك في المشروع).

بعد اتباع إحدى الطرق سيكون مشروعك متاحاً للجميع مجاناً.
