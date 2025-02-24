export enum UserRole {
    Student = "Student",
    Instructor = "Instructor",
    Admin = "Admin"
}

export function logUserRole(role: UserRole): string {
    return `User role: ${role}`;
}

export function filterByKey<T>(array: T[], key: keyof T, value: T[keyof T]): T[] {
    return array.filter((item) => item[key] === value);
}
