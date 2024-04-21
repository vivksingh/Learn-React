import './List.css'

function List(props){
    return(
            <ul className = "list-Container">
                {props.items.map((value, indx) => {
                    return <li key = {indx}>{value}</li>;
                })}
            </ul>
    );
}

export default List;