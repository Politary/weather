import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherList = () => {
    const [data, setData] = useState([]);

    const handleClick = async () => {
        console.log('click');
        const newData = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c53bf3e244553ba293bc4ff420dc8478`
        );
        await setData(newData.data.list);
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <ul>
            <li>
                <button onClick={handleClick}>click</button>
            </li>
            {data.map((item) => (
                <li key={item.dt}>{item.dt}</li>
            ))}
            {/*<li>{data.city.name}</li>*/}
        </ul>
    );
};
