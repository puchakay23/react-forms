import './Item.css'

function Item(props){
    const itemname = props.name;
    return (<p className="nirma">{itemname}</p>)
}

export default Item;