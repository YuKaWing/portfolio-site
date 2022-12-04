interface BackdropProps {
    children: React.ReactNode
    isShown: boolean
    onClick?: React.MouseEventHandler
}

function Backdrop(props: BackdropProps) {
    return (
        <div 
            onClick={props.onClick}
            className={"bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-full h-full z-[99999]" + " " + (props.isShown ? "" : "hidden")}
        >
            {props.children}
        </div>
    );
}

export default Backdrop