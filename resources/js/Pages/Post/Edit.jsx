import {Link, Head} from '@inertiajs/react';
import React, {useState, useEffect} from 'react';
import { router } from '@inertiajs/react'
import Main from "@/Layouts/MainLayout";
export default function Edit({errors, post}) {

    let [values, setValues] = useState(post);
    let handleSubmit = (event) => {
        event.preventDefault();
        router.patch(route('post.update',post.id), values);
    }
    let handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({...values, [name]: value});
    }
    return (
        <>
            <Head title="Edit"/>
            <Main>
                <div>
                    <Link href={route('post.index')} className={'text-sky-500 text-sm mb-8'}>Back</Link>
                </div>
                <h1 className={'text-lg'}>Create</h1>
                <form onSubmit={handleSubmit}>
                    <input value={values.id} type='hidden'/>
                    <div className={'mb-4'}>
                        <input value={values.title} type='text' placeholder='title' name='title' className={'w-full rounded-full border-gray-300'} onChange={handleInput}/>
                        { !!errors.title && (<div className={'text-red-400 text-sm text-right'}>{errors.title}</div>)}
                    </div>
                    <div className={'mb-4'}>
                        <textarea value={values.content} placeholder='content' name='content' className={'w-full rounded-full border-gray-300'} onChange={handleInput}></textarea>
                        { !!errors.values && (<div className={'text-red-400 text-sm text-right'}>{errors.values}</div>)}
                    </div>
                    <div>
                        <button type="submit" className="ml-auto hover:bg-white hover:text-sky-500 block p-2 w-32 border border-sky-500 bg-sky-500 rounded-full text-center text-white">Update</button>
                    </div>
                </form>
            </Main>
        </>
    );
}

