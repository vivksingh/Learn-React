import PropType from 'prop-types'
import styles from './Container.module.css'

const Container = (props) => {
    return <div className ={styles.Container}>{props.children}</div>
}

Container.propTypes = {
    children : PropType.node
};

export default Container;