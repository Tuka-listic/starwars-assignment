import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Card = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect (() => {
        setLoading (true);
        axios.get(`https://swapi.dev/api/films`)
        .then(response => {
            setData(response.data.results);
            setLoading(false); 
      })
        .catch(error => {
            setError(error);
            setLoading(false);
        })

    }, []);
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

     const reduceLength = (text, maxlength) => {
        if (text.length > maxlength) {
            return text.slice(0, maxlength).trim() + '...' 
        } else {
            return text;
        }

            
    }

   
    return (
        <div className="App">
            <header>
                <svg viewBox="0 0 1347.6 227.4" className="logo"><g id="Logo"><path d="M788.9 54.8l8.7 25.5c4.7 13.8 8.9 24.8 9.4 24.8.6-.5 17.6-49.8 17.6-49.8h32.9l-39.7 115.6h-22.9s-24.4-70.5-24.3-70.7L745.1 170h-22.6L683.3 54.8H716s17.9 50.8 18.2 50.8l17.9-50.8h36.8m-116.7-8l3.6 10.6L715 172.5l1.8 5.4h33.9l1.9-5.3 17.7-48.5c1.5 4.4 3.2 9.2 4.8 14 6.1 17.7 12.2 35.3 12.2 35.3l1.9 5.4h34.3l1.9-5.4L865 57.9l3.6-10.6h-49.8l-1.9 5.4c-3 8.6-6.9 20-10.3 29.7-.5-1.5-1-3-1.6-4.6l-8.7-25.5-1.8-5.4h-48.2l-1.9 5.3-10.5 29.7c-3.5-9.7-7.5-21-10.5-29.7l-1.9-5.3H683.1l-10.9-.1zM1295.4 54.4l-.1 30.3s-32.6-.1-49.2-.1h-9.4c-2.9.5-4.7 6.6-3.9 9.3.4 1.4 3.4 5.8 6.6 9.8 3.2 4.1 8.5 10.7 11.8 14.7 8.3 10.4 9.5 12.4 10.2 18.4 1.2 9.7-3.3 20.2-11.8 27.1-8.5 6.9-8.1 7-71.4 7h-2.8c-38.5 0-58.8-.3-61.8-1-5.3-1.2-13.6-8-35.8-29.3-8-7.6-15.3-14.3-15.7-14.3l-.3 44.6-35.9-.2-.2-115h80.1c24.1.9 40.5 24.9 37.2 40.2-.7 3.5-2.6 8.5-4.2 11.2-3.2 5.5-11.4 12.6-18 15.6-2.4 1.1-4.4 2.4-4.4 2.9 0 1.7 8.1 9.6 11.1 10.9 2.6 1.1 10.1 1.3 43.2 1.3h10.6c33.3 0 31.6-.2 34.2-5.7 1.8-3.8.4-6.1-12.2-20.4-16.1-16-14.4-23.6-14.5-29.3-.2-6.8 5.1-28.1 32.8-28.1l73.8.1m-215.1 53.1c15.4 0 18.5-.2 21.8-1.7 11-4.8 11.6-19 1-25.3-2.3-1.4-5.3-1.6-22-1.7l-19.3-.1c.2.1-.1 27.6-.1 27.6s5 1.2 18.6 1.2m223.1-61.1h-81.8c-16 0-25.5 6.3-30.6 11.6-8.3 8.6-10.3 19.5-10.2 24.6v1.3c-.1 8.3 1.2 17.8 16.7 33.2 3.1 3.5 8.2 9.2 10.1 12.1-4.2.5-15 .5-26.3.5h-10.6c-19.9 0-36.7-.1-40.1-.7-.5-.3-1.2-.9-1.9-1.5 6.9-4.2 13.8-10.8 17.1-16.4 2-3.4 4.2-9.2 5.1-13.6 2-9.6-1.3-21.2-9-31.1-9-11.5-22-18.3-35.7-18.8h-88.3v8l.2 115v7.9h7.9l35.9.2h8v-8l.2-26.7c.7.7 1.5 1.4 2.3 2.2 24.2 23.2 32.4 29.7 39.6 31.3 2 .4 5.3 1.2 63.5 1.2h2.8c31.5 0 47.4 0 56.8-.9 10.8-1 14.3-3.5 19.5-7.7l.2-.1c10.7-8.7 16.3-21.8 14.7-34.3-1-8.1-3.2-11.5-11.9-22.4l-2.6-3.2c-3-3.8-6.7-8.4-9.2-11.5-2-2.5-3.5-4.7-4.5-6.1h4.9c16.4 0 48.9.1 49.2.1h8v-8l.1-30.3-.1-7.9zm-233.5 52.8v-6.6-5.8l11.2.1c6.4 0 16.1.1 18 .6 2.4 1.5 3.8 3.7 3.6 6.1-.1 1.3-.7 3.6-3.8 5-1.8.8-4.5 1-18.6 1-4.4-.1-7.8-.2-10.4-.4zM953.1 53.9l40.3 115.9-32.8.1-5.5-17.4-58.7-.5-5.2 17.4-32.5-.3L898.5 54l54.6-.1m-26.4 17c-.1.3-5.1 14.2-10.2 28.1-5.1 14-10.3 28-10.3 28.1.1 0 18.3-.1 30-.1h9.5c-.3-.5-19-55.4-19-56.1m32.1-25h-5.7l-54.6.1h-5.7l-1.9 5.4-39.8 115.2-3.6 10.5 11.1.1 32.5.3 6 .1 1.7-5.8 3.5-11.7 46.9.4 3.7 11.8 1.8 5.6h5.9l32.8-.1 11.2-.1-3.7-10.6-40.3-115.8-1.8-5.4zm-41.2 73.2c1.5-4.1 3.6-9.7 6.3-17.3.9-2.4 1.7-4.6 2.4-6.5.7 2 1.4 4.1 2.2 6.4.6 1.9 3.5 10.3 5.9 17.4-7.2-.1-12.7 0-16.8 0z"></path><g><path class="st2" d="M326.5 53.9v28.6h-57.3V170h-34.1V82.5l-66.9.2c-8.1 0-9.1 6.4-9.1 8.9 0 3 2 6 12.8 19.7 7 8.9 13.5 17.8 14.3 19.7 4.6 10.7-1.4 27.3-12.3 34.1-7.8 4.8-6.5 4.9-64.3 4.9H37.9v-32.1h97.9l2.9-2c1.9-1.4 3.1-3.2 3.5-5.8.6-3.7.3-4.2-11.8-17.8-14.3-16.1-15.8-19-15.1-29.3.8-11.7 11.3-28.8 29.6-28.8l181.6-.3m8-8h-8l-181.6.3c-10.5 0-20.2 4.5-27.3 12.7-5.8 6.7-9.6 15.4-10.2 23.5-1 13.5 2.1 18.4 17.1 35.2 4.3 4.9 8.4 9.5 9.8 11.5 0 .1 0 .1-.1.2l-.1.1-.8.6H29.9v48h79.7c28.5 0 42.6 0 50.9-.6 9.5-.7 12.5-2.3 17.1-5.1l.6-.4c14.3-8.8 21.6-29.8 15.4-44.1-1.9-4.4-14-19.7-15.4-21.5-3.8-4.8-10.1-12.7-11.1-15 0-.2.1-.4.1-.5.2 0 .5-.1 1-.1l58.9-.2V178h50.2V90.5h57.3V45.9h-.1zM419.5 54.9l40.2 116.2-32.8-.2-5.3-17.4-58.4-.3L358 170h-33.4l39.7-115.1h55.2m-46.8 73.6l39.8-.1c.1 0-19.3-57.2-19.5-57.2-.1 0-20.7 57.3-20.3 57.3m52.5-81.6H358.6l-1.9 5.4L317 167.4l-3.7 10.6h50.6l1.8-5.6 3.5-11.1 46.6.2 3.6 11.8 1.7 5.6h5.9l32.8.2 11.3.1-3.7-10.7-40.3-116.3-1.9-5.3zm-41.3 73.6c2.5-7 5.9-16.7 9-25.3 2.9 8.6 6.2 18.2 8.6 25.3h-17.6zM532.4 54.9c25.9 0 43.9.4 47.4 1 8 1.4 15.2 5.7 20.7 12.2 5.7 6.9 7 10.1 7.7 19.5 1.1 13.3-5.2 24.7-17.7 32.1-3.6 2.2-7.4 4.3-8.3 4.7-1.4.6-1.2 1.3 1.3 4.3 1.6 1.9 4.5 4.7 6.3 6.1l3.4 2.6 62.1.9.6 31.7h-38.1c-29.4 0-38.9-.3-41.6-1.2-4.1-1.4-14.1-9.8-34.3-29L527.5 126l.2 44h-37V54.9h41.7m-5.5 51.7h19.7c19.1 0 19.7-.1 22.5-2.1 4.9-3.7 6.6-7.4 6.1-13.2-.5-6-2.8-9.1-8.6-11.6-3.2-1.4-6.4-1.7-21.7-1.7H527v28.6m5.4-59.7h-49.8V178h53v-8l-.1-25.2.8.8c25 23.8 32.4 29.2 37.2 30.8 3.7 1.3 10 1.6 44.2 1.6H664l-.2-8.2-.6-31.7-.1-7.7-7.7-.1-59.4-.9-1.2-1c-.4-.3-.9-.7-1.4-1.2.4-.3.9-.5 1.2-.7 15-9 22.9-23.4 21.6-39.7-.9-11-2.8-15.9-9.5-24-6.6-8-15.6-13.3-25.4-15-5.6-.8-33-.9-48.9-.9zm2.5 39.2h9.9c14 0 16.8.2 18.5 1 3.2 1.4 3.6 2.1 3.8 5 .3 2.8-.1 4-2.9 6.1-.1.1-.2.1-.2.2-1.9.3-8.8.3-17.4.3h-11.7V86.1z"></path></g></g></svg>
            </header>
            <div class='container'>
                <div className='list'>
                    {data.map(list => (
                        <div className='data-list' key={list.id}>
                            <h3>{list.title}</h3>
                            <p className='date'>{new Date(list.release_date).toLocaleDateString('en-us',{month: 'long', day: 'numeric', year: 'numeric'})}</p>
                            <p className='crawl' >{reduceLength(list.opening_crawl, 260)}</p>
                            <a href='#'>More info</a>
                        </div>
                    ))}
                </div>
            </div>
            
           
            
        </div>

  )
}


export default Card;