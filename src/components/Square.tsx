
export default function Square(props:{onClick:()=>void,value: string}) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
