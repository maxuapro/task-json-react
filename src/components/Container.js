import classes from './Container.module.css'

export default function Container(props) {
    return (
        <div className={classes.maincontainer} style={{ backgroundColor: props.color }}>
            {props.children}
        </div>
    )
}