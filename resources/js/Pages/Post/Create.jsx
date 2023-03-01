import {Link, Head} from '@inertiajs/react';
import React, {useState, useEffect} from 'react';
import { router } from '@inertiajs/react'
import Main from "@/Layouts/MainLayout";
export default function Create({errors}) {

    let [values, setValues] = useState({title: '', content: ''});

    let handleSubmit = (event) => {
        event.preventDefault();
        router.post(route('post.store'), values);
    }
    let handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({...values, [name]: value});
    }
    return (
        <>
            <Head title="Create"/>
            <Main>
                <div>
                    <Link href={route('post.index')} className={'text-sky-500 text-sm mb-8'}>Back</Link>
                </div>
                <h1 className={'text-lg'}>Create</h1>
                <form onSubmit={handleSubmit}>
                    <div className={'mb-4'}>
                        <input value={values.title} type='text' placeholder='title' name='title' className={'w-full rounded-full border-gray-300'} onChange={handleInput}/>
                        { !!errors.title && (<div className={'text-red-400 text-sm text-right'}>{errors.title}</div>)}
                    </div>
                    <div className={'mb-4'}>
                        <textarea value={values.content} placeholder='content' name='content' className={'w-full rounded-full border-gray-300'} onChange={handleInput}></textarea>
                        { !!errors.content && (<div className={'text-red-400 text-sm text-right'}>{errors.content}</div>)}
                    </div>
                    <div>
                        <button type="submit" className="ml-auto hover:bg-white hover:text-sky-500 block p-2 w-32 border border-sky-500 bg-sky-500 rounded-full text-center text-white">Store</button>
                    </div>
                </form>
            </Main>
        </>
    );
}

