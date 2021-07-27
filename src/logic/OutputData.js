import { useState, useEffect } from 'react'
import countChildren from './refineData'
// import data from '../tests/data'
// import goodData from '../tests/goodData'
import classes from './OutputData.module.css'



const OutputData = props => {
    const [out, setOut] = useState([])

    useEffect(() => {

        if (props.url) {

            fetch(props.url)
                .then(res => res.json())
                .then(data => {
                    setOut(countChildren(data.data))
                })
                .catch(err => console.log(err))
            return
        }
        setOut([])

    }, [props])


    return (
        <>

            {out.length > 0 ? out.map(el => (
                <div className={classes.element} key={el.name}>
                    {el.indentleft !== 0
                        ? <>
                            <div className={classes.indent1}></div>
                            <div className={classes.indent2} style={
                                {
                                    width: `${el.indentleft * 40}px`,
                                    borderLeft: (out.indexOf(el) === out.length - 1
                                        ? null
                                        : '1px solid black')
                                }
                            }>
                                <div className={classes.indent3} style={{
                                    borderLeft: (out.indexOf(el) !== out.length - 1
                                    ? null
                                    : '1px solid black')
                                }}></div>
                            </div>
                        </>
                        : null}

                    <div className={classes.theline}>
                        <h3>{el.name}</h3>
                    </div>

                </div>
            )) : <h1>No data</h1>
            }
            {!props.url && <h1>No url</h1>}
        </>

    )
}

export default OutputData