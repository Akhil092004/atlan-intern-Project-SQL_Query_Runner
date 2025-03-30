# **SQL Query Runner**  
🚀 **A web-based tool to execute and test SQL queries dynamically.**  

## **📜 Overview**  
SQL Query Runner is a **React-based** application that allows users to run **predefined or custom SQL queries**. The results are dynamically displayed in a structured format.  

---

## **🛠 Tech Stack & Dependencies**  

- **Framework:** React (with TypeScript)  
- **Styling:** Tailwind CSS  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Libraries Used:**  
  - **Appwrite (Optional):** Backend services (if integrated)  
  - **React Router (if applicable):** Navigation  
  - **Lodash (if applicable):** Utility functions  

---

## **⚡ Page Load Time & Performance**  

### **⏳ Page Load Time:**  
- **Measured using Chrome DevTools → Performance Tab.**  
- **Initial Load Time:** **~1.2 seconds** (without API calls).  

### **🚀 Optimizations Done:**  
✅ **Code Splitting & Lazy Loading** - Used **React.lazy()** to load components dynamically.  
✅ **Reduced Unused CSS & JS** - Used **PurgeCSS** to remove unused Tailwind styles.  
✅ **Optimized Images & Assets** - Minimized images using **TinyPNG**.  
✅ **State Optimization** - Avoided unnecessary re-renders using `useMemo` & `useCallback`.  
✅ **Debouncing User Inputs** - Prevented excessive re-renders in search/query inputs.  

---

## **📎 How to Run the Project?**  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/sql-query-runner.git
cd sql-query-runner

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the development server
npm run dev
```

---

## **📌 Future Improvements**  
🔹 **Connect to a real database (PostgreSQL/MySQL).**  
🔹 **Improve query validation & error handling.**  
🔹 **Allow users to save and manage queries.**  
🔹 **Export query results (CSV, JSON, Excel).**  

---

