import React, { useEffect } from 'react'
import './Post.css'

function Post({ data, setPage }) {

    useEffect(() => {
        const observer = new IntersectionObserver((param) => {

            if(param[0].isIntersecting) {
                observer.unobserve(lastImage);
                setPage((page) => page + 1);
            }
        }, { threshold: 0.5 });

        const lastImage = document.querySelector('.image-post:last-child');

        if(!lastImage) {
            return;
        }

        observer.observe(lastImage);

        return () => {
            if(lastImage) {
                observer.unobserve(lastImage);
            }

            observer.disconnect();
        }
    }, [data])

    return (
        <div className='container'>
            {
                data.map((item) => {
                    return <img className="image-post" key={item.id} src={item.download_url}/>
                })
            }
        </div>
    )
}

export default Post