import "./App.css";
import {Fragment, useState} from "react";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

function removeItem(array, index) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
}

function List({items}) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [unselectedItems, setUnselectedItems] = useState(items);

    console.log(selectedItems)
    return (<Fragment>
        <ul className="List">
            {selectedItems.map((item, index) => (
                <li
                    key={item.name}
                    onClick={() => {
                        setSelectedItems(removeItem(selectedItems, index))
                        setUnselectedItems(unselectedItems.concat(item))
                    }}
                    className={`List__item List__item--${item.color} selected`}>
                    {item.name}
                </li>
            ))}
            {unselectedItems.map((item, index) => (
                <li key={item.name}
                    onClick={() => {
                        setSelectedItems(selectedItems.concat(item))
                        setUnselectedItems(removeItem(unselectedItems, index))
                    }}
                    className={`List__item List__item--${item.color}`}>
                    {item.name}
                </li>
            ))}
        </ul>
    </Fragment>);
}

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce((items, size) => [...items, ...fruits.reduce((acc, fruit) => [...acc, ...colors.reduce((acc, color) => [...acc, {
    name: `${size} ${color} ${fruit}`, color,
},], [],),], [],),], [],);
export default function App() {
    return (<List items={items}/>);
}
