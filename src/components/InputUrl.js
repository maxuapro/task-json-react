import { useRef } from 'react'
import classes from './InputUrl.module.css'


const InputUrl = props => {

    const refUrl = useRef()

    const onSubmit = event => {
        event.preventDefault()
        console.log('submitted! URL from ref', refUrl.current.value)
        props.getUrl(refUrl.current.value)

    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    
                    <label htmlFor="url"><h3>URL</h3></label>

                    <div className={classes.urlblock}>
                        <input className={classes.inputfield} type="text" name="url" id="url" placeholder="Your URL here" ref={refUrl} />
                        <button className={classes.gobutton} type="submit"><h3>GO</h3></button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default InputUrl