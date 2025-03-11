function List(props){

    const list = props.list;

    var ordered = list.sort((a, b) => b.riches - a.riches);
    var listOfLists = ordered.map(item => <li className="list-item">{item.name}: {item.riches}</li>);
    return(
        <ul className="unordered-list">{listOfLists}</ul>
    );
}
export default List