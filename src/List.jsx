function List(){
    const fruits = ["apple", "banana", "banana", "cherry", "date", "elderberry", "fig", "grape", "kiwi", "lemon", "mango", "orange", "peach", "pear", "plum", "raspberry", "strawberry", "tangerine", "watermelon"];
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    //return <ul>{listItems}</ul>
    return <ol>{listItems}</ol>
}

export default List;