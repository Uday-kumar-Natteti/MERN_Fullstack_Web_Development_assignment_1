# **Module 2.1 Assignment: Advanced JavaScript & TypeScript Concepts**  

## **Project Overview**  
This project implements core JavaScript and TypeScript features, including closures, event delegation, modular patterns, and TypeScript utilities. The project includes:  

✅ **Counter Module** (Increment, Decrement, Reset using Closures)  
✅ **DOM Element Counter** (Counts elements inside a container using `this`)  
✅ **Interactive Table** (Event Delegation for handling row clicks)  
✅ **User Role Selection** (Using Enums & Role-Specific Messages)  
✅ **Generic Filtering** (Filter courses based on category selection)  

---

## **📁 Folder Structure**

Module2_Assignment_<YourName>
│── dist/               # Compiled JavaScript files
│── node_modules/       # Dependencies (after npm install)
│── src/                # TypeScript source files
│   ├── modules/
│   │   ├── CounterModule.ts
│   │   ├── DOMUtils.ts
│   │   ├── EventDelegation.ts
│   │   ├── Utils.ts
│   ├── index.ts        # Main entry point
│── index.html          # Main HTML file (root directory)
│── styles.css          # Optional CSS file (root directory)
│── tsconfig.json       # TypeScript configuration
│── package.json        # NPM dependencies and scripts
│── README.md           # Documentation
│── screenshots/        # Screenshots of working features


---

## **🚀 Project Setup**
Follow these steps to set up and run the project:

### **1️⃣ Initialize the Project**

npm init -y

This creates a `package.json` file.

---

### **2️⃣ Install Required Dependencies**

npm install typescript ts-node lite-server --save-dev

- **TypeScript**: Compiles `.ts` files  
- **TS-Node**: Runs TypeScript directly  
- **Lite-Server**: Lightweight development server  

---

### **3️⃣ Initialize TypeScript**

npx tsc --init

This creates `tsconfig.json` for TypeScript configurations.

---

### **4️⃣ Update `package.json` (Add Scripts)**
Modify the `package.json` file to add build and start scripts:

json
"scripts": {
    "build": "tsc",
    "start": "lite-server"
}


---

### **5️⃣ Write TypeScript Code**
Place all `.ts` files inside `src/modules/`.  

- **CounterModule.ts** – Implements a private counter using closures.  
- **DOMUtils.ts** – Counts elements inside a container using `this`.  
- **EventDelegation.ts** – Adds event delegation for an interactive table.  
- **Utils.ts** – Includes Enums, Type Guards, and Generic Filtering.  

---

### **6️⃣ Compile TypeScript**

npm run build

This converts TypeScript (`.ts`) files into JavaScript (`.js`) inside the `dist/` folder.

---

### **7️⃣ Run the Development Server**

npm start

This will open `index.html` in your browser using **Lite-Server**.

---

## **📜 Feature Guide**

### **1️⃣ Counter Module**
- Displays a **count value**.
- Has **Increment, Decrement, and Reset** buttons.

### **2️⃣ DOM Element Counter**
- Counts and displays the **number of elements** inside a container.

### **3️⃣ Interactive Table**
- Click on any table cell to **trigger an event**.
- Buttons to **Add** and **Delete Rows** dynamically.

### **4️⃣ User Role Selection**
- Dropdown to select **Student, Instructor, or Admin**.
- Displays a **role-specific message**.

### **5️⃣ Course Filtering**
- Dropdown to select a **course category**.
- Filters and displays courses **dynamically**.

---

## **📸 Screenshots**
Include screenshots inside the `screenshots/` folder showing:  
✔ **Counter in action**  
✔ **Table interaction**  
✔ **User role selection**  
✔ **Filtered courses**

---

## **🔧 Troubleshooting**
### **1. TypeScript Compilation Issues**
Run:

npx tsc --noEmit

This checks for TypeScript errors without generating output files.

### **2. Server Not Starting**
Ensure the `lite-server` is installed:

npm install lite-server --save-dev
npm start


### **3. TypeScript Not Recognizing Modules**
Try:

rm -rf dist && npm run build

This removes old compiled files and recompiles them.

---

## **🎯 Submission Guidelines**
1️⃣ **ZIP the entire project** (`Module2_Assignment_<YourName>.zip`).  
2️⃣ **Ensure the following files are included**:
   - `index.html`
   - `styles.css`
   - `src/` folder (all TypeScript files)
   - `dist/` folder (compiled JS)
   - `package.json`
   - `tsconfig.json`
   - `README.md`
   - `screenshots/`

---

## **📌 Conclusion**
This project demonstrates **advanced JavaScript and TypeScript** concepts with a **modular approach**. It includes **event handling, closures, generics, TypeScript utility types, and modular ES6 code**.