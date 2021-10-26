

export default function RestartButton(props:{onClick:()=>void}) {
    return (
        <button className="restart" onClick={props.onClick}>
            Play again
        </button>
    );
}

