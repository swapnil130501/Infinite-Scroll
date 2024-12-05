import React, { useEffect, useState } from 'react'
import Post from './Post';

function InfiniteScroll() {
    const[data, setData] = useState([]);
    const [page, setPage] = useState(1);

    async function getPost(url) {
        const response = await fetch(url);
        const result = await response.json();
        setData((prev) => [...prev, ...result]);
    }

    useEffect(() => {
        getPost(`https://picsum.photos/v2/list?page=${page}&limit=3`)
    }, [page])

    return (
        <Post data={data} setPage={setPage}></Post>
    )
}

export default InfiniteScroll