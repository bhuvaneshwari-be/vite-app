import { useState } from "react";

export default function DeleteEmployee(employees, setEmployees, id) {
    setEmployees(employees.filter((emp) => emp.id !== id));
}