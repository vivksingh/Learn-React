import PropType from 'prop-types'
import styles from './Container.module.css'

const Container = ({children}) => {
    return <div className ={styles.Container}>{children}</div>
}

Container.propTypes = {
    children : PropType.node
};

export default Container;