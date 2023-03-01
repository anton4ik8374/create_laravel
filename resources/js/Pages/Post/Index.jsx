import {Link, Head, router} from '@inertiajs/react';
import Main from "@/Layouts/MainLayout";

export default function Index(props) {

    let dateFormat = (date) => {
        let dateFormatter = new Intl.DateTimeFormat('ru');
        return dateFormatter.format(new Date(date));
    }

    let handleDelete = (id) => {
        router.delete(route('post.delete', id));
    }

    return (
        <>
            <Head title="Posts"/>
            <Main>
                <h1 className={'text-lg'}>Posts</h1>
                <div className={'mb-8'}>
                    <Link
                        href={route('post.create')}
                        className="hover:bg-white hover:text-sky-500 block p-2 w-32 border border-sky-500 bg-sky-500 rounded-full text-center text-white"
                    >
                        Add post
                    </Link>
                </div>
                <div>
                {props?.posts.length && props?.posts.map(item => (
                        <div key={item.id} className={'mt-4 pt-4 border-t border-t-sky-400'}>
                            <h3>{item.id}</h3>
                            <h3>{item.title}</h3>
                            <p className={'text-sm text-right'}>{item.date}</p>
                            <Link
                                href={route('post.show', item.id)}
                                className="text-sky-500 mr-8"
                            >
                                Show
                            </Link>
                            <Link
                                href={route('post.edit', item.id)}
                                className="text-sky-500 mr-8"
                            >
                                Edit
                            </Link>
                            <p onClick={() => handleDelete(item.id)}
                                className="text-red-500 mr-8 cursor-pointer"
                            >
                                Delete
                            </p>
                        </div>
                    )
                )
                }
                </div>
            </Main>
        </>
    );
}
