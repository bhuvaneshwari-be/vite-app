import { useState } from "react";

export default function AddEmployee(
    employees, 
    setEmployees, 
    name, 
    department) 
    {
        if (name && department) {
            setEmployees([
                ...employees,
                { id: Date.now(), name: name, department: department }
            ]);
        }
    }