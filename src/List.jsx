function List(){
    const fruits = [
        {id:1,name:"cpple",calories:100}, 
        {id:3,name:"banana",calories:11},
        {id:2,name:"dineapple",calories:13},
    ];
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));
    fruits.sort((b,a)=> a.name.localeCompare(b.name));
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>);

    //return <ul>{listItems}</ul>
    return <ol>{listItems}</ol>
}

export default List;