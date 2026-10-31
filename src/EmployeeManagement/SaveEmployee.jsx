import { useState } from "react";

export default function SaveEmployee(employees, setEmployees, editId, name, department) {
    setEmployees(
        employees.map((emp) =>
            emp.id === editId
                ? { ...emp, name: name, department: department }
                : emp
        )
    );
}