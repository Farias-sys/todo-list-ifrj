import React from "react";
import {useEffect, useState} from "react"
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableFooter
} from './ui/table';

import {
    Checkbox
} from './ui/checkbox';

import {
    Badge
} from './ui/badge';

import {
    formatDateToLocaleRead
} from '../utils'

import { tasksData } from "../sample/tasks-data";



export default function TasksTable(){
    const[isTaskDisabled, setIsTaskDisabled] = useState(false);

    const[tasksDataArray, setTasksDataArray] = useState(tasksData);

    const onTaskSelected = (taskId) => {
        setIsTaskDisabled(true);
        
        setTimeout((() => {
            setTasksDataArray((activeTaskDataArray) => {
                return activeTaskDataArray.filter(task => task.id !== taskId);
            });

            setIsTaskDisabled(false);
        }), 200);
        
    }

    const statusUserFriendlySwitch = (status) => {
        switch(status){
            case 'todo':
                return {
                    label: 'À fazer',
                    color: '#d4150f'
                };
            case 'doing':
                return {
                    label: 'Fazendo',
                    color: '#d47b0f'
                };
            case 'done':
                return {
                    label: 'Feita',
                    color: '#32a852'
                }
        }
    }
    

    return(
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">Concluir</TableHead>
                    <TableHead className="text-center">Tarefa</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Tags</TableHead>
                    <TableHead className="text-center">Criada em</TableHead>
                    <TableHead className="text-center">Prazo</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    tasksDataArray.map((task, index) => (
                        <TableRow 
                            key={task.id}
                        >
                            <TableCell className="text-center">
                                <Checkbox
                                    className="border-green-500 data-[state=checked]:bg-green-500 h-8 w-8"
                                    onClick={() => onTaskSelected(task.id)}
                                    disabled={isTaskDisabled}
                                />
                            </TableCell>
                            <TableCell className="text-center">{task.title}</TableCell>
                            <TableCell className="text-center">
                                <Badge 
                                    variant={"outline"} 
                                    style={{backgroundColor:`${statusUserFriendlySwitch(task.status).color}`}}
                                >
                                    {statusUserFriendlySwitch(task.status).label}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-center">{task.tags.map((tag, index) => {
                                return (
                                    <>
                                    <Badge variant={"outline"} className={"mr-1"} style={{backgroundColor:`${tag.color}`}} key={tag.id}>{tag.name}</Badge>
                                    </>
                                )
                            })}</TableCell>
                            <TableCell className="text-center">{formatDateToLocaleRead(task.createdAt)}</TableCell>
                            <TableCell className="text-center">{formatDateToLocaleRead(task.deadlineAt)}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}