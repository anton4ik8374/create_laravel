import {Link, Head} from '@inertiajs/react';
import React, {useState, useEffect} from 'react';
import { router } from '@inertiajs/react'
import Main from "@/Layouts/MainLayout";
export default function Show(props) {
    return (
        <>
            <Head title="Create"/>
            <Main>
                <div>
                    <Link href={route('post.index')} className={'text-sky-500 text-sm mb-8'}>Back</Link>
                </div>
                <h1 className={'text-lg'}>Show</h1>
                <div className={'mt-4 pt-4 border-t border-t-sky-400'}>
                    <h3>id: {props.post.id}</h3>
                    <h3>Title: {props.post.title}</h3>
                    <h3>Content: {props.post.content}</h3>
                </div>
            </Main>

        </>
    );
}

