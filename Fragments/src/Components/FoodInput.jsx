import styles from './FoodInput.module.css'

function FoodInput({ handleEvent }){
    return <input type="text" placeholder="Enter item here" className = {styles.foodInput} onChange={handleEvent}/>;
}

export default FoodInput