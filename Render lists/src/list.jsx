import PropTypes from 'prop-types'

function List(props){
    const fruits = props.items;
    const category = props.category;

    fruits.sort((a, b)=>
        b.calories - a.calories
    );

    // const lowcalfruits = fruits.filter((fruit) => fruit.calories < 100);
    // const highcalfruits = fruits.filter((fruit) => fruit.calories > 100);

    const list = fruits.map((fruit) =>
     <li key ={fruit.id}> &nbsp; {fruit.name}&nbsp;: {fruit.calories} </li>);

    return(
        <>
        <h3 className = "list-category">{category.toUpperCase()}</h3>
        <ul className="list-items">{list}</ul>
        </>
    );
}

List.defaultProps = {
    category : "category",
    items : []
}

List.protoTypes = {
    id : PropTypes.number,
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        calories : PropTypes.number
    }))
}

export default List;