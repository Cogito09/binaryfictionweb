import {NextResponse} from "next/server";

const posts = [
    { title: 'Post 1', slug: '1' ,content: 'This is post 1'},
    { title: 'Post 2', slug: '2' ,content: 'This is post 2' },
    { title: 'Post 3', slug: '3' ,content: 'This is post 3' },
];

export async function GET(){
    return NextResponse.json(posts);
}