// import styles from './Button.module.css'

function Button(){
    const styles = {
    backgroundColor: "cyan",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
    };

    return(
        <button style={styles}
        //  className={styles.button}
         >
            Click here</button>
    );
}

export default Button