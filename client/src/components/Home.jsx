import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [nba, setNba] = useState([]);
    let [input, setInput] = useState(null);
    let [response, setResponse] = useState([])
    useEffect(() => {
        if (nba.length === 0){
            (async function nba(){
                try{
                  const nba = await axios.get('https://mach-eight.uc.r.appspot.com/')
                  const nbaData = nba.data.values;
                  setNba(nbaData)
                  console.log(nbaData);
                } catch(err) {
                  console.log(err)
                }
              })();
        }
    }, [])
    const handleClick = () =>{
        var nbaInch = []
        for (var i = 0; i < nba.length; i++){
            for (let j = i + 1; j < nba.length; j++) {
                if (Number(nba[i]['h_in']) + Number(nba[j]['h_in']) === input){
                    nbaInch.push(nba[i]['first_name'] + ' ' + nba[i]['last_name'] + ' - ' + nba[j]['first_name'] + ' ' + nba[j]['last_name'])
                }
            }
        }
        if(nbaInch.length === 0){
            nbaInch.push('No matches found')
        }
        setResponse(nbaInch);
    }
    const handleChange = (e) => {
        setInput(Number(e.target.value));
    }
      return (
        <div className={styles.divCenter}>
            <div className={styles.form}>
                <h1>Nba Test</h1>
                <input  className={styles.input} type='number' onChange={handleChange} value={input} placeholder='Put the inches here...'></input>
                <button className={styles.btn} onClick={handleClick}>Look for all pairs</button>
                <ul>
                    {response?.map(e => {
                        return (
                            <li className={styles.ul}>{e}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
      );
}