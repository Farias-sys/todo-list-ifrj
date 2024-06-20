import React from "react";
import Header from "../components/Header";
import TasksTable from "../components/TasksTable";

export default function Dashboard(){
    return(
        <>
        <div className="main min-h-screen">
            <Header/>
            <main className="flex-1 p-1 flex-gap-2">
                <div className="mt-4 h-3/5 rounded-md overflow-auto">
                    <TasksTable/>
                </div>
            </main>
        </div>
        </>
    )
}