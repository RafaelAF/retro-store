type Props = {
    msgs: string[]
}

export default function TopBar ({msgs}: Props){
    return (
        <div className="w-full max-h-[59px] bg-white py-5">
            {msgs.length > 0 && msgs.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}