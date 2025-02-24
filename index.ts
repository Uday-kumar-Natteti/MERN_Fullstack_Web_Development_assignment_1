import { createCounter } from "./modules/CounterModule.js";
import { countElements } from "./modules/DOMUtils.js";
import { addTableEventListener, addRow, deleteRow } from "./modules/EventDelegation.js";
import { UserRole, logUserRole, filterByKey } from "./modules/Utils.js";

// Initialize Counter Module
const counter = createCounter();
const counterValue = document.getElementById("counterValue");

document.getElementById("increment")?.addEventListener("click", () => {
    counterValue!.textContent = String(counter.increment());
});
document.getElementById("decrement")?.addEventListener("click", () => {
    counterValue!.textContent = String(counter.decrement());
});
document.getElementById("reset")?.addEventListener("click", () => {
    counterValue!.textContent = String(counter.reset());
});

// Count Elements in Container
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const elementCount = document.getElementById("elementCount");
    if (container) {
        elementCount!.textContent = String(container.children.length);
        countElements.call(container);
    }
});

// Table Event Delegation
document.addEventListener("DOMContentLoaded", function () {
    addTableEventListener("dynamicTable");
    document.getElementById("addRow")?.addEventListener("click", () => addRow("dynamicTable"));
    document.getElementById("deleteRow")?.addEventListener("click", () => deleteRow("dynamicTable"));
});

// User Role Selection
document.getElementById("userRole")?.addEventListener("change", (event) => {
    const role = (event.target as HTMLSelectElement).value as UserRole;
    const roleMessage = document.getElementById("roleMessage");
    roleMessage!.textContent = logUserRole(role);
});

// Filter Courses
const courses = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" }
];

document.getElementById("category")?.addEventListener("change", (event) => {
    const category = (event.target as HTMLSelectElement).value;
    const filteredList = document.getElementById("filteredCourses");
    const filteredCourses = filterByKey(courses, "category", category);

    filteredList!.innerHTML = "";
    filteredCourses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course.name;
        filteredList!.appendChild(li);
    });
});
