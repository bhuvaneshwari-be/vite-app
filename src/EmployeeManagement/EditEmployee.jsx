import { useState } from "react";

export default function EditEmployee(emp, setName, setDepartment, setEditId) {
    setName(emp.name);
    setDepartment(emp.department);
    setEditId(emp.id);
}