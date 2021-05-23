import './Group_6.css';
import Card from './Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Group_6({ setBigcard }) {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=
        20
        `).then((result) => {
            console.log(result);
            setData(result.data.results);
            setBigcard(result.data.results[0]);
        });

    }, []);

    function open(detail) {
        setBigcard(detail)
    }
    return (
        <div className="Group_6">
            {
                data &&
                data.map(ele => {
                    return (
                        <div onClick={() => { open(ele) }}>
                            <Card className="Card_1" name={ele.name} gender={ele.gender} email={ele.email} />
                        </div>

                    )
                })
            }
        </div>
    );
}

export default Group_6;